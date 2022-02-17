var addRecipe = document.querySelector('.add-recipe-button');
var inputSide = document.querySelector('#Side');
var inputMainDish = document.querySelector('#Main-Dish');
var inputDessert = document.querySelector('#Dessert');
var inputEntireMeal = document.querySelector('#Entire-Meal');
var letsCook = document.querySelector('.lets-cook-button');

var buildMeal = {};

inputSide.addEventListener('click', logSide);
inputMainDish.addEventListener('click', logMainDish);
inputDessert.addEventListener('click', logDessert);
inputEntireMeal.addEventListener('click', logEntireMeal);
letsCook.addEventListener('click', printMeal)

function logSide(){
  buildMeal.side = sides[randomIndex(sides)];
    console.log(buildMeal);
}
function logMainDish(){
  buildMeal.main = mains[randomIndex(mains)]
  console.log(buildMeal);
}
function logDessert(){
 buildMeal.dessert = desserts[randomIndex(desserts)];
  console.log(buildMeal);
}
function logEntireMeal(){
}

function printMeal (){
}




function randomIndex(array){
return Math.floor(Math.random() * array.length);
}
