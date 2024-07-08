//create object

let student = {
    name: "Yogesh",
    age: 22,
    courses: ['html', 'css', 'javascript', 'php', 'laravel']
}


//access object 

console.log(student.name);
console.log(student.courses[2]);

//object method

let operation = {
    add: function(a, b){
        return a+b;
    },
    status: 'it is operating',
    substract: function(a, b){
        return a-b;
    },
    multiplay: function(a, b){
        return a*b;
    },
    division: function(a, b){
        return a/b;
    },
    reminder: function(a, b){
        return a%b;
    }
}

let sum = operation.add(7, 4);
console.log(sum);

let difference = operation.substract(7, 4);
console.log(difference);

let reminder = operation.reminder(7, 4);
console.log(reminder);

console.log(operation.status);