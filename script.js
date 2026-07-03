//Q1
let age = 20;
if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}
//Q2
let balance = 1500;
if (balance >= 1000) {
    console.log("Withdrawal Allowed");
} else {
    console.log("Insufficient Balance");
}
//Q3
let temp = 28;
if (temp > 35) {
    console.log("Hot");
} else if (temp >= 20) {
    console.log("Pleasant");
} else {
    console.log("Cold");
}
//Q4
let marks = 82;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
//Q5
let age2 = 25;
if (age2 < 13) {
    console.log("Child");
} else if (age2 <= 19) {
    console.log("Teenager");
} else if (age2 <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}
//Q6
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
//Q7
for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}
//Q8
for (let i = 1; i <= 49; i += 2) {
    console.log(i);
}
//Q9
for (let i = 1; i <= 10; i++) {
    console.log("8 x " + i + " = " + (8 * i));
}
//Q10
for (let i = 101; i <= 120; i++) {
    console.log("Student Roll No: " + i);
}
//Q11
console.log("*****");
//Q12
for (let i = 1; i <= 5; i++) {
    console.log("*****");
}
//Q13
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
//Q14
for (let i = 5; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
//Q15
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }
    console.log(pattern);
}
//Q16
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += i;
    }
    console.log(pattern);
}
//Q17
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= 5 - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }
    console.log(pattern);
}
//Q18
for (let i = 5; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= 5 - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }
    console.log(pattern);
}
//Q19
let isLoggedIn = true;
if (isLoggedIn) {
    console.log("Welcome User");
} else {
    console.log("Please Login");
}
//Q20
let cartValue = 5500;
if (cartValue > 5000) {
    console.log("20% Discount");
} else if (cartValue > 3000) {
    console.log("10% Discount");
} else {
    console.log("No Discount");
}
//Q21
let battery = 15;
if (battery < 20) {
    console.log("Low Battery");
} else {
    console.log("Battery OK");
}
//Q22
for (let i = 1; i <= 5; i++) {
    console.log("Attempt " + i);
}
//q23
// Upper Part
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= 5 - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }
    console.log(pattern);
}
// Lower Part
for (let i = 4; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= 5 - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }
    console.log(pattern);
}
//Q24
for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}