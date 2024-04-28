import { getPaths, getQueries } from "./../lib/modules/url.module";

describe("Url util tests", () => {
  const mockUrl: URL = new URL(
    "https://stackoverflow.com/questions/46105596/detail?queryOne=asd&queryTwo=dsa"
  );
  test("should return all paths", () => {
    expect(getPaths(mockUrl)).toEqual(["questions", "46105596", "detail"]);
  });
  test("should return queryOne", () => {
    const queries = getQueries(mockUrl);
    expect(queries.get("queryOne")).toBe("asd");
  });
  test("should return queryTwo", () => {
    const queries = getQueries(mockUrl);
    expect(queries.get("queryTwo")).toBe("dsa");
  });
});
