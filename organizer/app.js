const inputs = document.querySelectorAll('.organaizer__input');
let arr = [];

document.addEventListener('DOMContentLoaded', () => {
  loadFromLocalStorage();

  inputs.forEach((input, index) => {

    arr.push(input.value);

    input.addEventListener('keyup', (event) => {
      let value = event.target.value;

      arr[index] = value;

      const task = JSON.stringify(arr);

      setToLocalStorage(task);
     });
  });
});

function setToLocalStorage(data) {
  localStorage.setItem('tasks', data);
}

function loadFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));

  if (localStorage.getItem('tasks') === null) return;

  inputs.forEach((input, index) => {
    input.value = tasks[index];
  });
}

function displayCurrentWeekDay() {
  const container = document.querySelector('.organaizer__week');

  container.textContent = new Date()
    .toLocaleDateString('en-EN', {
      weekday: 'long'
    });
}

function displayCurrentDate() {
  const container = document.querySelector('.organaizer__date');

  container.textContent = new Date()
    .toLocaleDateString('en-EN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
}

displayCurrentWeekDay();
displayCurrentDate();
