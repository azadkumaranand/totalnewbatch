//write a js code to check a given number is prime or not

let a = 15;
// 1 or 13;
// console.log();
for(let i=2; i<=a/2; i++){
    if(a%i!=0){
        if(i==parseInt(a/2)){
            console.log(`${a} is a prime number`);
        }
        continue;
    }
    console.log(`${a} is not a prime number`);
    break;
}

