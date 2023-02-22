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
let wagerAmount = 0;
let increaseRate = 0;
let lossCount = 0;
let multiplier = 1;
let target = 0;

//assign values
initAmountEl.addEventListener("blur", function(){
    wagerAmount = initAmountEl.value;
    console.log(wagerAmount);
})

increaseEl.addEventListener("change", function(){
    increaseRate = increaseEl.value;
    console.log(increaseRate);
})

targetOutcomeEl.addEventListener("change", function(){
    target = targetOutcomeEl.value;
    console.log(target, "target");
    //Setting the multiplier from the target out come
    if(target == 1.2){
        multiplier = 1/0.2;
    }else if(target === "1.3"){
        multiplier = 1/0.3;

    }else if(target === 1.4){
        multiplier = 1/0.4;
        
    }else if(target === 1.5){
        multiplier = 1/0.5;
        
    }else if(target === 1.8){
        multiplier = 1/0.8;
        
    }else {
        multiplier = 1;    
        console.log("here");
        console.log(target===1.2);
    }
})





// won condition
const won = function(){
    wagerAmount = (!lossCount) ? wagerAmount *= increaseRate : wagerAmount /= multiplier ** lossCount;

    console.log(target);
    console.log(targetOutcomeEl.value);
    console.log(multiplier, "multiplier");

    lossCount = 0;

    //toFixed(2) - Rounding to 2 decimal places
    ifWonEl.textContent = wagerAmount.toFixed(2);
    ifLostEl.textContent = (wagerAmount*multiplier).toFixed(2);
};

const lost = function(){
    wagerAmount *= multiplier;
    console.log(wagerAmount);
    lossCount++;

    ifLostEl.textContent = wagerAmount.toFixed(2);
    ifWonEl.textContent = (wagerAmount / (multiplier ** lossCount)).toFixed(2);
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