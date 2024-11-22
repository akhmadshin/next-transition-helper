import { useEffect as C } from "react";
import { handleRouteChangeComplete as r } from "./utils/handle-route-change-complete.js";
import { handleHashChangeStart as h, handleHashChangeComplete as a } from "./utils/handle-hash-change.js";
const m = ({ children: n, singletonRouter: t }) => {
  const e = t == null ? void 0 : t.router;
  return C(() => {
    if (!e)
      return;
    let o = t.router._key;
    return window.__NTH_routerKeyByHashRouteKey && window.__NTH_routerKey && (o = window.__NTH_routerKeyByHashRouteKey[o] ?? o), window.__NTH_routerKey = o, e.events.on("routeChangeComplete", r), e.events.on("hashChangeStart", h), e.events.on("hashChangeComplete", a), () => {
      e.events.off("routeChangeComplete", r), e.events.off("hashChangeStart", h), e.events.off("hashChangeComplete", a);
    };
  }, []), n;
};
export {
  m as WithTransitions
};
