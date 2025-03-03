import sleep from "../lib/modules/sleep";
describe("sleep tests", () => {
  test("it should sleep for 1 second", async () => {
    const startTime = performance.now();
    await sleep(1000);
    const endTime = performance.now();
    expect(endTime - startTime).toBeGreaterThan(1000);
    expect(endTime - startTime).not.toBeLessThan(1000);
  });
  test("it should sleep for 0.1 second", async () => {
    const startTime = performance.now();
    await sleep(100);
    const endTime = performance.now();
    expect(endTime - startTime).toBeGreaterThan(100);
    expect(endTime - startTime).not.toBeLessThan(100);
  });
});
