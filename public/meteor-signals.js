import { Tracker } from 'meteor/tracker';
export const { autorun: effect, nonreactive: untrack, onInvalidate: onCleanup } = Tracker;
//# sourceMappingURL=meteor-signals.js.map