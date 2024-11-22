function i(e) {
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    x: t.left + window.pageXOffset,
    y: t.top + window.pageYOffset,
    width: t.width,
    height: t.height
  };
}
export {
  i as getElementAbsolutePosition
};
