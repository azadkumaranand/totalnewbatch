//function is a set of code which execute when we call that

console.log("here function will start");

//declear a function
function myFunc(){
    console.log('this code is inside the function');
}

//test output
console.log("hello after function");

//call function
myFunc();


//function parameters
let a = 10;
let b = 21;

// a = 20;

function sumWithoutReturn(a, b){
    console.log(a+b);
    return 10;
}
// console.log(a+b);

//call sum function
sumWithoutReturn(5, 12);
sumWithoutReturn(20, 25);
let result = sumWithoutReturn(85, 74);

console.log(result);


// function return 

function sumWithReturn(a, b){
    return a+b;
}

result = sumWithReturn(41, 21);
console.log(result);