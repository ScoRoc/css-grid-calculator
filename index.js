
let screen = $('.calculator input');
let ops = $('.ops');

let screenValue = '';

let numArr = [];
let operator = '';

$('#clear').on('click', () => {
  screenValue = '';
  operator = '';
  numArr = [];
  screen.val(screenValue);
  $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
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
      numArr = [];
      break;
    case operator === 'subtract':
      numArr.push(parseInt(screenValue));
      screenValue = numArr.reduce((acc, cur) => {
        return acc - cur;
      });
      screen.val(screenValue);
      operator = 'equals';
      numArr = [];
      break;
    case operator === 'multiply':
      numArr.push(parseInt(screenValue));
      screenValue = numArr.reduce((acc, cur) => {
        return acc * cur;
      });
      screen.val(screenValue);
      operator = 'equals';
      numArr = [];
      break;
    case operator === 'divide':
      numArr.push(parseInt(screenValue));
      screenValue = numArr.reduce((acc, cur) => {
        return acc / cur;
      });
      screen.val(screenValue);
      operator = 'equals';
      numArr = [];
      break;
  }
});

let handleOpEquals = () => {
  switch (true) {
    case operator === 'add':
      numArr.push(parseInt(screenValue));
      screenValue = numArr.reduce((acc, cur) => {
        return acc + cur;
      });
      numArr = [];
      numArr.push(screenValue);
      screen.val(screenValue);
      screenValue = '';
      break;
    case operator === 'subtract':
      numArr.push(parseInt(screenValue));
      screenValue = numArr.reduce((acc, cur) => {
        return acc - cur;
      });
      numArr = [];
      numArr.push(screenValue);
      screen.val(screenValue);
      screenValue = '';
      break;
    case operator === 'multiply':
      numArr.push(parseInt(screenValue));
      screenValue = numArr.reduce((acc, cur) => {
        return acc * cur;
      });
      numArr = [];
      numArr.push(screenValue);
      screen.val(screenValue);
      screenValue = '';
      break;
    case operator === 'divide':
      numArr.push(parseInt(screenValue));
      screenValue = numArr.reduce((acc, cur) => {
        return acc / cur;
      });
      numArr = [];
      numArr.push(screenValue);
      screen.val(screenValue);
      screenValue = '';
      break;
  }
};

$('#add').on('click', () => {
  if (operator === 'add' || operator === 'subtract' || operator === 'multiply' || operator === 'divide') {
    handleOpEquals();
    operator = 'add';
    $('#add').css('background', '#EEBB55');
  } else if (operator === 'equals') {
    operator = 'add';
    handleOpEquals();
    $('#add').css('background', '#EEBB55');
  } else if (operator !== 'equals' && operator !== 'push') {
    numArr.push(parseInt(screenValue));
    operator = 'add';
    screen.val(screenValue);
    screenValue = '';
    $('#add').css('background', '#EEBB55');
  }
});

$('#subtract').on('click', () => {
  if (operator === 'add' || operator === 'subtract' || operator === 'multiply' || operator === 'divide') {
    handleOpEquals();
    operator = 'subtract';
    $('#subtract').css('background', '#EEBB55');
  } else if (operator === 'equals') {
    operator = 'subtract';
    handleOpEquals();
    $('#subtract').css('background', '#EEBB55');
  } else if (operator !== 'equals' && operator !== 'push') {
    numArr.push(parseInt(screenValue));
    operator = 'subtract';
    screen.val(screenValue);
    screenValue = '';
    $('#subtract').css('background', '#EEBB55');
  }
});

$('#multiply').on('click', () => {
  if (operator === 'add' || operator === 'subtract' || operator === 'multiply' || operator === 'divide') {
    handleOpEquals();
    operator = 'multiply';
    $('#multiply').css('background', '#EEBB55');
  } else if (operator === 'equals') {
    operator = 'multiply';
    handleOpEquals();
    $('#multiply').css('background', '#EEBB55');
  }  else if (operator !== 'equals' && operator !== 'push') {
    numArr.push(parseInt(screenValue));
    operator = 'multiply';
    screen.val(screenValue);
    screenValue = '';
    $('#multiply').css('background', '#EEBB55');
  }
});

$('#divide').on('click', () => {
  if (operator === 'add' || operator === 'subtract' || operator === 'multiply' || operator === 'divide') {
    handleOpEquals();
    operator = 'divide';
    $('#divide').css('background', '#EEBB55');
  } else if (operator === 'equals') {
    operator = 'divide';
    handleOpEquals();
    $('#divide').css('background', '#EEBB55');
  }  else if (operator !== 'equals' && operator !== 'push') {
    numArr.push(parseInt(screenValue));
    operator = 'divide';
    screen.val(screenValue);
    screenValue = '';
    $('#divide').css('background', '#EEBB55');
  }
});

let handleNumber = num => {
  if (operator !== 'equals') {
    screenValue += num;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  } else {
    screenValue = '';
    operator = 'push';
    screenValue += num;
    screen.val(screenValue);
    $('.ops').css('background', 'rgba(0, 0, 0, 0.5)');
  }
};

$('.buttons').on('click', (e) => {
  switch (true) {
    case e.target.id === '1':
      handleNumber(1);
      break;
    case e.target.id === '2':
      handleNumber(2);
      break;
    case e.target.id === '3':
      handleNumber(3);
      break;
    case e.target.id === '4':
      handleNumber(4);
      break;
    case e.target.id === '5':
      handleNumber(5);
      break;
    case e.target.id === '6':
      handleNumber(6);
      break;
    case e.target.id === '7':
      handleNumber(7);
      break;
    case e.target.id === '8':
      handleNumber(8);
      break;
    case e.target.id === '9':
      handleNumber(9);
      break;
    case e.target.id === '0':
      handleNumber(0);
      break;
  }
});
