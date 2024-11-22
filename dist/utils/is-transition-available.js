function a(t, n, i) {
  const e = {
    x: n,
    y: i,
    width: window.screen.width,
    height: window.screen.height
  };
  return t.x < e.x + e.width && t.x + t.width > e.x && t.y < e.y + e.height && t.y + t.height > e.y;
}
const h = (t) => {
  if (!t)
    return !1;
  let n = !0, i = null, e = null;
  try {
    const s = sessionStorage.getItem("__NTH_view_transition_image_" + t);
    e = JSON.parse(s);
  } catch {
  }
  try {
    const s = sessionStorage.getItem("__next_scroll_" + t);
    i = JSON.parse(s);
  } catch {
    i = { x: 0, y: 0 };
  }
  if (e) {
    const s = a(e, (i == null ? void 0 : i.x) || 0, (i == null ? void 0 : i.y) || 0);
    n = i === null ? !0 : s;
  } else
    n = !0;
  return n;
};
export {
  h as isTransitionAvailable
};
