
let screen = $('.calculator input');
let buttons = $('.buttons');
let btn = $('.btn');

let screenValue = '';

let numArr = [];
let operator = '';

$('#clear').on('click', () => {
  screenValue = '';
  operator = '';
  numArr = [];
  screen.val(screenValue);
});

$('#equals').on('click', () => {
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
      numArr.push(parseInt(screenValue));
      screenValue = numArr.reduce((acc, cur) => {
        return acc * cur;
      });
      screen.val(screenValue);
      operator = 'equals';
      break;
    case operator === 'divide':
      //
      break;
  }
});

$('#add').on('click', () => {
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
});

$('#subtract').on('click', () => {

});

$('#multiply').on('click', () => {
  if (operator !== 'equals' && operator !== 'push') {
    numArr.push(parseInt(screenValue));
    operator = 'multiply';
    screen.val(screenValue);
    screenValue = '';
  } else {
    numArr = [];
    numArr.push(parseInt(screenValue));
    operator = 'multiply';
    screen.val(screenValue);
    screenValue = '';
  }
});

$('#divide').on('click', () => {

});

$('#1').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 1;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 1;
    screen.val(screenValue);
  }
});

$('#2').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 2;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 2;
    screen.val(screenValue);
  }
});

$('#3').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 3;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 3;
    screen.val(screenValue);
  }
});

$('#4').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 4;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 4;
    screen.val(screenValue);
  }
});

$('#5').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 5;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 5;
    screen.val(screenValue);
  }
});

$('#6').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 6;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 6;
    screen.val(screenValue);
  }
});

$('#7').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 7;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 7;
    screen.val(screenValue);
  }
});

$('#8').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 8;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 8;
    screen.val(screenValue);
  }
});

$('#9').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 9;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 9;
    screen.val(screenValue);
  }
});

$('#0').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 0;
    screen.val(screenValue);
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 0;
    screen.val(screenValue);
  }
});
