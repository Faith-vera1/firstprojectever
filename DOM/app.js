// document.body.style.backgroundColor = 'blue',
// // document.body.style.color = 'white'
// // document.getElementById('btn').style.color ='red',
// // document.getElementById('btn').style.backgroundColor = 'black'

// // Assign 2a variable if ders a multiple tins to change on an element, 2 avoid writing document. avoid DRY

// // const element = document.getElementById('btn')

// // element.style.color = 'red',

// // element.style.backgroundColor = 'blue'


// // getElementById
// // Select the element u want
// // Decide d effect u wnt 2 apply 2d selection
// // getElementById('element')---make sure d id matches
// // ---Also we can assign 2a variable or go straight
// // lets do basic tins so u understand cox we gonna into complex tins which wud require ur knowledge of d basic tins u learnt

// // lets select h1 tag

// const h1 = document.getElementById('title')
// h1.style.color = 'red'

// // lets select button

// // document.getElementById('btn').style.backgroundColor = 'yellow'

// const btn = document.getElementById('btn')

// btn.style.backgroundColor = 'yellow'

// // getElementByTagName('tagname')
// // -node-list = array-like object
// // index,length properties

// const headings = document.getElementsByTagName('h2')
// // it returns a node list
// console.log(headings);

// headings[0].style.color = 'red'

// console.log(headings.length);

// const items = document.getElementsByTagName('li')

// // items.forEach((item)=>{
// //     console.log(item);
// // })

// const betterItems = [...items]

// betterItems.forEach((item)=>{
// console.log(item);
// })

// // Exercise 3
// const companies = [
//   { name: 'company One', category: 'Finance', start: 1981, end: 2003 },
//   { name: 'company Two', category: 'Retail', start: 1992, end: 2008 },
//   { name: 'company Three', category: 'Auto', start: 1999, end: 2007 },
//   { name: 'company Four', category: 'Retail', start: 1989, end: 2010 },
//   { name: 'company Five', category: 'Technology', start: 2009, end: 2014 },
//   { name: 'company Six', category: 'Finance', start: 1987, end: 2010 },
//   { name: 'company Seven', category: 'Auto', start: 1986, end: 1996 },
//   { name: 'company Eight', category: 'technology', start: 1981, end: 1989 },
// ]


// // 1)log to the console the name of the companies only 
// // 2)log to the console companies that lasted 10 years or more

// // const age = [30,15,10,5,40,80,2,20,21,25]

// // 3)log to your console again people with age greater or equal to 21

// // getElementByClassName

// // Select the element u want
// // Decide d effect to apply
// // getElementByClassName('element')

// // const listItems = document.getElementsByClassName('special')

// // console.log(listItems);

// // listItems[1].style.color = 'blue'

// // querySelector('any css')
// // Select the element u want
// // Decide d effect to apply
// // querySelector('any css') - selects single element
// // querySelectorAll('any css') - selects all element

// // querySelector('any css')
// // const solution = document.querySelector('.special')

// // solution.style.color = 'red'



// // querySelectorAll('any css')

// // I selects all,forEach wud work here

// // const lists = document.querySelectorAll('.special')

// // lists.forEach((list)=>{
// //     console.log(list);
// //     list.style.color = 'green'

// // })

// // Changing attribute
// const link = document.querySelector('a')
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://facebook.com')

// // innerText
// const paragraph = document.querySelector('p')
// console.log(paragraph.innerText);

// paragraph.innerText = 'facebook'

// // classList

// // getElementByClassName

// // Select the element u want
// // Decide d effect to apply
// // getElementByClassName('element')

// // const listItems = document.getElementsByClassName('special')

// // console.log(listItems);

// // listItems[1].style.color = 'blue'

// // querySelector('any css')
// // Select the element u want
// // Decide d effect to apply
// // querySelector('any css') - selects single element
// // querySelectorAll('any css') - selects all element

// // querySelector('any css')
// // const solution = document.querySelector('.special')

// // solution.style.color = 'red'



// // querySelectorAll('any css')

// // I selects all,forEach wud work here

// // const lists = document.querySelectorAll('.special')

// // lists.forEach((list)=>{
// //     console.log(list);
// //     list.style.color = 'green'

// // })

// // Changing attribute
// const link = document.querySelector('a')
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://facebook.com')

// // innerText
// const paragraph = document.querySelector('p')
// console.log(paragraph.innerText);

// paragraph.innerText = 'facebook'

// // classList
// // const number = document.getElementById('first')
// // const number2 = document.getElementById('second')
// // const number3 = document.getElementById('third')

// // classList
// // number3.classList.add('colors')

// // lets remove the class
// // number3.classList.remove('colors')

// // lets cheq if an element has a class using contains
// // let result = number3.classList.contains('colors')
// // console.log(result)

// // if (result) {
// //   console.log('hello world')
// // } else {
// //   console.log('doesnt have the class of colors')
// // }

// // Event
// // Select element
// // addEventListener()
// // what event, what to do

// const btn = document.querySelector('.btnss')
// const header = document.querySelector('h2')

// function changeColor() {
//   let sth = header.classList.contains('red')
//   if (sth) {
//     header.classList.remove('red')
//   } else {
//     header.classList.add('red')
//   }
// }

// btn.addEventListener('click', changeColor)

// const age = [30,15,10,5,40,80,2,20,21,25]

// let newAge = age.filter((young)=>{
//     return young >= 21
// })

// console.log(newAge)

// // const newName = document.querySelector('h2')

// // console.log(newName.innerText);

// // newName.innerText += 'project'

let header = document.querySelector('.term')
let dec = document.querySelector('.Decre');

function change (){
    header.innerText--

}

dec.addEventListener('click', change)

// let newTask = document.querySelector('.term')
let newBtn = document.querySelector('.res');

function changes (){
  // header.innerText = 0
  header.textContent = 0

}
newBtn.addEventListener('click', changes)

// let increase = document.querySelector('.term')
let newOne = document.querySelector('.incr');

function changer (){
   header.innerText++

}
newOne.addEventListener('click', changer)


// // const newName = document.querySelector('h2')

// // console.log(newName.innerText);

// // newName.innerText += 'project'

// // let header = document.querySelector('h1')
// // let btn = document.querySelector('.Dec');

// // function change (){
// //     header.innerText--

// // }

// // btn.addEventListener('click', change)

// // let number = document.querySelector('#number');
// // let btn = document.querySelector('#generateBtn')

// // function randomNumberGenerator (){
// //     let randomNumber = Math.ceil(Math.random()*20)
// //     // console.log(randomNumber);
// //     number.innerText  = randomNumber
// // }

// // btn.addEventListener('click', randomNumberGenerator)
