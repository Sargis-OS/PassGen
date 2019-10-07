var pw = [];
var uLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];
var dLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var pwLen = prompt("what is you pw length");
var isSymbols = true;
var isNumbers = true;

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex = 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* defined function */
function createPassword() {
  var pw = [];
  if (pwLen > 128) {
    pwLen = prompt("pw must be less than 128 char");
    createPassword();
  }
  for (i = 0; i < pwLen; i++) {
    if (isSymbols === true && i === 0) {
      var randomSymNo = Math.floor(Math.random() * symbols.length);
      /* inject a symbol in the string */
      pw.push(symbols[randomSymNo]);
    } else {
      /* inject a letter into the string */
      var randomNo = Math.floor(Math.random() * dLetters.length);
      pw.push(dLetters[randomNo]);
    }
  }
  /* randomize array */
  pwShuffle = shuffle(pw);
  pwBox.innerHTML = pwShuffle.join("");
}

/* first event */
// change this pw into a dynamic random pw
//document.write(pw);
