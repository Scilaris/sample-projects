function getTime() {
  const secondsHand = document.querySelector('.clock__seconds-hand');
  const minutesHand = document.querySelector('.clock__minute-hand');
  const hoursHand = document.querySelector('.clock__hour-hand');

  const time = new Date();

  const seconds = time.getSeconds();
  const secondsDegrees = seconds / 60 * 360;

  const minutes = time.getMinutes();
  const minutesDegrees = minutes / 60 * 360;

  const hours = time.getHours();
  const hoursDegrees = hours / 24 * 360;

  secondsHand.style.transitionDuration = '300ms';
  minutesHand.style.transitionDuration = '300ms';
  hoursHand.style.transitionDuration = '300ms';

  if (seconds === 0) {
    secondsHand.style.transitionDuration = '0ms';
    minutesHand.style.transitionDuration = '0ms';

    hoursHand.style.transitionDuration = '0ms';
  }

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.clock').classList.add('ready');
  }, 1500);
});

setInterval(() => {
  getTime();
}, 1000);
