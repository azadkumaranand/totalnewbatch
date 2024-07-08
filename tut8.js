let scores = [10, 20, 30, 40];

// map: creates a new array with the results of calling a function on every element
let doubledScores = scores.map(function(score) {
  return score * 2;
});
console.log(doubledScores); // Output: [20, 40, 60, 80]

// filter: creates a new array with all elements that pass the test implemented by the provided function
let highScores = scores.filter(function(score) {
  return score >= 30;
});
console.log(highScores); // Output: [30, 40]

// reduce: executes a reducer function on each element of the array, resulting in a single output value
let totalScore = scores.reduce(function(total, score) {
  return total + score;
}, 0);
console.log(totalScore); // Output: 100