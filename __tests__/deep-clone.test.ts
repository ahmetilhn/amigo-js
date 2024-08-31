import deepClone from "../lib/modules/deep-clone";
describe("deepClone tests", () => {
  test("should return object after deepClone", () => {
    const clonedVal = deepClone({ name: "test" });
    expect(clonedVal).not.toBe({ name: "test" });
    expect(clonedVal).toStrictEqual(clonedVal);
  });

  test("should return object after deepClone", () => {
    const mockData = {
      product: { info: { title: "Product title" } },
    };
    const clonedVal = deepClone(mockData);
    expect(clonedVal).not.toBe(mockData);
    expect(clonedVal).toStrictEqual(mockData);
  });

  test("should return array after deepClone", () => {
    const mockData = ["Test 1", "Test 2"];
    const clonedVal = deepClone(mockData);
    expect(clonedVal).not.toBe(mockData);
    expect(clonedVal).toStrictEqual(mockData);
  });

  test("should return object of array after deepClone", () => {
    const mockData = [{ title: "Test 1" }];
    const clonedVal = deepClone(mockData);
    expect(clonedVal).not.toBe(mockData);
    expect(clonedVal).toStrictEqual(mockData);
  });
  test("should return false while changed nested object value after deepClone", () => {
    const product = { title: "Test 1" };
    const products = [product];
    const clonedVal = deepClone<Array<object>>(products);
    product.title = "Test 2";
    expect(clonedVal[0]).not.toBe(product);
  });
});
