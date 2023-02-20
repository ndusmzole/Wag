'use strict';

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


const hideElement = function(element) {
    element.classList.add("hidden");
};

const displayElement = function(element) {
    element.classList.remove("hidden");
};

btnCalcEl.addEventListener("click", function(){
    console.log("calculation");
    hideElement(calcSection);
    displayElement(resultsSection);
})