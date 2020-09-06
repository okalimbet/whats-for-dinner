var sides = ["Miso Glazed Carrots", "Coleslaw", "Garden Salad", "Crispy Potatoes", "Sweet Potato Tots", "Coconut Rice", "Caeser Salad", "Shrimp Summer Rolls", "Garlic Butter Mushrooms", "Hush Puppies"]
var mains = ["Spaghetti and Meatballs", "Pineapple Chicken", "Shakshuka", "Thai Yellow Curry", "Bibimbap", "Chicken Parmesean", "Butternut Squash Soup", "BBQ Chicken Burgers", "Ramen", "Empanadas", "Chicken Fried Rice", "Sheet Pan Fajitas", "Margarita Pizza"]
var desserts = ["Apple pie", "Lemon Meringue Pie", "Black Forest Cake", "Banana Bread", "Peach Cobbler", "Cheesecake", "Funfetti Cake", "Baklava", "Flan", "Macarons", "Chocolate Cupcakes", "Pavlova", "Pumpkin Pie", "Key Lime Pie", "Tart Tatin", "Croissants", "Eclair"]

var letsCookButton = document.querySelector('#lets-cook-button')
var showRandomDish = document.querySelector('.random-dish-name')
var cookingPotView = document.querySelector('#cooking-pot')
var recipeSectionView = document.querySelector('#recipe-section')

letsCookButton.addEventListener('click', getRandomDish)


function getRandomDishValue(dishType) {
  var randomDishValue = Math.floor(Math.random() * dishType.length)
  return dishType[randomDishValue]
}

function getRandomDish() {
  var sideDishChecked = document.querySelector('#sideDish').checked
  var mainDishChecked = document.querySelector('#mainDish').checked
  var dessertDishChecked = document.querySelector('#dessert').checked

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
  else {
    showRandomDish.innerText = `Nothing was selected`
  }
}
