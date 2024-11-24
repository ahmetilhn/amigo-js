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
      languages: [
        {
          key: "en",
          level: 1000,
          awards: [
            {
              name: "Best of year",
              otherWinners: [
                { name: "John" },
                { name: "Jack" },
                { name: "Henry", children: [{ name: "Jula" }] },
              ],
            },
          ],
        },
      ],
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
    const deepCopyObj = deepClone(objToCopy);
    expect(deepCopyObj).not.toBe(objToCopy);
    expect(deepCopyObj).toStrictEqual(objToCopy);
    expect(deepCopyObj.createdAt).toStrictEqual(deepCopyObj.createdAt);

    expect(deepCopyObj.name).toStrictEqual(objToCopy.name);
    expect(deepCopyObj.age).toStrictEqual(objToCopy.age);
    expect(deepCopyObj.isDeveloper).toStrictEqual(objToCopy.isDeveloper);

    expect(deepCopyObj.skills).toStrictEqual(objToCopy.skills);
    expect(deepCopyObj.skills).not.toBe(objToCopy.skills); // Reference check

    expect(deepCopyObj.languages).toStrictEqual(objToCopy.languages);
    expect(deepCopyObj.languages).not.toBe(objToCopy.languages); // Reference check

    expect(deepCopyObj.details).toStrictEqual(objToCopy.details);
    expect(deepCopyObj.details).not.toBe(objToCopy.details); // Reference check

    expect(deepCopyObj.contact).toStrictEqual(objToCopy.contact);
    expect(deepCopyObj.contact).not.toBe(objToCopy.contact); // Reference check

    expect(deepCopyObj.details.workExperience).toStrictEqual(
      objToCopy.details.workExperience
    );
    expect(deepCopyObj.details.workExperience).not.toBe(
      objToCopy.details.workExperience
    );

    expect(deepCopyObj.languages[0].awards).toStrictEqual(
      objToCopy.languages[0].awards
    );
    expect(deepCopyObj.languages[0].awards).not.toBe(
      objToCopy.languages[0].awards
    );

    expect(deepCopyObj.languages[0].awards[0].otherWinners).toStrictEqual(
      objToCopy.languages[0].awards[0].otherWinners
    );
    expect(deepCopyObj.languages[0].awards[0].otherWinners).not.toBe(
      objToCopy.languages[0].awards[0].otherWinners
    );

    expect(
      deepCopyObj.languages[0].awards[0].otherWinners[2].children
    ).toStrictEqual(objToCopy.languages[0].awards[0].otherWinners[2].children);
    expect(
      deepCopyObj.languages[0].awards[0].otherWinners[2].children
    ).not.toBe(objToCopy.languages[0].awards[0].otherWinners[2].children); // Reference check

    expect(deepCopyObj.createdAt).toStrictEqual(objToCopy.createdAt);
    expect(deepCopyObj.createdAt).not.toBe(objToCopy.createdAt); // Reference check

    expect(deepCopyObj.idGenerator()).not.toStrictEqual(
      objToCopy.idGenerator()
    );

    expect(deepCopyObj.references).toStrictEqual(objToCopy.references);
    expect(deepCopyObj.references).not.toBe(objToCopy.references); // Reference check

    expect(deepCopyObj.nullValue).toBeNull();
    expect(deepCopyObj.undefinedValue).toBeUndefined();
  });

  test("it should return copied val when got function in record", () => {
    const obj = { fn: () => "hello" };
    expect(deepClone(obj)).not.toBe(obj);
    expect(deepClone(obj)).toStrictEqual(obj);
  });
});
