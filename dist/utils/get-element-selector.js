function r(t) {
  if (t.tagName === "BODY") return "BODY";
  const e = [];
  for (; t.parentElement && t.tagName !== "BODY"; ) {
    if (t.id) {
      e.unshift("#" + t.getAttribute("id"));
      break;
    } else {
      let i = 1, n = t;
      for (; n.previousElementSibling; n = n.previousElementSibling, i++) ;
      e.unshift(t.tagName + ":nth-child(" + i + ")");
    }
    t = t.parentElement;
  }
  return e.join(">");
}
export {
  r as getElementSelector
};
