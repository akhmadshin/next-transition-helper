import { useEffect as C } from "react";
import { getHandleRouteChangeComplete as s } from "./utils/handle-route-change-complete.js";
import { handleHashChangeComplete as r, getHandleHashChangeStart as f } from "./utils/handle-hash-change.js";
const u = ({ children: n, singletonRouter: t }) => {
  const e = t == null ? void 0 : t.router, o = s(t), h = f(t);
  return C(() => {
    if (!e)
      return;
    let a = t.router._key;
    return window.__NTH_routerKeyByHashRouteKey && window.__NTH_routerKey && (a = window.__NTH_routerKeyByHashRouteKey[a] ?? a), window.__NTH_routerKey = a, e.events.on("routeChangeComplete", o), e.events.on("hashChangeStart", h), e.events.on("hashChangeComplete", r), () => {
      e.events.off("routeChangeComplete", o), e.events.off("hashChangeStart", h), e.events.off("hashChangeComplete", r);
    };
  }, []), n;
};
export {
  u as WithTransitions
};
