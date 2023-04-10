// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  //   let count = 0;
  //   str
  //     .toLowerCase()
  //     .split("")
  //     .map((e) => {
  //       if (e == "a" || e == "e" || e == "i" || e == "o" || e == "u") {
  //         count++;
  //       }
  //     });
  //   return count;

  let reg = /([aeiou])+/gi;
  return str == "" ? 0 : str.match(reg).length;
};
