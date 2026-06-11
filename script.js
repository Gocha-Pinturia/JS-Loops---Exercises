// Task 1 — The Broken Clock
// Part A — Spot the bug
for (var i = 1; i <= 5; i++) {     // Here the variable "var" in the loop is immediately increased and 
    setTimeout(function () {       // does not wait for the setTimeout function to execute since it is global
        console.log(`Tick ${i}`);
    }, i * 1000);
}


for (let i = 1; i <= 5; i++) {    // Here, the "let" variable in the loop cannot be increased immediately
    setTimeout(function () {      // because it is local and belongs to the body of the setTimeout function
        console.log(`Tick ${i}`); // and is waiting for its turn!!!
    }, i * 1000);
}

for (var i = 1; i <= 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(`Tick ${i}`);
        }, i * 1000);
    })(i);
}

const tick = (label, delay) => {
    setTimeout(() => {
        console.log(label);
    }, delay)

}

for (let i = 1; i <= 5; i++) {
    tick(`Tick ${i}`, i * 1000)
}


// ## **Task 2 — Staircase Mystery**
// Part A — The buildRow function
const buildRow = (num, cols) => {
    let result = [];
    for (let i = 1; i <= cols; i++) {
        result.push(num);
    }
    return console.log(result.join(" "))
}

buildRow(3, 4); // → "3 3 3 3"
buildRow(7, 2)  // → "7 7"

// Part C — Find the heavy row
const buildRow2 = (num, cols = num) => {
    let result = [`Row ${num}:`];
    for (let i = 1; i <= cols; i++) {
        result.push(num);
    }
    return console.log(result.join(" "));
}

buildRow2(3); // Row 3: 3 3 3
buildRow2(7)  // Row 7: 7 7 7 7 7 7 7

// Part C — Find the heavy row
function findHeavyRow(limit) {
    let result = "";
    let viewResult = '';

    outerLoop: for (let i = 1; i < 100; i++) {
        let sum = 0;
        let viewResult2 = '';

        for (let j = 0; j < i; j++) {
            sum += i;
            if (i < 10) {
                viewResult2 += '  ' + i;
            } else viewResult2 += ' ' + i;
        }
        viewResult += viewResult2 + '\n';

        if (sum >= limit) {
            result = `Row ${i} hit the limit: sum = ${sum}`;
            break outerLoop;
        }
    }
    console.log(viewResult);
    return result;
}
console.log(findHeavyRow(50)); // → "Row 8 hit the limit: sum = 64"


// Bonus: Change findHeavyRow 
function findHeavyRowBonus(limit, maxRows) {
    let result = '';
    let viewResult = '';

    outerLoop: for (let i = 1; i < maxRows; i++) {
        let sum = 0;
        let viewResult2 = '';

        for (let j = 0; j < i; j++) {
            sum += i;
            if (i < 10) {
                viewResult2 += '  ' + i;
            } else viewResult2 += ' ' + i;
        }
        viewResult += viewResult2 + '\n';

        if (sum >= limit) {
            result = `Row ${i} hit the limit: sum = ${sum}`;
            break outerLoop;
        }
    }
    console.log(viewResult);
    return result;
}
console.log(findHeavyRowBonus(200, 20)); // Row 15 hit the limit: sum = 225


// Task 3 — PIN Cracker
// Secret PIN digits — do not change these
const s1 = 3;   // hundreds digit
const s2 = 1;   // tens digit
const s3 = 4;   // units digit

const crackPin = (s1, s2, s3) => {
    let attempts = 0;
    outerLoop:
     for (let i = 1; i < 6; i++) {
        for (let j = 1; j < 6; j++) {
            for (let k = 1; k < 6; k++) {
                attempts++;
                if (i === s1 && j === s2 && k === s3) {
                    console.log(`PIN foun: ${s1}-${s2}-${s3}`);
                    break outerLoop;
                }
            }
        }
    }
    return console.log(`Cracked in ${attempts} attempt(s)`);
}
crackPin(s1, s2, s3);


// 🔴 Bonus A: Change s1, s2, s3 to 5, 5, 5. Before running the code, predict how many
//  attempts it will take. Then run and verify.
// answer 125


// Bonus B: Add default parameter values so crackPin() with no arguments defaults 
// to s1=1, s2=1, s3=1. Call it both ways and compare the attempt counts.
const crackPinBonusB = (s1 = 1, s2 = 1, s3 = 1) => {
    let attempts = 0;
    outerLoop:
    for (let i = 1; i < 6; i++) {
        for (let j = 1; j < 6; j++) {
            for (let k = 1; k < 6; k++) {
                attempts++;
                if (i === s1 && j === s2 && k === s3) {
                    console.log(`PIN foun: ${s1}-${s2}-${s3}`);
                    break outerLoop;
                }
            }
        }
    }
    return console.log(`Cracked in ${attempts} attempt(s)`);
}
crackPinBonusB(); // PIN foun: 1-1-1    Cracked in 1 attempt(s)
