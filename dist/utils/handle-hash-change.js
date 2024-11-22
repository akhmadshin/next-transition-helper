const _ = (e) => () => {
  let o = e.router._key;
  window.__NTH_routerKeyByHashRouteKey = window.__NTH_routerKeyByHashRouteKey || {}, window.__NTH_routerKeyByHashRouteKey[o] && (o = window.__NTH_routerKeyByHashRouteKey[o]), window.__NTH_routerKeyCopy = o, window.__NTH_viewTransition && window.__NTH_viewTransition.skipTransition();
}, t = () => {
  const e = singletonRouter.router._key;
  window.__NTH_routerKeyByHashRouteKey = window.__NTH_routerKeyByHashRouteKey || {}, window.__NTH_routerKeyByHashRouteKey[e] || (window.__NTH_routerKeyByHashRouteKey = {
    ...window.__NTH_routerKeyByHashRouteKey,
    [e]: window.__NTH_routerKeyCopy
  }, window.__NTH_routerKeyCopy = void 0);
};
export {
  _ as getHandleHashChangeStart,
  t as handleHashChangeComplete
};
