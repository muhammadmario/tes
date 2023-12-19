function cekPalindrom(inputString) {
  const cleanedString = inputString.replace(/\s/g, "").toLowerCase();
  const reversedString = cleanedString.split("").reverse().join("");
  return cleanedString === reversedString;
}

module.exports = { cekPalindrom };
