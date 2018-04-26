
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

let handleEquals = () => {
  numArr.push(parseInt(screenValue));
  screenValue = numArr.reduce((acc, cur) => {
    switch (true) {
      case operator === 'add':
        return acc + cur;
        break;
      case operator === 'subtract':
        return acc - cur;
        break;
      case operator === 'multiply':
        return acc * cur;
        break;
      case operator === 'divide':
        return acc / cur;
        break;
    }
  });
  screen.val(screenValue);
  operator = 'equals';
  numArr = [];
};

$('#equals').on('click', () => { handleEquals() });

let handleOpEquals = () => {
  numArr.push(parseInt(screenValue));
  screenValue = numArr.reduce((acc, cur) => {
    switch (true) {
      case operator === 'add':
        return acc + cur;
        break;
      case operator === 'subtract':
        return acc - cur;
        break;
      case operator === 'multiply':
        return acc * cur;
        break;
      case operator === 'divide':
        return acc / cur;
        break;
    }
  });
  numArr = [];
  numArr.push(screenValue);
  screen.val(screenValue);
  screenValue = '';
};

let handleOp = op => {
  if (operator === 'add' || operator === 'subtract' || operator === 'multiply' || operator === 'divide') {
    handleOpEquals();
    operator = op;
    $(`#${op}`).css('background', '#EEBB55');
  } else if (operator === 'equals') {
    operator = op;
    handleOpEquals();
    $(`#${op}`).css('background', '#EEBB55');
  } else if (operator !== 'equals' && operator !== 'push') {
    numArr.push(parseInt(screenValue));
    operator = op;
    screen.val(screenValue);
    screenValue = '';
    $(`#${op}`).css('background', '#EEBB55');
  }
};

ops.on('click', e => {
  switch (true) {
    case e.target.id === 'add':
      handleOp('add');
      break;
    case e.target.id === 'subtract':
      handleOp('subtract');
      break;
    case e.target.id === 'multiply':
      handleOp('multiply');
      break;
    case e.target.id === 'divide':
      handleOp('divide');
      break;
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

$('.buttons').on('click', e => {
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
