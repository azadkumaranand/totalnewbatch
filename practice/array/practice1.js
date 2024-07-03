//sum of array
function arraySum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

//product of array
function arrayProduct(arr){
    let multiple = 1;
    for(let i=0; i<arr.length; i++){
        multiple = multiple * arr[i];
    }
    return multiple;
}

//reverse a array
function reverseArray(arr){
    let revarr = [];
    for(let i=(arr.length-1); i>=0; i--){
        revarr.push(arr[i]);
    }
    return revarr;
}


let x = [10, 50, 45, 14, 32, 49];

console.log(`Sum of array elements is: ${arraySum(x)}`);
console.log(`Product of array elements is: ${arrayProduct(x)}`);
console.log(`Reverse of array is: ${reverseArray(x)}`);

