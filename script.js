'use strict'

let totalAmount = 500.00;
let wagerAmount = 1.00;
let targetOutcome = 2;
let increaseRate = 1.05;
let lossCount = 0;
let multiply = 2;

// let outComes = [1.02,1.15,44.81,1.37,2.82,1.34,3.25,1.16,5.3,26.78,1.28,1.21,1.03,2.17,1.06,1.35,3.12,4.51,14.18,1,1.24,5.32,1.13,1.92,7.37,7.77,2.68,1.33,2.61,1.42,6.43,1.22,2.21,2.62,5.45,1.08,1.84,2.17,3.19,8,1.53,1.02,2.14,1.41,1.26,1.53,2.36,1.89,3.5,1.25,1.36,2.16,2.52,2.52,1.04,1.52,1,5.36,1.14,11.96];
// let outComes = [1.57,1.11,5.07,1.15,38.54,1.56,1.76,1.7,2.5,2.06,13.92,3.4,4.65,1.4,4.02,3.59,7.91,1,2.26,23.15,8.5,1.37,2.4,1.65,23.76,2.12,3.74,1.32,1.13,1.52,3.14,2.27,1.81,1.1,1.89,2.57,4.26,4.71,1.14,1.04,1.59,3.57,1.19,1.25,4.74,1.61,1.1,3.26,1.07,2.5,3.21,4.14,3.96,1.73,3.97,1.34,2.7,6.4,1.7,1.84];
// let outComes = [1,1.42,2.38,2.02,2.07,2.22,1.06,43.54,1.16,3.14,2.03,6.06,1.19,1.96,1.09,1.15,1.93,2.16,1.89,36.56,1.31,4.16,3.52,1.38,2.26,3.64,11.12,4.55,2.75,1.64,1.46,9.37,1.35,2.13,1.11,1.2,22.48,1,4.85,1.89,5.3,1.16,5.6,16.5,5.4,1.38,1.46,2.57,1.14,1.13,1.55,6.79,1.57,1.11,5.07,1.15,38.54,1.56,1.76,1.7];
// let outComes = [2.68,1.06,6.39,2.04,1.36,2.89,2.42,2.83,1.78,5.88,117.82,1.72,1.06,1.36,4.45,2.44,1.25,8.36,1,1.42,2.38,2.02,2.07,2.22,1.06,43.54,1.16,3.14,2.03,6.06,1.19,1.96,1.09,1.15,1.93,2.16,1.89,36.56,1.31,4.16,3.52,1.38,2.26,3.64,11.12,4.55,2.75,1.64,1.46,9.37,1.35,2.13,1.11,1.2,22.48,1,4.85,1.89,5.3,1.16];
let outComes = [2.46,4.62,1.26,1.44,1.12,9.58,1,1,1.23,1.11,2.27,1.06,3.3,1.98,1,3.6,1.53,18.6,4.25,1.63,3.95,4.34,4.28,2.62,2.8,5.59,1.67,5.1,8.01,4.01,13.95,2.17,9.1,1.44,2.09,1.57,5.9,47.06,1.58,2.14,8.88,3.29,1.91,2.48,1.35,257.54,1033.26,1.95,1.36,1.14,1.49,1.28,1,15.04,1.01,1.29,2.31,1.07,1.37,2.13];


for(let i=0; i < outComes.length; i++){

    totalAmount = (totalAmount >= wagerAmount) ? totalAmount - wagerAmount : totalAmount; // substract a wager for the round
    
    if(totalAmount>0 && totalAmount > wagerAmount){
        if (outComes[i] >= targetOutcome && !lossCount){ // if win and there is no loss from previous round
            totalAmount += wagerAmount * targetOutcome; // income plus initial amount
            wagerAmount *= increaseRate; // increase the wager steadily by a constant rate each round
            // console.log(`Round ${i+1} won`);
        }
        else if(outComes[i] >= targetOutcome && lossCount){ // if win and there is loss from previous round
            totalAmount += wagerAmount * targetOutcome; // income plus initial amount
            wagerAmount /= multiply ** lossCount; // bring the wager back to pre loss state
            wagerAmount *= increaseRate; // increase the wager steadily by a constant rate each round
            lossCount = 0; // reset loss count
            // console.log(`Round ${i+1} won`);
        }
        else { // if loss
            wagerAmount *= multiply; // we lose a round we make the wager 5x to recoup the loss
            lossCount++; // we keep track of the number of losses in a row to be able to bring the wager back to before loss state
            // console.log(`Round ${i+1} lost`);
        }

    } else {
        console.log(`Total: ${totalAmount}, currentWager: ${wagerAmount} else`);
        break;
    }
    
    

    console.log(`Total: ${totalAmount}, currentWager: ${wagerAmount}, round: ${i+1}`);
}

console.log(`Final Amount: ${totalAmount}`);

