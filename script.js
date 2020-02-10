// These are the DOM elements
const resultEl = document.getElementById('outcome');

const lengthEl = document.getElementById('char-length');

const lowercaseEl = document.getElementById('lower');

const uppercaseEl = document.getElementById('upper');

const numbersEl = document.getElementById('num');

const symbolsEl = document.getElementById('sym');

const generateEl = document.getElementById('create');


const randomFunc = {

  lower: getRandomLower,
  upper: getRandomUpper,
  num: getRandomNumber,
  symbol: getRandomSymbol
  
};


//This is the generate password function.
function generatePassword(lower, upper, num, symbol, length) {
  
  let generatedPassword = '';

  const typesCount = lower + upper + num + symbol;

  const typesArr = [{lower}, {upper}, {num}, {symbol}]
  .filter (item => Object.values(item)[0] );

  if(typesCount === 0) {
    return '';
  }

for(let i = 0; i < length; i += typesCount) {
  typesArr.forEach( type => {
    const funcName = Object.keys(type)[0];

    generatedPassword += randomFunc[funcName]();
  });
}

const finalPassword = generatedPassword.slice(0, length);

return finalPassword

}


// Here are the generator functions.
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=+<>/,.?\|';
  return symbols[Math.floor(Math.random() * symbols.length)];
}


// Lastly, event listener to generate button.
generateEl.addEventListener('click', () => {

  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});