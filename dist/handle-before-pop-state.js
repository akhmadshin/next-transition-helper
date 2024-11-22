import { handleHistoryTransitionStarted as c } from "./utils/handle-history-change-started.js";
const y = (t, s) => {
  const o = t.key, { url: a, as: r, options: l } = t;
  let e = { x: 0, y: 0 };
  try {
    const n = sessionStorage.getItem("__next_scroll_" + o);
    e = JSON.parse(n);
  } catch {
    e = { x: 0, y: 0 };
  }
  return e = e || { x: 0, y: 0 }, c(o).then(() => {
    setTimeout(async () => {
      await s.replace(a, r, { shallow: l.shallow, locale: l.locale, scroll: !1 }), setTimeout(() => {
        scrollTo({ left: e.x, top: e.y, behavior: "instant" });
      }, 0);
    }, 8);
  }), !1;
};
export {
  y as handleBeforePopState
};
