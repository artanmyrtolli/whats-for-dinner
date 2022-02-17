var addRecipe = document.querySelector('.add-recipe-button');
var inputSide = document.querySelector('#Side');
var inputMainDish = document.querySelector('#Main-Dish');
var inputDessert = document.querySelector('#Dessert');
var inputEntireMeal = document.querySelector('#Entire-Meal');
var letsCook = document.querySelector('.lets-cook-button');
var cookpot = document.querySelector('.cook-pot')
var shouldMake = document.querySelector('.should-make')
var mealOutput = document.querySelector('.list-meal')
var inputs = document.getElementsByName("meal-type");
var buildMeal = {};

inputSide.addEventListener('click', logSide);
inputMainDish.addEventListener('click', logMain);
inputDessert.addEventListener('click', logDessert);
inputEntireMeal.addEventListener('click', logMeal);
letsCook.addEventListener('click', printMeal)


function logSide(){
  showCookpot();
  buildMeal.side = sides[randomIndex(sides)];
  mealOutput.innerText = buildMeal.side;
}
function logMain(){
  showCookpot();
  buildMeal.main = mains[randomIndex(mains)];;
  mealOutput.innerText = buildMeal.main;
}
function logDessert(){
  showCookpot();
 buildMeal.dessert = desserts[randomIndex(desserts)];
 mealOutput.innerText = buildMeal.dessert;
}
function logMeal(){
  logSide();
  logMain();
  logDessert();
  mealOutput.innerText = `${buildMeal.main} with a side of ${buildMeal.side} and ${buildMeal.dessert} for dessert!`
}

function printMeal (){
    for(var i = 0 ;i < inputs.length; i++){
      inputs[i].checked = false;
      hideCookpot();
    }
}

function hideCookpot() {
  cookpot.classList.add('hidden');
  shouldMake.classList.remove('hidden');
  mealOutput.classList.remove('hidden');
}

function showCookpot(){
  cookpot.classList.remove('hidden');
  shouldMake.classList.add('hidden');
  mealOutput.classList.add('hidden');
}



function randomIndex(array){
return Math.floor(Math.random() * array.length);
}
