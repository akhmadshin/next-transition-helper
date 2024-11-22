import { useEffect as C } from "react";
import { getHandleRouteChangeComplete as s } from "./utils/handle-route-change-complete.js";
import { handleHashChangeStart as a, handleHashChangeComplete as h } from "./utils/handle-hash-change.js";
const u = ({ children: n, singletonRouter: t }) => {
  const e = t == null ? void 0 : t.router, r = s(t);
  return C(() => {
    if (!e)
      return;
    let o = t.router._key;
    return window.__NTH_routerKeyByHashRouteKey && window.__NTH_routerKey && (o = window.__NTH_routerKeyByHashRouteKey[o] ?? o), window.__NTH_routerKey = o, e.events.on("routeChangeComplete", r), e.events.on("hashChangeStart", a), e.events.on("hashChangeComplete", h), () => {
      e.events.off("routeChangeComplete", r), e.events.off("hashChangeStart", a), e.events.off("hashChangeComplete", h);
    };
  }, []), n;
};
export {
  u as WithTransitions
};
