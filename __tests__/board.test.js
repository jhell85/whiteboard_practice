import { url_maker, url_maker_recursion, array_deduping, array_deduping_recursion, compressing_strings, compressing_strings_recursion, isUnique, selectionSort } from './../src/board';

describe('board tests', () => {
  test("test url_maker", () => {
    expect(url_maker("Jasmine Ann Jones")).toEqual("Jasmine%20Ann%20Jones")
  });

  test("test url_maker_recursion", () => {
    expect(url_maker_recursion("Jasmine Ann Jones")).toEqual("Jasmine%20Ann%20Jones")
  });

  test("test array_dedupping", () => {
    expect(array_deduping([7, 9, "hi", 12, "hi", 7, 53])).toEqual([7, 9, "hi", 12, 53])
  });

  test("test array_dedupping_recursion", () => {
    expect(array_deduping_recursion([7, 9, "hi", 12, "hi", 7, 53])).toEqual([7, 9, "hi", 12, 53])
  });

  test("test compressing_strings", () => {
    expect(compressing_strings("aaabccdddda")).toEqual("3ab2c4da")
  });

  test("test compressing_strings_recursion", () => {
    expect(compressing_strings_recursion("aaabccdddda")).toEqual("3ab2c4da")
  });

  test("test isUnique", () => {
    expect(isUnique("aaabccdddda")).toEqual(false)
  });

  test("test isUnique", () => {
    expect(isUnique("josh")).toEqual(true)
  });

  test("test selectionSort", () => {
    expect(selectionSort([9, 2, 7, 12])).toEqual([2, 7, 9, 12])
  });
});