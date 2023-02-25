//Question1
var ages = [3, 9, 23, 64, 2, 8, 28, 93]; //given values for array

//1a subtraction
var firstAge = ages[ages.length - ages.length]; 
// first array starts with zero, 
//so I used .length to get the length of a string and subtract which will always equal zero.

var lastAge = ages[ages.length - 1];
//.length is the amount of string which is always 1 more than array because it starts at zero.
//so I subtracted 1 which will always give me the last element of array. 

console.log(`Answer 1a: ${lastAge - firstAge}`); // displays last element(age) minus first element(age)



//1b adding(pushing new age to array)

var ages = [3, 9, 23, 64, 2, 8, 28, 93]; //given values
ages.push(50); // .push allows to add new value to the end of an array
var firstAge = ages[ages.length - ages.length];//same as 1a
var lastAge = ages[ages.length - 1];//same as 1a

console.log(`Answer 1b: ${lastAge - firstAge}`); //same as 1a, but (50) is pushed so answer will be different


//1c finding the avg age 
var sum = 0; //give value to variable sum

for (var i = 0; i < ages.length; i++) {
    sum += ages[i];
} //created for loop starting with 0 to length of array, then give var sum a value by adding each age/ 

console.log(`Answer 1c: ${sum / ages.length}`); // run the equation with console.log to find the avg 


//Question 2

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; //given names for an array

//2a loop to find the avg 
var sum = 0;

for (i = 0; i < names.length; i++) {
        sum += names[i].length;
} //created a for loop that allows to add each names characters which equals to sum. 

console.log(`Answer 2a: ${sum / names.length}`); //sum of characters of the names divided by how many names (names.length)
//gets me the average of characters in each names. 

//2b loop to concatenate the names 

var allNames = names[0];  //creating variable that will show all the names.

for(i = 1; i < names.length; i++) {
        allNames = allNames.concat(` ${names[i]}`);
} 
//forming a loop to list all the names in the array, and concatenating in variable allName.
//used the template literal method to list the name inside the array with space in between.

console.log(`Answer 2b: ${allNames}`); //print out allName function 

//Question 3
//How do you access the last element of any array?
console.log(`Answer 3: You access the last element by finding array.length and subtract 1. (array.length - 1)`);

//Question 4
//How do you access the first element of any array?
console.log(`Answer 4: You access the first element by searching [0] which is the first element of an array. (Array[0])`);

//Question 5
let nameLengths = [];  //creating nameLangths array
//(let names) value is already given in question 2.

for (i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
} //create loop for array "names" to display value of each string, then get the number of characters 
//in string of "names"

console.log(names); //printing out the names to show variable is given
console.log(nameLengths); //print out the nameLengths.


//Question 6 Sum of elements

let sumLengths = 0; //give sum of lengths value

for (i = 0; i < nameLengths.length; i++) {
    sumLengths += nameLengths[i];
} //created for loop to add length of chracters until everything is added to equal sumLengths

console.log(`Answer 6: ${sumLengths}`);
//print out sumLengths 

//Question 7 function concat


wordN = (word, n) => {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += word; 
    }
    return result;
};
//gave function wordN two para (word, n)
//I basically told the program that word will be a string and n will be a number using arrow function.
//Also, allows word and n to concatente itself to each other. 
console.log(`Answer 7: ${wordN("Hello", 3)}`); 
//print the wordN function with string first, and number of times. 


//Question 8

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
// created function fullName and has variable firstName and lastName.
//used arrow function and template literals so function prints both strings with space. 
console.log(`Answer 8: ${fullName("Soichiro", "Itagaki")}`); 
//prints the fullName function with my first and last name. 

//Question 9 greater than 100

var numbers = [10, 15, 24, 50, 100]; //array of numbers 
var sumOfNumbers = 0; //give value to greaterThan100

function greaterThan100() {
    for (i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
}                                                   //create for loop to add numbers array to greaterThan100
{
    if (sumOfNumbers > 100) { 
        console.log(`Answer 9: ${true}`);  //if variable greaterThan100 (total sum of numbers array) is larger than 100, print true
} else {
    console.log(`Answer 9: ${false}`);    //else print falsr
}
}
}

greaterThan100(numbers); 

 //if variable greaterThan100 (total sum of numbers array) is larger than 100, print true
 //anything else would print false. 


