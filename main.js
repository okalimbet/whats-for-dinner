var letsCookButton = document.querySelector('#lets-cook-button')
var clearRecipeButton = document.querySelector('#clear-button')
var addRecipeButton = document.querySelector('#add-recipe-button')
var showRandomDish = document.querySelector('.random-dish-name')
var cookingPotView = document.querySelector('#cooking-pot')
var recipeSectionView = document.querySelector('#recipe-section')
var addARecipeBar = document.querySelector('#add-recipe-bar')
var addNewButton = document.querySelector('#add-new')
var recipeUserType = document.querySelector('#recipe-type')
var recipeUserName = document.querySelector('#recipe-name')
var recipeTypeList = document.querySelector("#recipe-type-select")

var recipeTypeOptions = [
  "--Choose your type--",
  "Side",
  "Main Dish",
  "Dessert"
]

letsCookButton.addEventListener('click', getRandomDish)
clearRecipeButton.addEventListener('click', clearRecipe)
addRecipeButton.addEventListener('click', showAddRecipeBar)
addNewButton.addEventListener('click', recordUserNewRecipe)

function fillRecipeTypeList() {
  for (var i = 0; i < recipeTypeOptions.length; i++) {
    var recipeTypeOption = new Option (recipeTypeOptions[i])
    recipeTypeList.options.add(recipeTypeOption)
  }
}

fillRecipeTypeList()

function getRandomDishValue(dishType) {
  var randomDishValue = Math.floor(Math.random() * dishType.length)
  return dishType[randomDishValue]
}

function getRandomDish() {
  var sideDishChecked = document.querySelector('#sideDish').checked
  var mainDishChecked = document.querySelector('#mainDish').checked
  var dessertDishChecked = document.querySelector('#dessert').checked
  var entireDishChecked = document.querySelector('#entireMeal').checked

  cookingPotView.style.display = "none"
  recipeSectionView.style.display = "flex"
  
  if (sideDishChecked) {
    showRandomDish.innerText = `${getRandomDishValue(sides)}!`
  }
  else if (mainDishChecked) {
    showRandomDish.innerText = `${getRandomDishValue(mains)}!`
  }
  else if (dessertDishChecked) {
    showRandomDish.innerText = `${getRandomDishValue(desserts)}!`
  }
  else if (entireDishChecked) {
    showRandomDish.innerText = `${getRandomDishValue(mains)} with a side of ${getRandomDishValue(sides)} and ${getRandomDishValue(desserts)} for dessert!`
  }
  else {
    alert(`Please select your dish!`)
    cookingPotView.style.display = "flex"
    recipeSectionView.style.display = "none"
  }
}

function clearRecipe() {
  document.querySelector('#sideDish').checked = false
  document.querySelector('#mainDish').checked = false
  document.querySelector('#dessert').checked = false
  document.querySelector('#entireMeal').checked = false
  cookingPotView.style.display = "flex"
  recipeSectionView.style.display = "none"
  showRandomDish.innerText = ` `
}

function showAddRecipeBar() {
  addARecipeBar.style.display = addARecipeBar.style.display  ===  "flex" ? "none" : "flex"
  if (addARecipeBar.style.display === "none") {
    recipeUserName.value = " "
  }
}

function recordUserNewRecipe() {
  var recipeTypeSelected = recipeTypeList.options[recipeTypeList.selectedIndex].text;

  if (recipeUserName.value == "" || recipeTypeSelected === "--Choose your type--") {
    alert("Please choose a recipe type and enter a dish name")
  }
  else if (recipeTypeSelected === "Main Dish") {
    mains.push(recipeUserName.value)
  }
  else if (recipeTypeSelected === "Side") {
    sides.push(recipeUserName.value)
  }
  else if (recipeTypeSelected === "Dessert") {
    desserts.push(recipeUserName.value)
  }
  recipeUserName.value = ""
}
