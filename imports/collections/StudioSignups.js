import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
export const StudioSignups = new Mongo.Collection('StudioSignups');
if (Meteor.isServer) {
    Meteor.publish('StudioSignups', async () => {
        const user = await Meteor.userAsync();
        const isAdmin = !!user?.profile?.isAdmin;
        if (isAdmin)
            return StudioSignups.find({});
        return [];
    });
    Meteor.methods({
        async studioSignup(email) {
            await StudioSignups.upsertAsync({ email }, { email });
        },
    });
}
else {
    Meteor.subscribe('StudioSignups');
}
//# sourceMappingURL=StudioSignups.js.map