String(25);

window.document


function handlecostKeydown(event) {
  if(event.key === 'Enter') {
    calculateCost();
  }
}

function calculateCost() {
  const totalElement = document.querySelector('.js-input');
  let cost = Number(totalElement.value);

  if(cost < 40) {   
    cost += 10;
  }

  document.querySelector('.js-totally').innerHTML = `$${cost}`;
}

function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if(buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';           // We'll also want to change the styling when we click the button.
    buttonElement.classList.add('is-subscribed');     // So after clicking the button (since the subscribe() function is inside 'onclick'), this button will have a new class. We can style this class in css now.
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');    // This removes the class after clicking it again.
  }
}