import { debounce } from "../lib/modules/debounce.module";

describe("Debounce tests", () => {
  const mockFn = jest.fn();
  jest.useFakeTimers();
  test("should call debounceFunc 1 times ", () => {
    const debouncedFunc = debounce(mockFn, 100);
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    jest.advanceTimersByTime(110);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  test("should call debounceFunc 1 times ", () => {
    const debouncedFunc = debounce(mockFn, 100);
    debouncedFunc();
    jest.advanceTimersByTime(110);
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
