import deepClone from "../lib/utils/deep-clone.util";

test("should return string after deepClone", () => {
  const clonedVal = deepClone("Ahmet");
  expect(clonedVal).toBe("Ahmet");
});

test("should return object after deepClone", () => {
  const clonedVal = deepClone({ name: "test" });
  expect(clonedVal).toEqual({ name: "test" });
});

test("should return object after deepClone", () => {
  const mockData = {
    product: { info: { title: "Product title" } },
  };
  const clonedVal = deepClone(mockData);
  expect(clonedVal).toEqual(mockData);
});

test("should return array after deepClone", () => {
  const mockData = ["Test 1", "Test 2"];
  const clonedVal = deepClone(mockData);
  expect(clonedVal).toEqual(mockData);
});

test("should return object of array after deepClone", () => {
  const mockData = [{ title: "Test 1" }];
  const clonedVal = deepClone(mockData);
  expect(clonedVal).toEqual(mockData);
});
