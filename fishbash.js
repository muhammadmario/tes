function fishbash(jumlahAngka) {
  for (let i = 1; i <= jumlahAngka; i++) {
    if (i % 15 === 0) {
      console.log("fish bash");
    } else if (i % 3 === 0) {
      console.log("fish");
    } else if (i % 5 === 0) {
      console.log("bash");
    } else {
      console.log(i);
    }
  }
}

module.exports = fishbash;
