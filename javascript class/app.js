// alert("hello world")
let first_name = 'daniel'
// let, const, var(declarators)
let sabi= 'faith';
console.log(sabi);

const country = 'Nigeria';
console.log(country);

var restaurant = 'chillers lounge';
console.log(restaurant);
let fullname = 'ada'
fullname = 'AJE'
console.log(fullname);
var lastname ='saka';
var lastname ='gabriel'
console.log(lastname);
const middlename ='peter'
// constraints in variable naming
let Country = 'Nigeria'
console.log(Country);
let state = 'lagos'
console.log(state);
let continent ='Africa'
console.log(continent);
let email ='faith@gmail.com'
let result = email
console.log(result);
console.log(email.length);
console.log(email[10]);
let full_name = 'sam'
console.log(full_name.toUpperCase());
let emails ='tunde@gmail.com';
let finalemail = emails.indexOf('g')
console.log(finalemail);
let color ='oniongreen'
let finalcolor =color.slice(0,5)
console.log(finalcolor);
let gender  ='male'
let gender_replace = gender.replace('m','s')
console.log(gender_replace);
let age = 25;
let year = 2020;
console.log(age,year);
age=30
console.log(age);
// assignent

let aniMal = 'hippopotamus'
console.log(aniMal.toUpperCase());
let Animal = 'HIPPOPOTAMUS'
console.log(Animal.toLowerCase());
let aniMAL = 'hipopotamus'
console.log(aniMAL.indexOf('t'));
let aNimal ="hippopotamus"
let ANimal = aNimal.lastIndexOf('o');
let animal ='hippopotamus'
let potinhippotamus = animal.slice(5,8)
console.log(potinhippotamus);
let animal_1 ='hippopotamus'
let mammal =animal_1.replace('h','b')
console.log(mammal);

// numbers
let score1 = 10
let score2= 5
console.log(score2);
//  math operators +,-,*(multiplication),/(division),**(indices),%( modulus:gives the remaining value after dividing)
let totalScore = score1 + score2
console.log(totalScore);
let range =10;
range++
console.log(range);
range -=5
// range %=5
console.log(range);

// concatination and template litrals or strings
let Score =50
let school = 'Ray jacobs'
let statement = ' In ' + school + ' Faith scored '+ Score +' in her the exam';
// it could also been done as 'in' + ' ' + school + ' ' 'Faith scored' + 
console.log(statement);
// template litrals or string
let statements  = `In ${school} Faith scored ${Score} in her exam`
console.log(statements);

// [2:17 PM, 3/26/2022] +234 706 044 0986: Declare variables for continent, language, ghanaPopulation, finlandPopulation, country and nigeriaPopulation 

// With theses respective values

// Africa, pidgin English, 500,800 Nigeria, 1000
// [2:18 PM, 3/26/2022] +234 706 044 0986: Task

// 1)  If nigeriaPopulation is split in half.... How many people would love in each half?

// 2)  Increase nigeriaPopulation by 1 and log result to the console

// 3)   Log to the console using < or > to indicate whether   nigeriaPopulation is more than finlandPopulation

// 4)   Do same for ghanaPopulation

// 5)   Based on the variables created, create a new variable 'description' which would contain a string with this format --nigeria is in Africa and it's nigeriaPopulation people speak pidgin English



// classwork
let Continent = 'Africa';

let language = 'Pidgin English';
let GhanaPopulation = 500;
let FinlandPopulation = 800;
let CounTry = 'Nigeria';
let Nigeriapopulation  ='1000';
Nigeriapopulation /= 2
Nigeriapopulation++
console.log(Nigeriapopulation < FinlandPopulation);
console.log(Nigeriapopulation > GhanaPopulation);
let description = `${CounTry} is in ${Continent} and it's ${Nigeriapopulation} people speak ${language}`
console.log(description);

// arrays for storing list of collections of strings,numbers and other data types and they are represented by square bracket[]

let friend ='chika'
console.log(friend);
let friends = ['Tunde','Tola', 'Michael', 'Eggy', 'Faith', 'Azeez']
let myfriends = friends
console.log(myfriends);
console.log(myfriends[2]);
myfriends[2] = 'DANIEL'
console.log(myfriends);
// array methods
console.log(myfriends.length);
console.log(myfriends.includes('temi'));
console.log(myfriends.join('_'));
console.log(myfriends.indexOf('Michael'));
console.log(myfriends.concat(['DAFE', 'Yomi']));
console.log(myfriends.push('Rebecca'));
console.log(myfriends);
console.log(myfriends.pop());
console.log(typeof myfriends);

