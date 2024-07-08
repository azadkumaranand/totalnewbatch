
<?php
$numbers = [1, 2, 3, 4, 5];

$squaredNumbers = array_map(function($number) {
  return $number * $number;
}, $numbers);

print_r($squaredNumbers);  
// Outputs: Array ( [0] => 1 [1] => 4 [2] => 9 [3] => 16 [4] => 25 )
?>

