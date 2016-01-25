window.requestAnimationFrame = (callback) => {
  return window.setTimeout(() => {
    callback(performance.now())
  }, 16);
}

window.cancelRequestAnimationFrame = (id) => {
  clearTimeout(id);
}
