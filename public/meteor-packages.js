// This file is used in the importmap to export the Meteor global APIs from "meteor/*" packages.
// See the importmap in public/index.html.
const global = globalThis;
export const Meteor = global.Meteor;
export const Tracker = global.Package.tracker.Tracker;
export const Mongo = global.Package.mongo.Mongo;
export const Session = global.Package.session.Session;
//# sourceMappingURL=meteor-packages.js.map