function isDate(input) {
  if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  if (typeof input === 'string') {
    const date = new Date(input);
    return !isNaN(date.getTime());
  }

  return false;
}

function handleInput() {
  const userInput = prompt('Enter a date:');
  if (userInput === null) {
    alert('Invalid input. Please enter a valid date.');
    return;
  }

  const result = isDate(userInput);
  alert(`Is it a valid date? ${result}`);
}
