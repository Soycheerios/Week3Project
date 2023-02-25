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

const wordN = (word, n) => {
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

var numbers = [10, 15, 24, 50]; //array of numbers 
var greaterThan100 = 0; //give value to greaterThan100

for (i = 0; i < numbers.length; i++) {
    greaterThan100 += numbers[i];
} //create for loop to add numbers array to greaterThan100
{
    if (greaterThan100 > 100) { 
        console.log(`Answer 9: ${true}`);
} else {
    console.log(`Answer 9: ${false}`);
}
}
 //if variable greaterThan100 (total sum of numbers array) is larger than 100, print true
 //anything else would print false. 


//Question 10 average of all elements in array
var total = 0; //give value to variable total (for sum because var sum is already used earlier)

for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
}  //for loop to tell program that "total" is equal to all the array values combined.

console.log(`Answer 10: ${total / numbers.length}`); //print the average by dividing total to length of array. 



//Question 11 first array or second array is greater? 

const array1 = [50, 70, 80, 100]; 
const array2 = [1, 5, 10];  //give array1 and array2 set of arrays. 

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
}                                           //print true if array1 average is > than average of array2
                                           // else will print false 



//Question12 Buy drink or not? 
const isHotOutside = true;  //give isHotOutside a boolean value
const moneyInPocket = 5.00; //give moneyInPocket a number value

let willBuyDrink = (isHotOutside, moneyInPocket)  //function willBuyDrink consists of these variables.
  
if (isHotOutside == true && moneyInPocket > 10.50) {  //if outside is hot is true AND money is > than 10.50
        console.log(`Answer 12: ${true}`);             // Print true
    } else {
        console.log(`Answer 12: ${false}`);            // anything else that doesn't match will print false. 
    }


//Question 13 My function (which items from wish list can I buy?)

const birthdayMoney = [25.00, 20.00, 100.00, 100.00, 50.00]; //made array of birthday monies I got from different individuals
const wishList = ["Shoes", "Hoodie", "PC", "Games", "bike"]; //made array with list of items I want.
const wishListCost = [60.75, 20.20, 512.87, 150.23, 469.89]; //made array cost of each items. 

var sumBirthdayMoney = 0; //sum of birthday money
var remainder = 0; //give value to remainder of money after spending money

birthdayMoney.push(20.00, 25.00, 50.00);  //Yay other friends gave me more money for my birthday! 
wishList.push("cars", "books", "Legos");                      //I also want cars
wishListCost.push(20376.60, 11.32, 25.85);              //New wish list item costs this much

for (i = 0; i < birthdayMoney.length; i++) {    //created for loop to add up my array for birthday money
sumBirthdayMoney += birthdayMoney[i];           //total amount of birthday money represented by sumBirthdayMoney
remainder = sumBirthdayMoney - wishListCost[6]; //remainder shows how much I will have left after subtracting cost of an item from my birthday money
}  
{
if (sumBirthdayMoney >= wishListCost[6]) {  
    
    console.log(`Answer 13: I can buy ${wishList[6]} with the birthday money. I will have ${remainder} dollars left.`);
} else {
    console.log(`Answer 13:I can't buy ${wishList[6]} with the birthday money. I didn't get enough money.`);
}
}

//print I can buy or can't buy the item. If I can, print the remainder as well. 

//I created this because when kids recieve birthday money from multiple relatives, they can see if they can buy the items on their wish list. 
//You can also easily add more items, cost, and money recieved and calculate accordingly.
//I can also use this function and replace birthdayMoney to Salary, and wishList to monthlyCost to see if I can afford groceries, rent, etc each month. 
//Answer will print out if I can buy, which item, and how much left. 




