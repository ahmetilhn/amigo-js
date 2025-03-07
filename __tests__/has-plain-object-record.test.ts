import hasPlainObjectRecord from "@/modules/has-plain-object-record";

describe("hasPlainObjectRecord tests", () => {
  test("it should return false when got empty plain object", () => {
    expect(hasPlainObjectRecord({})).toBeFalsy();
  });

  test("it should return true when got not empty plain object", () => {
    expect(hasPlainObjectRecord({ records: [] })).toBeTruthy();
    expect(hasPlainObjectRecord({ name: "John" })).toBeTruthy();
  });

  test("it should throw err when got type other than plain object", () => {
    expect(() => hasPlainObjectRecord(null)).toThrow(
      "hasPlainObjectRecord should only use for plain object type."
    );
    expect(() => hasPlainObjectRecord(new Date())).toThrow(
      "hasPlainObjectRecord should only use for plain object type."
    );
    expect(() => hasPlainObjectRecord(Symbol("test"))).toThrow(
      "hasPlainObjectRecord should only use for plain object type."
    );
    expect(() => hasPlainObjectRecord(2)).toThrow(
      "hasPlainObjectRecord should only use for plain object type."
    );
  });
});
