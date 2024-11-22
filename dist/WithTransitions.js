import a, { useRouter as s } from "next/router";
import { useEffect as u } from "react";
import { handleRouteChangeComplete as o } from "./utils/handle-route-change-complete.js";
import { handleHashChangeStart as r, handleHashChangeComplete as n } from "./utils/handle-hash-change.js";
const _ = ({ children: h }) => {
  const e = s();
  return u(() => {
    if (!e)
      return;
    let t = a.router._key;
    return window.__NTH_routerKeyByHashRouteKey && window.__NTH_routerKey && (t = window.__NTH_routerKeyByHashRouteKey[t] ?? t), window.__NTH_routerKey = t, e.events.on("routeChangeComplete", o), e.events.on("hashChangeStart", r), e.events.on("hashChangeComplete", n), () => {
      e.events.off("routeChangeComplete", o), e.events.off("hashChangeStart", r), e.events.off("hashChangeComplete", n);
    };
  }, []), h;
};
export {
  _ as WithTransitions
};