let YEar = 2023;
console.log( typeof YEar);
let market =null
console.log( typeof market);
let street ='onipanu';
console.log( typeof street);

// create an array of colors...pink,blue,yellow,green,purple,voilet and red...
// i want u to overide violet with black

let colors =['pink','blue','yellow','green','purple','violet','red']
console.log(colors);
console.log(colors[5]);
colors[5] = 'black';
console.log(colors);

// spread operator
let alphabet = ['a', 'b', 'c','d'];
let alphabets = [ 'e','f','g','h'];
let results = [...alphabet, ... alphabets]

// destructure
let Colours = ['pink', 'blue', 'red', 'grey','white','brown']
let [a,b,c, ...rest] = Colours
console.log(a,c, ...rest);
// console.log(b);
// console.log(c);

// comparison operator

// >
// <
// >=
// <=
// ==
// ===
// !==

let year1 = 2024;

console.log(year1 > 2001);
console.log(year1 < 2001);
console.log(year1 >= 2001);
console.log(year1 <= 2001);
console.log(year1 != 2001);

// loose comparison operator ==

let score = '100'

let score22 = score != 100
console.log(score22);

// strict comparison operator ===

let scores = '100';
let sccore = scores !== 100
console.log(sccore);



// [5:25 PM, 3/26/2022] +234 706 044 0986: Create an array of trainees of everyone in this class,starting with Tola

// Update the first name on the array to pappi and log to the console

// Using an array method..
// Add Amos and Mike to the end of array

// Using an array method remove Mike from the array

// Using an array method..
// Add Zack and Bobby at the beginning of d array

// Using an array method remove Zack from the array


// Using an array method concat a new array of trainees... Queen, segun, Pius, emeka
//  Names of trainees

// Tola,
// Tunde,
// Micheal,
// Dami,
// Azeez,
// Faith,
// Lanre,
// Daniel
//  Just as we used an array method to add and remove from an array

// Search for array methods in adding and removing from the front.. this wud be used on q4 and q5


// let trainees = ['TOLA','TUNDE','MICHAEL', 'DAMI','AZEEZ','FAITH','LANRE','DANIEL']
// let students = trainees 
// console.log(students);
// console.log(students[0]);
// students ='Pappi'
// console.log(students);
// console.log(students.concat(['Amos','MIKE']));
// console.log(students.pop());
// console.log(students.unshift('Zack',);
// console.log(students);

// correction
let trainees =['TOLA','TUNDE','MICHAEL','DAMI','AZEEZ','FAITH','LANRE','DANIEL']
console.log(trainees);
// Q1
trainees[0] = 'pappi'
console.log(trainees);
// Q2
let addtoend =trainees.push('AMOS')
console.log(trainees);
let addtoEnd2 =trainees.push('MIKE')
console.log(trainees);
// Q3
let subFromEnd =trainees.pop()
console.log(trainees);
// Q4
let addToFront =trainees.unshift('BOBBY')
console.log(trainees);
let addToFront2 = trainees.unshift('ZACK')
console.log(trainees);
// Q5
let subFromFront =trainees.shift()
console.log(trainees);
// Q6
let newTrainees =trainees.concat(['QUEEN','SEGUN','PIUS','EMEKA'])
console.log(newTrainees);

// Type conversion
const RESULT = Boolean(50);
console.log(typeof RESULT);

let details = null
console.log(details);

