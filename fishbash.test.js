const fishbash = require("./fishbash");

test('Mencetak angka dan kondisi "fish", "bash", atau "fish bash" sesuai aturan', () => {
  const spy = jest.spyOn(console, "log").mockImplementation(() => {});

  fishbash(15);

  expect(spy.mock.calls).toEqual([
    [1],
    [2],
    ["fish"],
    [4],
    ["bash"],
    ["fish"],
    [7],
    [8],
    ["fish"],
    ["bash"],
    [11],
    ["fish"],
    [13],
    [14],
    ["fish bash"],
  ]);

  spy.mockRestore();
});
