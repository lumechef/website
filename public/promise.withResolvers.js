// Tiny polyfill for Promise.withResolvers.
export {};
// @ts-ignore
if (!Promise.withResolvers) {
    // @ts-ignore
    Promise.withResolvers = function () {
        let resolve;
        let reject;
        const promise = new Promise((res, rej) => ((resolve = res), (reject = rej)));
        return { promise, resolve, reject };
    };
}
//# sourceMappingURL=promise.withResolvers.js.map