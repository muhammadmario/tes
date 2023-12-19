const { urutKecil, urutBesar } = require("./sort");

test("Mengurutkan dari kecil ke besar", () => {
  const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
  const hasilUrut = urutKecil([...array]);

  expect(hasilUrut).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 6, 9]);
});

test("Mengurutkan dari besar ke kecil", () => {
  const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
  const hasilUrut = urutBesar([...array]);

  expect(hasilUrut).toEqual([9, 6, 5, 5, 4, 3, 3, 2, 1, 1]);
});
