
let screen = $('.calculator input');
let buttons = $('.buttons');
let btn = $('.btn');
let ops = $('.ops');

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
      break;
    case operator === 'subtract':
      numArr.push(parseInt(screenValue));
      screenValue = numArr.reduce((acc, cur) => {
        return acc - cur;
      });
      screen.val(screenValue);
      operator = 'equals';
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
      numArr.push(parseInt(screenValue));
      screenValue = numArr.reduce((acc, cur) => {
        return acc / cur;
      });
      screen.val(screenValue);
      operator = 'equals';
      break;
  }
});

$('#add').on('click', () => {
  if (operator !== 'equals' && operator !== 'push') {
    numArr.push(parseInt(screenValue));
    operator = 'add';
    screen.val(screenValue);
    screenValue = '';
    $('#add').css('background', '#EEBB55');
  } else {
    numArr = [];
    numArr.push(parseInt(screenValue));
    operator = 'add';
    screen.val(screenValue);
    screenValue = '';
    $('#add').css('background', '#EEBB55');
  }
});

$('#subtract').on('click', () => {
  if (operator !== 'equals' && operator !== 'push') {
    numArr.push(parseInt(screenValue));
    operator = 'subtract';
    screen.val(screenValue);
    screenValue = '';
    $('#subtract').css('background', '#EEBB55');
  } else {
    numArr = [];
    numArr.push(parseInt(screenValue));
    operator = 'subtract';
    screen.val(screenValue);
    screenValue = '';
    $('#subtract').css('background', '#EEBB55');
  }
});

$('#multiply').on('click', () => {
  if (operator !== 'equals' && operator !== 'push') {
    numArr.push(parseInt(screenValue));
    operator = 'multiply';
    screen.val(screenValue);
    screenValue = '';
    $('#multiply').css('background', '#EEBB55');
  } else {
    numArr = [];
    numArr.push(parseInt(screenValue));
    operator = 'multiply';
    screen.val(screenValue);
    screenValue = '';
    $('#multiply').css('background', '#EEBB55');
  }
});

$('#divide').on('click', () => {
  if (operator !== 'equals' && operator !== 'push') {
    numArr.push(parseInt(screenValue));
    operator = 'divide';
    screen.val(screenValue);
    screenValue = '';
    $('#divide').css('background', '#EEBB55');
  } else {
    numArr = [];
    numArr.push(parseInt(screenValue));
    operator = 'divide';
    screen.val(screenValue);
    screenValue = '';
    $('#divide').css('background', '#EEBB55');
  }
});

$('#1').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 1;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 1;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  }
});

$('#2').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 2;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 2;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  }
});

$('#3').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 3;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 3;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  }
});

$('#4').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 4;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 4;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  }
});

$('#5').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 5;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 5;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  }
});

$('#6').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 6;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 6;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  }
});

$('#7').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 7;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 7;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  }
});

$('#8').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 8;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 8;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  }
});

$('#9').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 9;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 9;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  }
});

$('#0').on('click', () => {
  if (operator !== 'equals') {
    screenValue += 0;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += 0;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  }
});
