
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.getElementById('getMathInfoButton').addEventListener('click', function () {
  const number = document.getElementById('mathInput').value;
  const output = document.getElementById('mathOutput');
  const input = document.getElementById('mathInput');

  if (!number) {
    output.textContent = 'Please enter a number.';
    return;
  }

  fetch(`http://numbersapi.com/${number}/math`)
    .then(response => response.text())
    .then(data => {
      output.textContent = data;
      input.value = ''; // Clear the input field
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      output.textContent = 'Error fetching data. Please try again later.';
    });
});

document.getElementById('getDateInfoButton').addEventListener('click', function () {
  const number = document.getElementById('dateInput').value;
  const output = document.getElementById('dateOutput');
  const input = document.getElementById('dateInput');

  if (!number) {
    output.textContent = 'Please enter a number.';
    return;
  }

  fetch(`http://numbersapi.com/${number}/date`)
    .then(response => response.text())
    .then(data => {
      output.textContent = data;
      input.value = ''; // Clear the input field
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      output.textContent = 'Error fetching data. Please try again later.';
    });
});

document.getElementById('getYearInfoButton').addEventListener('click', function () {
  const number = document.getElementById('yearInput').value;
  const output = document.getElementById('yearOutput');
  const input = document.getElementById('yearInput');

  if (!number) {
    output.textContent = 'Please enter a number.';
    return;
  }

  fetch(`http://numbersapi.com/${number}/year`)
    .then(response => response.text())
    .then(data => {
      output.textContent = data;
      input.value = ''; // Clear the input field
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      output.textContent = 'Error fetching data. Please try again later.';
    });
});

document.getElementById('getTriviaInfoButton').addEventListener('click', function () {
  const number = document.getElementById('triviaInput').value;
  const output = document.getElementById('triviaOutput');
  const input = document.getElementById('triviaInput');

  if (!number) {
    output.textContent = 'Please enter a number.';
    return;
  }

  fetch(`http://numbersapi.com/${number}/trivia`)
    .then(response => response.text())
    .then(data => {
      output.textContent = data;
      input.value = ''; // Clear the input field
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      output.textContent = 'Error fetching data. Please try again later.';
    });
});
