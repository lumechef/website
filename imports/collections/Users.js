import { Meteor } from 'meteor/meteor';
if (Meteor.isServer) {
    Meteor.methods({
        async updateUsername(username) {
            if (!this.userId)
                return;
            await Meteor.users.updateAsync({ _id: this.userId }, { $set: { username } });
        },
    });
}
//# sourceMappingURL=Users.js.map