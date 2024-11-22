import o from "next/router";
const r = () => {
  let e = o.router._key;
  window.__NTH_routerKeyByHashRouteKey = window.__NTH_routerKeyByHashRouteKey || {}, window.__NTH_routerKeyByHashRouteKey[e] && (e = window.__NTH_routerKeyByHashRouteKey[e]), window.__NTH_routerKeyCopy = e, window.__NTH_viewTransition && window.__NTH_viewTransition.skipTransition();
}, t = () => {
  const e = o.router._key;
  window.__NTH_routerKeyByHashRouteKey = window.__NTH_routerKeyByHashRouteKey || {}, window.__NTH_routerKeyByHashRouteKey[e] || (window.__NTH_routerKeyByHashRouteKey = {
    ...window.__NTH_routerKeyByHashRouteKey,
    [e]: window.__NTH_routerKeyCopy
  }, window.__NTH_routerKeyCopy = void 0);
};
export {
  t as handleHashChangeComplete,
  r as handleHashChangeStart
};
