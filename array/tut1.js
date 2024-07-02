//array is a data type 
//array can store multiple values in one variable

// define array
let x = [10, 20, 45, 30, 25, 62, 8, 74, [40, 10], null, 'azad', undefined, {name: 'azad'}];

//access array element
console.log(x[3]);

//Q1. how can you access all array elments
for(let i=0; i<8; i++){
    console.log(x[i]);
}

//Q1. find array length

console.log(`Lenght of array is ${x.length}`);

// multidimentional array

let multix = [41, 50, [10, 12, 17], {name: 'azad'}, 'yogesh', 74, 85, 'ramesh'];

console.log(multix[1]);