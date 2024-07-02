//write a javascript function to add two given numbers in function parameters

function add(a, b){
    // console.log(a+b);
    return a+b;
}


console.log(add(10, 50));


//write a javascript function to return reminder of two given numbers in function parameters

function reminder(a, b){
    return a%b;
}

console.log(`Reminder is ${reminder(20, 12)}`);


// write a javascript function to find maximun value of a number array

let numberArr = [10, 85, 74, 15, 91, 58, 49];

function maxOfArr(arr){
    let maxval = -5000;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxval){
            maxval = arr[i];
        }
    }
    return maxval;
}

function minOfArr(arr){
    let minVal = 5000;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<minVal){
            minVal = arr[i];
        }
    }
    return minVal;
}

console.log(`Maximum value of array is: ${maxOfArr(numberArr)}`);
console.log(`Minimum value of array is: ${minOfArr(numberArr)}`);