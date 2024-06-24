// Q1.
let a = 5;
let b = 6;
let c = 7;

let s = (a+b+c)/2;
console.log(s);

let area = (s*(s-a)*(s-b)*(s-c))/2;

console.log(`Area of traingle is ${area}`);

// Q2.

let celcius = 60;

let fahrenheit = ((celcius*9)/5) + 32;

// let lastName = "kumar";

// let name = `Azad ${lastName}`;

console.log(`Fahrenheit temperature of ${celcius}: ${fahrenheit}`);
// console.log(name);


// Q3.

let x = 50;
let y = 50;

// let sum = 3*(a + b);

let sum;

if(x==y){
    sum = 3*(x+y);
}else{
    sum = x+y;
}

console.log(`Sum of two numbers is : ${sum}`);


// Q4.

let specific_number = 20;

let difference;

if(specific_number<=19){
    difference = 19-specific_number;
}else{
    difference = 3*(specific_number-19);
}


console.log(`Abslute Difference is : ${difference}`);

// Q6.

let m = 40;
let n = 10;
let result;

if(m==50 || n==50 || m+n==50){
    result = true;
}else{
    result = false;
}
console.log(`Result : ${result}`);