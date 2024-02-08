// GLobal vars 
//These will allow user to see info about ramen displayed inside and fire clickevents

let ramenDisplay =[0] //like an array starts back at 1 when new is selected
const menu = document.querySelector('#ramen-menu')
const image = document.querySelector('.detail-image')
const name = document.querySelector('.name')
const resturant = document.querySelector('.restaurant')
const rating = document.querySelector('#rating')
const comment = document.querySelector('#comment')


// fetching all data for raman recources
// using forEach since all date is in an array structure in html
function allRamen(){
  fetch('http://localhost:3000/ramens')
  .then(res =>res.json())
  .then(data => data.forEach(ramen =>ramenDisplay(ramen))) 
  console.log(allRamen)
}
 
function ramenDisplay(ramen){ // we are manipulating the dom to change/add the attributes .src .id 
  let img = document.createElement('img') //we already grabbed all the data above 
  img.src = ramen.img
  img.id = 'id${ramen.id}' 

ramenMenu = document.appendChild(ramen)

const ramenMenu = document.querrySelector('#ramen-menu') // images will go under the div of ramen menu 
}

// were going to add an submit listener
document.querySelector('#new-ramen').addSubmittListerner('submit',handleSubmit)

function submitHandler(e){ // passing an event object through 
e.preventDefault() // so it doesnt dissapear when you reload
let newRamen = {
  name: e.target.name.value, // assign new values to the new ramen :)
  imageurl: e.target.imageurl.value,
  restaurant: e.target.restaurant.value,
  rating: e.target.rating.value,
  comment: e.target.comment.value

}
allRamen(newRamen)
}