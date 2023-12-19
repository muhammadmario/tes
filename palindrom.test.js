const { cekPalindrom } = require("./palindrom");

test('Mengecek palindrom untuk string "level"', () => {
  const hasilCek = cekPalindrom("level");
  expect(hasilCek).toBe(true);
});

test('Mengecek palindrom untuk string "Hello"', () => {
  const hasilCek = cekPalindrom("Hello");
  expect(hasilCek).toBe(false);
});

test('Mengecek palindrom untuk string "A man a plan a canal Panama"', () => {
  const hasilCek = cekPalindrom("A man a plan a canal Panama");
  expect(hasilCek).toBe(true);
});
