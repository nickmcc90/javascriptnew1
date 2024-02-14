let calculation = localStorage.getItem('calculation') || "";

document.querySelector('.js-display').innerHTML = calculation;

function updateCalculation(value) {
  calculation += value;
  document.querySelector('.js-display').innerHTML = calculation;
  localStorage.setItem('calculation', calculation);
  
}
