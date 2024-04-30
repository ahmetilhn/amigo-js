/**
 * Await the method until time
 * @param {number} time - time for delay(typeof ms)
 * @returns {Promise}
 * @example
 * await sleep(500) // Promise
 */
export const sleep = async (time: number): Promise<void> => {
  return new Promise((resolve: () => void) => setTimeout(resolve, time));
};
