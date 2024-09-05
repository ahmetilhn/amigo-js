import deepClone from "../lib/modules/deep-clone";
describe("deepClone tests", () => {
  test("should return object after deepClone", () => {
    const clonedVal = deepClone({ name: "test" });
    expect(clonedVal).not.toBe({ name: "test" });
    expect(clonedVal).toStrictEqual({ name: "test" });
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
  test("should return undefined when got undefined argument", () => {
    expect(deepClone(undefined)).toStrictEqual(undefined);
  });
  test("should return undefined when got null argument", () => {
    expect(deepClone(null)).toStrictEqual(null);
  });
  test("should return date when got date argument", () => {
    const date = new Date();
    expect(deepClone(date)).toStrictEqual(date);
  });
  test("should return copied val when got big object", () => {
    const objToCopy = {
      name: "Ahmet",
      age: 24,
      isDeveloper: true,
      skills: ["JavaScript", "Java", "Python"],
      details: {
        address: {
          city: "Istanbul",
          zipCode: 34000,
          location: {
            lat: 41.0082,
            long: 28.9784,
          },
        },
        workExperience: [
          {
            company: "Company A",
            years: 2,
            technologies: ["React", "Node.js"],
          },
          {
            company: "Company B",
            years: 1,
            technologies: ["Java", "Spring"],
          },
        ],
      },
      contact: {
        email: "ahmet@example.com",
        phones: ["555-1234", "555-5678"],
      },
      createdAt: new Date(),
      idGenerator: function () {
        return this.name + Math.random().toString(36).substr(2, 9);
      },
      references: [
        {
          name: "John Doe",
          relation: "Manager",
          contactInfo: {
            email: "john@example.com",
            phone: "555-8765",
          },
        },
      ],
      nullValue: null,
      undefinedValue: undefined,
    };
    const deepCopy = deepClone(objToCopy);
    expect(deepCopy).not.toBe(objToCopy);
    expect(deepCopy).toStrictEqual(objToCopy);
    expect(deepCopy.createdAt).toStrictEqual(objToCopy.createdAt);
  });
});
