function o({
  skipTransition: e = !1,
  update: t,
  onFinish: i
}) {
  if (e || !document.startViewTransition) {
    const r = Promise.resolve(t());
    return {
      ready: Promise.resolve(Error("View transitions unsupported")),
      updateCallbackDone: r,
      finished: r.then(() => {
        i && i();
      }),
      skipTransition: () => {
      }
    };
  }
  const n = document.startViewTransition(t);
  return window.__NTH_viewTransition = n, n.finished.catch((r) => {
    throw new Error(r);
  }).finally(
    () => {
      window.__NTH_viewTransition = void 0, i && i();
    }
  ), n;
}
export {
  o as transitionHelper
};
