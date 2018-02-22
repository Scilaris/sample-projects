/* Annuity formula:
   A = K * S

    A - ежемесячный аннуитетный платеж,
    K - коэффициент аннуитета,
    S — сумма кредита.

   K=i*(1+i)n/((1+i)n-1)

    K — коэффициент аннуитета,
    i — месячная процентная ставка по кредиту (= годовая ставка/12 месяцев),
    n — количество периодов, в течение которых выплачивается кредит.
*/

// Take UI elements
const amountInput = document.getElementById('amount');
const percentageInput = document.getElementById('percentage');
const yearInput = document.getElementById('years');
const annuityForm = document.getElementById('annuity-form');
const resultsContainer = document.querySelector('.results-container');
const loader = document.querySelector('.loader');

// Handle events
annuityForm.addEventListener('submit', calculateAnnuity);

function calculateAnnuity(e) {
  loader.style.display = 'block';
  resultsContainer.style.display = 'none';

  if (isFinite(getTotalPayment())) {
    setTimeout(() => {
      loader.style.display = 'none';
      showResults();
      createResult();
    }, 2000);
  } else {
    setTimeout(() => {
      loader.style.display = 'none';
      showError();
    }, 1000);
  }

  console.log(getMonthlyAnnuity());

  e.preventDefault();
}

function parseAmount() {
  return parseFloat(amountInput.value);
}

function parsePercentage() {
  return parseFloat(percentageInput.value) / 100 / 12;
}

function parsePeriod() {
  return parseFloat(yearInput.value) * 12;
}

function findRate() {
  const i = parsePercentage();
  const n = parsePeriod();

  return i * Math.pow(1 + i, n) / (Math.pow(1 + i, n) - 1);
}

function getMonthlyAnnuity() {
  return (findRate() * parseAmount()).toFixed(2);
}

function getTotalPayment() {
  return (getMonthlyAnnuity() * parsePeriod()).toFixed(2);
}

function getOverPayment() {
  return (getTotalPayment() - parseAmount()).toFixed(2);
}

function createResult() {
  const monthlyPay = document.getElementById('monthlyPay');
  const totalSum = document.getElementById('totalSum');
  const overPay = document.getElementById('overPay');

  monthlyPay.value = getMonthlyAnnuity();
  totalSum.value = getTotalPayment();
  overPay.value = getOverPayment();
}

function showResults() {
  resultsContainer.style.display = 'block';
}

function showError() {
  const errorEl = document.createElement('div');
  errorEl.className = 'error';
  errorEl.textContent = 'Пожалуйста, введите значения';
  annuityForm.insertBefore(errorEl, document.getElementById('loader'));

  setTimeout(() => {
    errorEl.remove();
  }, 2000);
}