//Question 10 average of all elements in array

function average(arr) {
   var total = 0;                           //give value to variable total (for sum because var sum is already used earlier)
    for (i = 0; i < arr.length; i++) {      
        total += arr[i];                    //for loop to tell program that "total" is equal to all the array values combined.
    }  
    console.log(`Answer 10: ${total / arr.length}`);    //print the average by dividing total to length of array.
}

average(numbers);

//Question 11 first array or second array is greater? 
var array1 = [1, 2, 3];      //give values to array1 and array 2. 
var array2 = [1, 5, 10];

function greaterArray(firstAvg, secondAvg) {         //create function greaterArray with 2 parameters first and second average. 
  
var firstSum = 0; //variable used for sum of first array
var firstAvg = 0; //variable used for average of array1
var secondSum = 0; //variable used for sum of second array
var secondAvg = 0; //variable used for average of array2 (can't use const because variable needs to change)

for (i = 0; i < array1.length; i++) {
    firstSum += array1[i];                     //finding the sum of array1 = firstSum
    firstAvg = firstSum / array1.length;      //finding the avg of array1 = firstAvg
}
for (i = 0; i < array2.length; i++) {
    secondSum += array2[i];                   //finding the sum of array2 = secondSum
    secondAvg = secondSum / array2.length;    //finding the avg of array2 = secondAvg
} if (firstAvg > secondAvg) {
    console.log(`Answer 11: ${true}`);
} else {
    console.log(`Answer 11: ${false}`);
}  
}                                         //print true if array1 average is > than average of array2
                                           // else will print false 
 greaterArray(array1, array2);


//Question12 Buy drink or not? 

function willBuyDrink(isHotOutside, moneyInPocket) {      //function willBuyDrink consists of these variables.
    if (isHotOutside && moneyInPocket > 10.50) {         //if outside is hot is true AND money is > than 10.50
      console.log(`Answer 12: ${true}`);                // Print true
    } else {
      console.log(`Answer 12: ${false}`);
    }
  }

willBuyDrink(true, 10.51);


//Question 13 My function (Keep track of my bills)

var weeklySalary = [1000.00, 925.00, 876.00, 1200.00]; //made an array representing my weekly income (4 times a month) 
var monthlyNeeds = ["Groceries", "electricity", "rent", "hobby", "gymMembership"]; //made an array showing necessary monthly cost.
var costOfNeeds = [125.00, 200.00, 1500.00, 150.00, 100.00]; //made array cost of each needs. 
 

function monthlyPayment(weeklySalary, costOfNeeds) {
    
var sumCost = 0; //sum of costs 
var sumSalary = 0; //sum of my weekly salary
var remainder = 0; //give value to remainder of money after spending.

weeklySalary.push(500.00, 100.00, 80.00);  //Yay extra side income! 
monthlyNeeds.push("hospital bill", "pet Food", "dinner with friends");                      //extra cost
costOfNeeds.push(2000.00, 200.00, 100.00);              //Additional cost of needs

for (i = 0; i < costOfNeeds.length; i++) {
    sumCost += costOfNeeds[i];
}

var sumSalary = 0; //sum of my weekly salary
var remainder = 0; //give value to remainder of money after spending.

for (i = 0; i < weeklySalary.length; i++) {    //created for loop to add up my array for weekly salary
sumSalary += weeklySalary[i];           //total amount of weekly salary is sum of salary 
remainder = sumSalary - sumCost; //remainder shows how much I will have left after subtracting cost of payment from my salary
}  
{
if (sumSalary >= sumCost) {  
    
    console.log(`Answer 13: I made enough money for ${monthlyNeeds} with my salary. I will have ${remainder} dollars left in your account!`);
} else {
    console.log(`Answer 13:I can't afford ${monthlyNeeds} with my salary. My balance will be ${remainder}. You need to cut cost somewhere!`);
}
}
}

monthlyPayment(weeklySalary, costOfNeeds);
//print I can or can't afford the necessities. If I can, print the remainder as well. 

//I created this because I would need to keep track of my salary and how much I need to spend monthly. 
//You can also easily add more nessecities, cost, and extra income and calculate accordingly. It will let me know if I can't afford everything or not. 



