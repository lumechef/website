import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
export const Visits = new Mongo.Collection('Visits');
if (Meteor.isServer) {
    Meteor.publish('Visits', async () => {
        const user = await Meteor.userAsync();
        const isAdmin = !!user?.profile?.isAdmin;
        if (isAdmin)
            return Visits.find({});
        return [];
    });
    Meteor.methods({
        async 'visits.increment'(href) {
            const url = new URL(href);
            const route = url.pathname;
            const host = url.host;
            await Visits.upsertAsync({ host, route }, { $inc: { visits: 1 } });
        },
    });
}
else {
    Meteor.subscribe('Visits');
}
//# sourceMappingURL=Visits.js.map