let details2
console.log(details2);

 let numBERS = [1,2,3,4,5,6,7,8,9,10]
 console.log(numBERS);


 for (let i = 1; i < 10; i++) {
    console.log(i)
  }
  
  let people = ['Chika', 'Udeme', 'Emma', 'Dafe']
  
  for (let i = 0; i < people.length; i++) {
    console.log(people[i])
  }
  
  console.log(people.length)
  
  // while loop
  
  let YeaR = [2020, 2021, 2022, 2023]
  
  let i = 0
  
  while (i < YeaR.length) {
    console.log(YeaR[i])
    i++
  }

  // ASSIGNMENT
  //  let colours = ['blue', 'pink', 'black', 'red']
  // use a for loop on the array
  //  And also use a while loop

  let COLOURS =['blue','pink','black','red']

  for (let c=0; c < COLOURS.length;c++)
  {console.log(COLOURS.length);}
  console.log(COLOURS[i]);
  
  let colours =['blue','pink', 'black','red']

  let l=0

   while (l< colours.length)
   {console.log(colours[l]); l++}

  //  if
  const AGE =18;

  if(AGE=18){console.log('YOU ARE NOW AN ADULT FAITH');}
  else{console.log('wrong input');}
  if (AGE === 10){console.log('you are now an adult');}else{console.log('wrong input');}

let password ='password'
console.log(password.length);
if (password.length >= 8){console.log('password is strong');}
else if (password.length >= 6){
  console.log('password is good');
}
else{console.log('password is weak');}

// let Password =prompt('Type a password');
// if(Password.length >=10){
//   alert('Password is super strong')
// }else if(Password.length>=6){
//   alert( 'Password is okay')
// }else{alert('Password is weak, please Password must be longer than 4')
// }

// logical operators
// || means or
// && means and


// true && true = true
// true && false = false
// false && true = false
// false && false = false

// true || true = true
// true || false = true
// false || true = true
// false || false = false

console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log(!true)
console.log(!false)

let PASSWORD = 'pass@'
console.log(PASSWORD.length)

if (PASSWORD.length >= 12 && PASSWORD.includes('@')) {
  console.log('that password is very strong')
}else if(PASSWORD.length >= 8 || PASSWORD.includes('@')){
  console.log('password is good');
}else if(PASSWORD.length >= 4 && PASSWORD.includes('@')){
  console.log('password is okay');
}
// Task
// Given an integer, n, perform the following conditional actions:

// If n is odd, print Weird

// If n is even  print Not Weird

let n = prompt('type a number')
if(n % 2 ==0){
  alert ( 'Not weird')
}else if(n % 2 !==0){
  alert('Weird')
}


let Answers = [20,40,0,50,100,15,10];

// for(let r = 0; r < Answers.length; r++){
//   console.log('Your score is: ', Answers[r]);
// }

// Break and Continue
for (let r = 0; r < Answers.length; r++) {
  // console.log('Your score is: ', Answers[r])

  // what if we dont want to log to our console 0?
  if(Answers[r]===0){
    continue
  }
    console.log('Your score is: ', Answers[r])

  if(Answers[r] ===100){
    // console.log('top score is 100');
    break
  }

}
//  using data below...calculate the BMI for both Daniel and Tola...and also with a conditional statement....if Daniel's BMI is more dan Tola...log to d console Daniel's Bmi is greater than Tola,else
//  bmi = mass / height ** 2 Given dt Daniel/Tola height   10/9 Daniel/Tola weight 60/70 Hint Use if statement😉
// / BMI = mass / height ** 2

let danielMass = 60;
let danielHeight = 10;

let danielBMI = danielMass / danielHeight ** 2;

console.log(danielBMI)

let tolaMass = 70;
let tolaHeight = 9;

let tolaBMI = tolaMass / tolaHeight ** 2

console.log(tolaBMI)

