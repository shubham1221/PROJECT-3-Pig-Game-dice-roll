'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Rolling Dice Functionality

btnRoll.addEventListener('click', () => {
  //1. Genrating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. Check for rolled 1: if true, switch to next player
});
