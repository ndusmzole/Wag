'use strict';

// Selecting the web elements
const initAmountEl = document.querySelector("#init-value");
const targetOutcomeEl = document.querySelector("#target-outCome");
const increaseEl = document.getElementById("increase");

const calcSection = document.querySelector("#calc");
const resultsSection = document.querySelector("#result");

const btnCalcEl = document.querySelector(".btn-calc");
const btnWonEl = document.querySelector(".btn-won");
const btnLostEl = document.querySelector(".btn-lost");

const ifWonEl = document.querySelector(".won");
const ifLostEl = document.querySelector(".lost");

//Variables
// let totalAmount = 500.00;
let wagerAmount = Number(initAmountEl.textContent);
let increaseRate = increaseEl.value;
let lossCount = 0;
let multiplier = 1;
let target = targetOutcomeEl.value;

//Setting the multiplier from the target out come
if(target === 1.2){
    multiplier = 1/0.2;
}else if(target === 1.3){
    multiplier = 1/0.3;

}else if(target === 1.4){
    multiplier = 1/0.4;
    
}else if(target === 1.5){
    multiplier = 1/0.5;
    
}else if(target === 1.8){
    multiplier = 1/0.8;
    
}else {
    multiplier = 1;    
}


// won condition
const won = function(){
    wagerAmount = (!lossCount) ? wagerAmount *= increaseRate : wagerAmount /= multiplier ** lossCount;

    console.log(target);
    console.log(targetOutcomeEl.value);
    console.log(multiplier);

    lossCount = 0;

    ifWonEl.textContent = wagerAmount;
    ifLostEl.textContent = wagerAmount*5;
};

const lost = function(){
    wagerAmount *= multiplier;
    lossCount++;

    ifLostEl.textContent = wagerAmount;
    ifWonEl.textContent = wagerAmount / (multiplier ** lossCount);
};

// Hide an element
const hideElement = function(element) {
    element.classList.add("hidden");
};

//Show an element
const displayElement = function(element) {
    element.classList.remove("hidden");
};

btnCalcEl.addEventListener("click", function(){
    won();

    hideElement(calcSection);
    displayElement(resultsSection);
})

btnWonEl.addEventListener("click", won);
btnLostEl.addEventListener("click", lost);