import a from "next/router";
import { isTransitionAvailable as d } from "./is-transition-available.js";
import { getElementSelector as u } from "./get-element-selector.js";
const H = () => {
  if (typeof window > "u" || !window.__NTH_pageMounted)
    return;
  let i = a.router._key;
  window.__NTH_routerKeyByHashRouteKey && window.__NTH_routerKey && (i = window.__NTH_routerKeyByHashRouteKey[i] ?? i), window.__NTH_previousRouterKey = window.__NTH_routerKey, window.__NTH_routerKey = i;
  let o = window.__NTH_routerKey;
  window.__NTH_routerKeyByHashRouteKey && window.__NTH_routerKey && (o = window.__NTH_routerKeyByHashRouteKey[window.__NTH_routerKey] ?? o), window.__NTH_transitionImgSelector && window.__NTH_transitionImgPosition && (sessionStorage.setItem(`__NTH_view_transition_image_selector_${window.__NTH_previousRouterKey}-${o}`, window.__NTH_transitionImgSelector), sessionStorage.setItem(`__NTH_view_transition_image_${window.__NTH_previousRouterKey}-${o}`, window.__NTH_transitionImgPosition), window.__NTH_transitionImgSelector = void 0, window.__NTH_transitionImgPosition = void 0);
  const t = `${o}-${window.__NTH_previousRouterKey}`, s = d(t), _ = sessionStorage.getItem(`__NTH_view_transition_image_selector_${t}`), n = _ ? document.querySelector(_) : void 0;
  if (n && s) {
    const e = document.querySelector("[style*='view-transition-name']");
    e && (e.style.viewTransitionName = ""), n.style.viewTransitionName = "__NTH_transition-img";
  } else {
    const e = document.querySelector(`img[src$='${window.__NTH_transitionImgSrc}']`);
    if (e) {
      const w = u(e) || "", r = document.querySelector("[style*='view-transition-name']");
      r && (r.style.viewTransitionName = ""), e.style.viewTransitionName = "__NTH_transition-img", sessionStorage.setItem(`__NTH_view_transition_image_selector_${t}`, w);
    }
  }
  window.__NTH_transitionImgSrc = void 0, window.__NTH_pageMounted && (window.__NTH_pageMounted(), window.__NTH_pageMounted = void 0);
};
export {
  H as handleRouteChangeComplete
};
