import { sleep } from "./../lib/utils/sleep.util";
describe("Sleep test", () => {
  test("should sleep 1000 ms", async () => {
    const startDate: number = Date.now();
    await sleep(1000);
    const endDate: number = Date.now();
    const elapsedTime = endDate - startDate;
    expect(elapsedTime).toBeGreaterThanOrEqual(1000);
  });
});
