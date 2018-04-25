
let screen = $('.calculator input');
let buttons = $('.buttons');
let btn = $('.btn');

let screenValue = '';

let numArr = [];
let operator = '';

let handleEquals = () => {
  switch (true) {
    case operator === 'add':
      numArr.push(parseInt(screenValue));
      screenValue = numArr.reduce((acc, cur) => {
        return acc + cur;
      });
      screen.val(screenValue);
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

buttons.on('click', e => {
  e.preventDefault();
  switch (true) {
    case e.target.id === 'clear':
      screenValue = '';
      numArr = [];
      screen.val(screenValue);
      break;
    case e.target.id === 'add':
      numArr.push(parseInt(screenValue));
      operator = 'add';
      screen.val(screenValue);
      screenValue = '';
      break;
    case e.target.id === 'sbutract':
      // screenValue = '';
      // screen.val(screenValue);
      break;
    case e.target.id === 'multiply':
      // screenValue = '';
      // screen.val(screenValue);
      break;
    case e.target.id === 'divide':
      // screenValue = '';
      // screen.val(screenValue);
      break;
    case e.target.id === 'equals':
      handleEquals();
      break;
    case e.target.id === '1':
      screenValue += 1;
      screen.val(screenValue);
      break;
    case e.target.id === '2':
      screenValue += 2;
      screen.val(screenValue);
      break;
    case e.target.id === '3':
      screenValue += 3;
      screen.val(screenValue);
      break;
    case e.target.id === '4':
      screenValue += 4;
      screen.val(screenValue);
      break;
    case e.target.id === '5':
      screenValue += 5;
      screen.val(screenValue);
      break;
    case e.target.id === '6':
      screenValue += 6;
      screen.val(screenValue);
      break;
    case e.target.id === '7':
      screenValue += 7;
      screen.val(screenValue);
      break;
    case e.target.id === '8':
      screenValue += 8;
      screen.val(screenValue);
      break;
    case e.target.id === '9':
      screenValue += 9;
      screen.val(screenValue);
      break;
    case e.target.id === '0':
      screenValue += 0;
      screen.val(screenValue);
      break;
  }
});
