import { transitionHelper as o } from "./transition-helper.js";
import { timeout as t } from "./timeout.js";
const r = async () => {
  window.__NTH_viewTransition && (window.__NTH_viewTransition.skipTransition(), await t(0));
  const i = new Promise((n) => {
    window.__NTH_pageMounted = n;
  });
  o({
    update: async () => {
      window.__NTH_pageMounted && await i;
    }
  });
};
export {
  r as runTransition
};
