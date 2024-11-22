import { getElementAbsolutePosition as _ } from "./get-element-absolute-position.js";
import { isTransitionAvailable as a } from "./is-transition-available.js";
import { runTransition as w } from "./run-transition.js";
const H = async (o) => {
  await w();
  let t = o;
  window.__NTH_routerKeyByHashRouteKey = window.__NTH_routerKeyByHashRouteKey || {}, o && window.__NTH_routerKeyByHashRouteKey[o] && (t = window.__NTH_routerKeyByHashRouteKey[o]);
  let e = window.__NTH_routerKey;
  window.__NTH_routerKeyByHashRouteKey && window.__NTH_routerKey && (e = window.__NTH_routerKeyByHashRouteKey[window.__NTH_routerKey] ?? e);
  const n = sessionStorage.getItem(`__NTH_view_transition_image_selector_${e}-${t}`) || "";
  if (n) {
    const i = document.querySelector(n);
    if (i && i.src) {
      const s = _(i);
      if (sessionStorage.setItem(
        `__NTH_view_transition_image_${e}-${t}`,
        JSON.stringify(s)
      ), window.__NTH_transitionImgSrc = i.src.replace(location.origin || "", ""), a(`${e}-${t}`)) {
        const r = document.querySelector("[style*='view-transition-name']");
        r && (r.style.viewTransitionName = ""), i.style.viewTransitionName = "__NTH_transition-img";
      }
      return;
    }
  }
};
export {
  H as handleHistoryTransitionStarted
};
