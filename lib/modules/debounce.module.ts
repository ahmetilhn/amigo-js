/**
 * Return debounced callback after param delay
 * @param {Function} callback - Calling method after delay(ms) time
 * @param {number} delay - The delay in milliseconds before invoking the callback
 * @returns {Function}
 * @callback callback
 */
export const debounce = (callback: () => void, delay: number): (() => void) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};
