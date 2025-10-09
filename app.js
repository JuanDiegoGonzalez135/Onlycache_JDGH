const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.textContent === 'C') display.value = '';
    else if (btn.textContent === '←') display.value = display.value.slice(0, -1);
    else if (btn.textContent === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      display.value += btn.textContent;
    }
  });
});
