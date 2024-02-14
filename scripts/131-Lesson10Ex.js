const buttonElement = document.querySelector('.js-button');
console.log(buttonElement.classList.contains('js-button'));

function toggler(type) {
  const gamingElement = document.querySelector(type);


  if(!gamingElement.classList.contains('is-toggled')) {

    removeAllToggle();

    gamingElement.classList.add('is-toggled');

  } else {
    gamingElement.classList.remove('is-toggled');
  }
}

function removeAllToggle () {
  const previous = document.querySelector('.is-toggled');

  if(previous) {
    previous.classList.remove('is-toggled');
  }
}
