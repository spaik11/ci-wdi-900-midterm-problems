function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0;
}

function halfSquare(num) {
  return num * num / 2;
}

function exclaim(str) {
  let exclaimed = str.slice() + '!';

  while(exclaimed[exclaimed.length - 2] === '!') {
    exclaimed = exclaimed.slice(0, -1);
  }

  return exclaimed;
}

function isLong(str) {
  return str.length >= 15;
}

function containsDigit(str) {
  let digits = '0123456789';

  for (let i = 0; i < str.length; i++) {
    if (digits.includes(str[i])) {
      return true;
    }
  }

  return false;
}

function containsLowerCase(str) {
  let lowerCase = 'qwertyuiopasdfghjklzxcvbnm';

  for (let i = 0; i < str.length; i++) {
    if (lowerCase.includes(str[i])) {
      return true;
    } 
  }

  return false;
}

function containsUpperCase(str) {
  let upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';

  for (let i = 0; i < str.length; i++) {
    if (upperCase.includes(str[i])) {
      return true;
    } 
  }

  return false;
}

function containsNonAlphanumeric(str) {
  let nonAlphanumeric = '`~!@#$%^&*()_+{}|:"<>?-=[];,./ ';

  for (let i = 0; i < str.length; i++) {
    if (nonAlphanumeric.includes(str[i])) {
      return true;
    }
  }

  return false;
}

function containsSpace(str) {
  for (let i = 0; i < str.length; i++) {
    if (' '.includes(str[i])) {
      return true;
    }
  }

  return false;
}

function countWords(str) {
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (' '.includes(str[i])) {
      count++;
    }
  }

  return count;
}

function digits(numbers) {
  let newArr = [];
  let toStr = numbers.toString();
  let toArr = toStr.split('');

  for (let i = 0; i < toArr.length; i++){
    if (isNaN(toArr[i]) === false) {
      newArr.push(Number(toArr[i]))
    }
  }
  return newArr;
}

function truncate(str) {
  if (isLong(str)) {
    return str.slice(0, 8) + '...';
  } else {
    return str;
  }
}

function isValidPassword(str) {
  return containsDigit(str) 
      && containsLowerCase(str) 
      && containsUpperCase(str) 
      && containsNonAlphanumeric(str) 
      && !containsSpace(str);
  }

function onlyPunchy(movieTitles) {
  const result = [];

  for (let i = 0; i < movieTitles.length; i++) {
    const exclaimed = exclaim(movieTitles[i]);
    if (!isLong(exclaimed)) {
      result.push(exclaimed);
    }
  } 

  return result;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}