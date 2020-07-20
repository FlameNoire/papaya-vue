export const debounce = function(func, ms) {
  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    func.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;
    }, ms);
  }
}