import { runTransition as e } from "./utils/run-transition.js";
import { timeout as r } from "./utils/timeout.js";
import { getElementSelector as s } from "./utils/get-element-selector.js";
import { getElementAbsolutePosition as a } from "./utils/get-element-absolute-position.js";
const w = async (i) => {
  if (i) {
    const n = s(i), o = a(i);
    window.__NTH_transitionImgSelector = n, window.__NTH_transitionImgPosition = JSON.stringify(o), window.__NTH_transitionImgSrc = i.src.replace(location.origin || "", "");
    const t = document.querySelector("[style*='view-transition-name']");
    t && (t.style.viewTransitionName = ""), i.style.viewTransitionName = "__NTH_transition-img";
  }
  await e(), await r(8);
};
export {
  w as startTransition
};
