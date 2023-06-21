// q no 1
// find traingle sides
function checkTriangle() {
    var side1 = Number(prompt("Enter the length of side 1:"));
    var side2 = Number(prompt("Enter the length of side 2:"));
    var side3 = Number(prompt("Enter the length of side 3:"));
  
    if (side1 === side2 && side2 === side3) {
      return "Equilateral triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      return "Isosceles triangle";
    } else {
      return "Scalene triangle";
    }
  }
  console.log(checkTriangle());

//  q no 2
// find leap year
function checkLeapYear() {
    var year = Number(prompt("Enter a year:"));
  
    if ( year % 4 === 0) {
      return year + " is a leap year";
    } else {
      return year + " is not a leap year";
    }
  }
  
  console.log(checkLeapYear());

//   question no 3
//  sum array
function sumArray(numbers) {
    var sum = 0;
    
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    
    return sum;
  }
  var numbers = [1, 2, 3,  3,4, 5];
console.log(sumArray(numbers)); 

//  q no 4
// reverse array

const arry = [1,2,3,4,5];
let res = array.reverse();
console.log(res)