if(danielBMI > tolaBMI){
  console.log('danielBMI is greater than tolaBMI');
}else{
  console.log('tolaBMI is greater than danielBMI 🏆');

 // Block and Global scope
let ages = 100;

if(true){
  let ages = 40
  console.log('inside 1st block of code: ', ages)

  if(true){
    let ages = 20
  console.log('inside 2nd block of code: ', ages)
  }

}
console.log('outside block of code', ages)

function greet(){
  console.log('how are you class');
}
greet()
// call or invoke the function greet()

// Function Expression
let speak = function(){
  console.log('hey tech class');
}

speak()

// arguments and parameter

let speaker = function(name){
  // console.log(`Good day ${name}`);
  console.log('Good day ' + name);
}

speaker('Faith')

function salute(name,time){
  console.log(`Good ${time} ${name} `);
}

salute('Dami', 'evening')


// Arrow function

let agree = (fruits)=>{
  console.log(`4 ${fruits}`)
}
agree('apples')
let add = (NAME)=>{
  let year =34
  let statement = `${NAME} is ${year} years old`
  console.log(statement);
}
add('Faith')
let result = year +20
console.log(result);

function Greet(mvt) {
  let apples = 10
  return StaTement = 'Dami was able to buy ' + apples + ' apples last night ' + mvt
  // console.log(StaTement);
}

let expression = Greet('on Her way back')
console.log(expression)

let another_statement = expression + ' from church'

console.log(another_statement)


let totals = (number)=>{
  let paw_paw = 100;
  let assessment = `Dami eats ${paw_paw} wraps of eba ${number}`
  // console.log(assessment);
  return assessment
}

let TOTALS = totals('daily')

console.log(TOTALS);

let explanation = `Eggy was wowed that ${TOTALS}`

console.log(explanation)



// classwork
// We have 2 tech teams(Spartans and alpha)

// They compete against each other 3 times, the winner with highest average score wins the trophy.

// Calculate the average score for each team using data below.

// Spartans score - 60, 70, 80

// Alpha score - 88, 91, 120

// Compare the teams average score to determine the winner of the competition and print to the console...

// Hint, use an if, else statements

let spartansscore = [60,70,80]
let spartanaveragescore= (60+70+80)/3
console.log(spartanaveragescore);

let Alphascore = [88,91,120]
let Alphaaveragescore =(88+91+120)/3
console.log(Alphaaveragescore);
if( spartanaveragescore is > Alphaaveragescore){
  console.log( winner);
}
let calcAge =calcAge(2022)
let FinalResults =`Ada was born ${calc} years ago` 
console.log(FinalResults);

// object

let client_user = {
  firstName: 'Daniel',
  lastName: 'Oluwadamilare',
  age: 40,
  hasDriversLicence: true,
  friends:['Tola', 'Tunde', 'Dami', 'Michael']
}

console.log(client_user);

console.log(typeof client_user)


// Dot vs bracket notation

console.log(client_user.firstName)
console.log(client_user.friends)

console.log(client_user['firstName'])




//  Exercise -

// There are 2 teams, Alpha and Spartans.

// Each team competes 3 times and the average of the 3 scores is calculated( one average score per team)

// A team only wins if it has atleast double the average score of the other team otherwise no team wins.

// 1) create an arrow function 'calcAverage' to calculate the average of 3 scores. 

// 2) use the function to calculate the average for both teams.

// 3) Create a function 'checkWinner' that takes the average score of each team as parameters ('aveAlpha' and 'aveSpartan') and then log the winner to the console together with the victory points, according to the rule above, i.e Spartan wins(30, vs 13)

// 4) use the checkWinner function to determine the winner for both Data

// 5) ignore draws this time
//  Test Data 1 -- Alpha scores 43, 21 and 73. Spartan scores 63,55, and 47

// Test Data 2 -- Alpha scores 87,55 and 39. Spartan scores 21,33 and 27
//  Expo

// To calculate average of 3 values and them all and divide by 3

// Expo 2

// To check if a is atleast double number b, check for a >= 2 * B .... apply this to the teams average score

 
Q1
let calcAges = (first,second,third)=>{
  return(first + second + third)/3
}

console.log(calcAges(1,2,3))

// Q2
let alphaScore = calcAges(43,21,73)
console.log(alphaScore)


let spartanScore = calcAges(63,55,47)

console.log(spartanScore)

// Q3

// let alphaScore = 43 + 21 + 73
// let alphaScoreAvg = alphaScore/3

// console.log(alphaScore)
// console.log(alphaScoreAvg)



let checkWinner = (alphaScore,spartanScore) =>{
  if(alphaScore >= 2* spartanScore ){
    console.log(`aplhaScore wins🏆  (${alphaScore} vs ${spartanScore})  `);
  }else if(spartanScore >= 2 * alphaScore){
    console.log(`spartanScore wins🏆 (${spartanScore} vs ${alphaScore})  `);
  }else{
    console.log('no winner👫');
  }
}
// At dis point no winner
checkWinner(alphaScore,spartanscore
  
 // Spread operator & destructuring in Objects
const obj1 = {
  FIRSTNAME: 'Tola',
  LASTNAME: 'Lanre'
}

const obj2 = {
  AGE: 25
}

console.log(obj1.FIRSTNAME.toUpperCase());

console.log(obj2['AGE']);

const Person = { ...obj1, ...obj2 }

console.log(Person);


const personOne = {
  NAME: 'EGGY',
  AGE:40,
  address:{
    city: 'Surulere',
    STATE: 'Lagos'
  }
}

const {NAME,AGE} = personOne
console.log(NAME);
console.log(AGE);
 // functions in objects

let client_users = {
  First_Name: 'Tola',
  Last_Name:'Daniel',
  AGe : 2022,
  ageCalc: function(){
    return this.AGe - 1982
  },
  STATEMENT: function(){
    return `${this.First_Name} is ${this.ageCalc()} years old`
  },
  hasData:true,
  FRIENDS: ['Onome', 'EFE', 'DUPE', 'ERHUWVU']
}

console.log(client_users)
console.log(client_users['FRIENDS'])
console.log(client_users.ageCalc())
console.log(client_users.STATEMENT());

// write same statement without the this keyword(use other process) and also concatination
 let Customer ={
 English_name: 'Judith',
 native_name:'Asa',
 Age_: 2022,
 agecalc: function(){
   return this.Age_ - 1990
 },
 stateMent: function(){
   return `${this.English_name} is ${this.ageCalc()} years old`
 },
 hasData:true,
 FRIends: [ 'ada','nk','dafe','teebabe']
 }
 console.log(Customer);



let PEOPLE = [
  { name: 'Tola', age: 25, position: 'developer' },
  { name: 'Daniel', age: 35, position: 'Artist' },
  { name: 'Faith', age: 45, position: 'Content Writer' },
  { name: 'Michael', age: 50, position: 'Web-designer' },
]

// for (let i = 0; i < PEOPLE.length; i++) {
//   console.log(PEOPLE[i])
// }


// Foreach Method
// it doesnt return a new array

// let newPEOPLE = function(person){
//   console.log(person);
// }

// PEOPLE.forEach(newPEOPLE)




PEOPLE.forEach((person)=> {
  console.log(person);
} )


// Map Method
// it returns a new Array
// Doesnt change d size of the original
// Uses values from the original array in making new array


let new_people = PEOPLE.map(function(individual){
  return individual.age * 2
} )

console.log(new_people)


// Filter method
// it returns a new array

let youngBlood = PEOPLE.filter( (items)=> {
  return items.age >= 45
} )
console.log(youngBlood)


// Create an object for Tola and Daniel... With properties(full name, mass and height)

// 2) create a 'calcBMI' method on both object to calculate the BMI(same method on both objects). Store the BMI value to a property, and also return from the method.

// 3) then log to the console who has the higher BMI, together with the fullname and the respective BMI .... Example Tola BMI(30.1) is higher than Daniel BMI(29.9)
//  Test Data

// Tola weight 76 and height is 1.99

// Daniel weight 80 and height is 2.1

// Q1 & Q2

let Tola = {
  $fullName : 'Bill clinton',
  $mass :76,
  $height:1.99,
  calcBMI: function(){
    return this.$mass/ this.$height ** 2
  }
}

console.log(Tola);
console.log(Tola.calcBMI())

let Daniel = {
  $fullName: 'Barrak Obama',
  $mass: 80,
  $height: 2.1,
  calcBMI: function () {
    return this.$mass / this.$height ** 2
  },
}

console.log(Daniel);
console.log(Daniel.calcBMI());

// Q3
if(Tola.calcBMI() > Daniel.calcBMI()){
  console.log(`Tola's BMI ${Tola.calcBMI()} is higher than Daniel's BMI ${Daniel.calcBMI()}`);
}else{
  console.log(
    `Daniel's BMI ${Daniel.calcBMI()} is higher than Tola's BMI ${Tola.calcBMI()}`
  )
}


// math Object
// its a built in function
// Floor
let number =4.96666999
let $result =Math.floor(number)
console.log($result);

// Ceil
let $Number = 4.407777
let $Result = Math.ceil($Number)
console.log($Result)

// Round
let Number = 2.15555
let $Num = Math.round(Number)
console.log($Num);
// Pow
let reg = Math.pow(2,2)
console.log(reg);

let randonNumber = Math.ceil(Math.random() * 4)
console.log(randonNumber)





 
 





