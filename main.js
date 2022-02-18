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
var clearButton = document.querySelector('.clear-button')
var buildMeal = {};

inputSide.addEventListener('click', logSide);
inputMainDish.addEventListener('click', logMain);
inputDessert.addEventListener('click', logDessert);
inputEntireMeal.addEventListener('click', logMeal);
letsCook.addEventListener('click', printMeal)
clearButton.addEventListener('click', showCookpot)


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
    resetLetsCookButton()
   var inputCounter = 0;
    for(var i = 0; i < inputs.length; i++){
        if (inputs[i].checked === false)
        inputCounter++;
    }
       if (inputCounter === 4) {
          letsCook.innerText = 'Please choose one!'
          letsCook.style.backgroundColor = 'red';
          return;
      }
      // input[name="meal-type"]:checked
      hideCookpot();
}

function hideCookpot() {
  cookpot.classList.add('hidden');
  shouldMake.classList.remove('hidden');
  mealOutput.classList.remove('hidden');
  clearButton.classList.remove('hidden');
}

function showCookpot(){
  cookpot.classList.remove('hidden');
  shouldMake.classList.add('hidden');
  mealOutput.classList.add('hidden');
  clearButton.classList.add('hidden');
}

function resetLetsCookButton() {
  letsCook.innerText = `Let's cook!`
  letsCook.style.backgroundColor = '#0fb9b1';
}


function randomIndex(array){
return Math.floor(Math.random() * array.length);
}
