// Native ESM test: ///////////////////////////////////////////////////////
// This is not working natively (without ecmascript package) because import() not available in a Node `vm`: https://forums.meteor.com/t/attempt-to-import-native-es-modules-in-meteor-3-0-beta-0-no-luck-yet/61085
// import('./imports/test.js').then(({foo}) => console.log('foo', foo))
//
// This is also not working (with ecmascript installed) with the same error:
// function nativeImport(path) {
// 	console.log('eval import')
// 	return eval(`import('${path}')`)
// }
// nativeImport('./imports/test.js').then(({foo}) => console.log('foo', foo))
//
// This works with ecmascript installed when projects are not symlinked, which doesn't work for lume's repo (https://github.com/meteor/meteor/issues/12952):
// import {foo} from './imports/test.js'
// console.log('foo', foo)
///////////////////////////////////////////////////////////////////////////
import { Meteor } from 'meteor/meteor';
import '../imports/collections/index.js';
import { WebApp } from 'meteor/webapp';
import { Accounts } from 'meteor/accounts-base';
import * as fs from 'fs';
import * as path from 'path';
// @ts-expect-error missing type (TODO update away from @types/meteor? Ask
// Meteor's AI "How to set up TypeScript", there's some good docs.)
WebApp.addHtmlAttributeHook(() => ({ lang: 'en', prefix: 'og: http://ogp.me/ns#' }));
const lumeDomain = (sub) => `https://${sub ? sub + '.' : ''}lume.io`;
const locals = (port) => [
    `http://localhost:${port}`,
    `http://127.0.0.1:${port}`,
    `http://0.0.0.0:${port}`,
];
const allowedOrigins = [
    lumeDomain(),
    lumeDomain('docs'),
    // TODO authentication into the forum using Lume login.
    // "https://lume.community",
    // lume.io on localhost
    ...locals(8765),
    // docs.lume.io on localhost
    ...locals(54321),
];
// Allow only certain domains to access content from the server (for example
// domains that we have not authorized will not be able to authenticate using
// lume.io via iframe).
WebApp.rawHandlers.use(
/*'/public',*/
async function (req, res, next) {
    ///////////////////////////////////////////////////////////////////////////
    // CORS handling to disallow foreign origins from embedding lume.io,
    // hence forbidding them from using an iframe to get a user's auth
    // credentials.
    // Respond to preflight requests.
    // TODO Do we need this (if we're only on GET)?
    // if (req.method === 'OPTIONS') {
    // 	res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*')
    //  // Meteor is on GET only by default, with API communication over
    //  // WebSockets, we're currently not handling anything other than GET.c
    // 	res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
    // 	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    // 	res.setHeader('Access-Control-Max-Age', '3600')
    // 	res.writeHead(200)
    // 	res.end()
    // 	return
    // }
    // Check if the request is from a valid origin, and if so allow it.
    //
    // If there is no origin header, it means its a same-origin GET or HEAD
    // request in standard web browsers, otherwise it is another type of
    // same-origin request, or a cross-origin request (cross-origin requests
    // from non-hacked browsers always have the origin header). Setting
    // access control is not a security feature, but more of a convenience
    // for the browser to block resources from being usable on other
    // origins, so always use authentication. For non-browser clients such
    // as hacker servers that can easily set headers to whatever they want,
    // this will not prevent them from accessing the site, and user 2-factor
    // is recommended (only users savy enough to check the domain name in
    // their non-hacked address bar before logging in will be safe
    // otherwise).
    // (https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Origin#description)
    if (!req.headers.origin || allowedOrigins.includes(req.headers.origin)) {
        res.setHeader('Access-Control-Allow-Origin', req.headers.origin || '*');
        res.setHeader('Vary', 'Origin');
        // TODO maybe we only need to set this for documents (not scripts,
        // images, etc).
        res.setHeader('Content-Security-Policy', `frame-ancestors 'self' ${Meteor.isDevelopment ? locals('*').join(' ') : lumeDomain('*')}`);
    }
    else
        return getCoffee(res);
    if (req.url !== req.originalUrl)
        console.error('url and originalUrl do not match, needs handling:', req.url, req.originalUrl);
    ///////////////////////////////////////////////////////////////////////////
    // Implement custom request path handling such that a path like `/foo`
    // will serve `/foo.html`. This makes it possible to put `app.html` in
    // the `public/` folder, for example, and access it as `lume.io/app`
    // without using a special backend router, only the existence of HTML
    // files.
    const url = new URL(`https://lume.io` + req.url);
    // Continue as usual for / (Meteor serves that after building client/entry.html).
    if (url.pathname === '/')
        return next();
    // Redirect /foo/ to /foo (and /foo will render /foo.html or /foo/index.html if one of those exists)
    if (url.pathname.endsWith('/'))
        return permRedirect(res, url.pathname.replace(/\/$/g, ''));
    // Treat '/foo/bar' and '/foo/bar/' as 'foo/bar', '/foo' and '/foo/' as 'foo', and '/' as ''.
    let pathname = url.pathname;
    pathname = pathname.replace(/^\//g, '');
    pathname = pathname.replace(/\/$/g, '');
    const pathParts = pathname.split('/');
    // Continue as usual for files with extensions (Meteor serves those). We're only checking
    // extensionless extensionless paths like /foo
    if (pathParts[pathParts.length - 1].includes('.'))
        return next();
    // Location in the Meteor-specific build output (not relative to the
    // entry file's location in source code, but relative to
    // ./.meteor/local/build/programs/server/ from the project root.).
    const publicDir = path.resolve('..', 'web.browser', 'app');
    let searchPath = [];
    for (const part of pathParts) {
        searchPath.push(part);
        const fullPath = path.resolve(publicDir, ...searchPath);
        const filePaths = [fullPath + '.html', fullPath + '/index.html'];
        for (const filePath of filePaths) {
            let exists = false;
            try {
                exists = (await fs.promises.stat(filePath)).isFile();
            }
            catch (e) { }
            if (exists) {
                try {
                    return sendOk(res, await fs.promises.readFile(filePath));
                }
                catch (e) {
                    return failure(res, 'Failed to read and serve file: ', filePath);
                }
            }
        }
    }
    // Continue as usual if for /foo we didn't find /foo.html or /foo/index.html
    return next();
});
function getCoffee(res) {
    res.statusCode = 418; // see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/418
    res.write('go get some coffee');
    res.end();
}
function failure(res, ...msg) {
    console.error('Failure: ', ...msg);
    res.statusCode = 500;
    res.write('Failure.');
    res.end();
}
function sendOk(res, body) {
    res.statusCode = 200;
    res.write(body);
    res.end();
}
function permRedirect(res, newPath) {
    res.statusCode = 301;
    res.writeHead(301, { location: newPath });
    res.end();
}
//// Set up admins. ////////////////////////////////
// This is in server code only so that people won't see the list of emails on
// the client.
const admins = ['joe@lume.io', 'kyleb@lume.io', 'anastasia@lume.io', 'kyle@lume.io'];
Accounts.findUserByEmailTmp = Accounts.findUserByEmail;
// If a user signs up with a known admin email, make them an admin.
Accounts.onCreateUser((options, user) => {
    const isAdmin = user.emails?.some(email => admins.includes(email.address.toLowerCase()));
    user.profile = { ...user.profile, ...options.profile, isAdmin };
    return user;
});
const promises = [];
// Make all existing users with a known admin email admins.
for (const email of admins) {
    promises.push(Accounts.findUserByEmailTmp(email).then(user => {
        if (user)
            return Meteor.users.updateAsync({ _id: user._id }, { $set: { profile: { ...user.profile, isAdmin: true } } });
    }));
}
await Promise.all(promises);
// TODO configure default field selector.
// Accounts.config({ defaultFieldSelector: { includeThisOne: 1, excludeThisOne: 0 } })
//# sourceMappingURL=entry.js.map