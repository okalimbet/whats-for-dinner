var letsCookButton = document.querySelector('#lets-cook-button')
var showRandomDish = document.querySelector('.random-dish-name')
var cookingPotView = document.querySelector('#cooking-pot')
var recipeSectionView = document.querySelector('#recipe-section')
var clearRecipeButton = document.querySelector('#clear-button')
var addRecipeButton = document.querySelector('#add-recipe-button')
var addARecipeBar = document.querySelector('#add-recipe-bar')
var addNewButton = document.querySelector('#add-new')
var recipeUserType = document.querySelector('#recipe-type')
var recipeUserName = document.querySelector('#recipe-name')

letsCookButton.addEventListener('click', getRandomDish)
clearRecipeButton.addEventListener('click', clearRecipe)
addRecipeButton.addEventListener('click', showAddRecipeBar)
addNewButton.addEventListener('click', recordUserNewRecipe)

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
  cookingPotView.style.display = "flex"
  recipeSectionView.style.display = "none"
  showRandomDish.innerText = ` `
}

function showAddRecipeBar() {
  addARecipeBar.style.display = addARecipeBar.style.display  ===  "flex" ? "none" : "flex"
  if (addARecipeBar.style.display === "none") {
    recipeUserName.value = " "
    recipeUserType.value = " "
  }

}

function recordUserNewRecipe() {
if (recipeUserType.value.toLowerCase() === "main") {
    mains.push(recipeUserName.value)
}
else if (recipeUserType.value.toLowerCase() === "side") {
  sides.push(recipeUserName.value)
}
else if (recipeUserType.value.toLowerCase() === "dessert") {
  desserts.push(recipeUserName.value)
}
else if (recipeUserType.value == "" || recipeUserName.value==""){
  alert("Please enter recipe type from above and a dish name")
}
recipeUserType.value = ""
recipeUserName.value = ""
}
