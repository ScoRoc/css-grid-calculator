
let screen = $('.calculator input');
let buttons = $('.buttons');
let btn = $('.btn');

let screenValue = '';

let numArr = [];
let operator = '';

let handleClear = () => {
  screenValue = '';
  operator = '';
  numArr = [];
  screen.val(screenValue);
};

let handleEquals = () => {
  switch (true) {
    case operator === 'add':
      numArr.push(parseInt(screenValue));
      screenValue = numArr.reduce((acc, cur) => {
        return acc + cur;
      });
      screen.val(screenValue);
      operator = 'equals';
      // numArr = [];
      // numArr.push(parseInt(screenValue));
      break;
    case operator === 'subtract':
      //
      break;
    case operator === 'multiply':
      //
      break;
    case operator === 'divide':
      //
      break;
  }
};

let handleAdd = () => {
  if (operator !== 'equals' && operator !== 'push') {
    numArr.push(parseInt(screenValue));
    operator = 'add';
    screen.val(screenValue);
    screenValue = '';
  } else {
    numArr = [];
    numArr.push(parseInt(screenValue));
    operator = 'add';
    screen.val(screenValue);
    screenValue = '';
  }
};

let handleSubtract = () => {

};

let handleMultiply = () => {

};

let handleDivide = () => {

};

let handleOne = () => {
  if (operator !== 'equals') {
    screenValue += 1;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 1;
    screen.val(screenValue);
  }
};

let handleTwo = () => {
  if (operator !== 'equals') {
    screenValue += 2;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 2;
    screen.val(screenValue);
  }
};

let handleThree = () => {
  if (operator !== 'equals') {
    screenValue += 3;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 3;
    screen.val(screenValue);
  }
};

let handleFour = () => {
  if (operator !== 'equals') {
    screenValue += 4;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 4;
    screen.val(screenValue);
  }
};

let handleFive = () => {
  if (operator !== 'equals') {
    screenValue += 5;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 5;
    screen.val(screenValue);
  }
};

let handleSix = () => {
  if (operator !== 'equals') {
    screenValue += 6;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 6;
    screen.val(screenValue);
  }
};

let handleSeven = () => {
  if (operator !== 'equals') {
    screenValue += 7;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 7;
    screen.val(screenValue);
  }
};

let handleEight = () => {
  if (operator !== 'equals') {
    screenValue += 8;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 8;
    screen.val(screenValue);
  }
};

let handleNine = () => {
  if (operator !== 'equals') {
    screenValue += 9;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 9;
    screen.val(screenValue);
  }
};

let handleZero = () => {
  if (operator !== 'equals') {
    screenValue += 0;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 0;
    screen.val(screenValue);
  }
};

buttons.on('click', e => {
  e.preventDefault();
  switch (true) {
    case e.target.id === 'clear':
      handleClear();
      break;
    case e.target.id === 'add':
      handleAdd();
      break;
    case e.target.id === 'subtract':
      handleSubtract();
      break;
    case e.target.id === 'multiply':
      handleMultiply();
      break;
    case e.target.id === 'divide':
      handleDivide();
      break;
    case e.target.id === 'equals':
      handleEquals();
      break;
    case e.target.id === '1':
      handleOne();
      break;
    case e.target.id === '2':
      handleTwo();
      break;
    case e.target.id === '3':
      handleThree();
      break;
    case e.target.id === '4':
      handleFour();
      break;
    case e.target.id === '5':
      handleFive();
      break;
    case e.target.id === '6':
      handleSix();
      break;
    case e.target.id === '7':
      handleSeven();
      break;
    case e.target.id === '8':
      handleEight();
      break;
    case e.target.id === '9':
      handleNine();
      break;
    case e.target.id === '0':
      handleZero();
      break;
  }
});
