function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0;
}

function halfSquare(num) {
  return num * num / 2;
}

function exclaim(str) {
  if (str[str.length - 2] !== '!') {
    return str.includes('!') ? str : str + '!'
    } else {
      for (let i = 0; i < str.length - 1; i++) {
        if (str[i].includes('!')) {
        return str.slice(0, i + 1)
      }
    }
  } 
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
    if (containsDigit(str) &&
        containsLowerCase(str) &&
        containsUpperCase(str) &&
        containsNonAlphanumeric(str) &&
        containsSpace(str) === false)
        {
        return true;
        }
        return false;
  }



function onlyPunchy(movieTitles) {
  const result = [];

  for (let i = 0; i < movieTitles.length; i++) {
    if (isLong(movieTitles[i]) === false) {
      result.push(exclaim(movieTitles[i]));
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