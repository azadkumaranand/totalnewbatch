//array properties
let x = [1, 2, 3, 4, 5, 6];

let size = x.length;

console.log(typeof (x));
console.log(size);

//array methods
//arrray push method add new element in the last

x.push(10);
console.log(x);
//array pop method remove last elment from the array
x.pop();
console.log(x);

//unshift method add new elment at the begining (start)

x.unshift(23);
console.log(x);


//shift method remove element from the begining

x.shift();
console.log(x);

//splice method use to add and remove lements in the array

x.splice(2, 3, 'azad', 'suman', 'sultan', 74, 32);
console.log(x);

//array loop
x.forEach(function(element){
    console.log(element);
})

// array map

//Q1. multiply all array elements by 2 and create new array 

let a = [1, 2, 3, 4, 5, 6, 7];
let b = [];

// using for loop
for(let i=0; i<a.length; i++){
    b.push(a[i]*2);
}
console.log(b);

// using map
let c = a.map(function(element){
    return element*2;
});

console.log(c);

//filter method used to filter the array on some condition

let z = a.filter(function(element){
    return element%2==0;
})

console.log(z);

//each method used to check all element pass some test

let m = a.every(function(element){
    return element > 0;
})
console.log(m);

let n = a.some(function(element){
    return element>16;
})

console.log(n);