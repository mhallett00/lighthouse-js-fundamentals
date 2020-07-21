const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!
  let chosenRecipe = '';
  //Helper function that accepts a bakery and ingredients (recipes.ingredients) list. Cross check them and returns true if a match.
  const ingredientCheck = function(bakery, ingredients){
    for (i = 0; i < ingredients.length; i++){
      for (j = 0; j< bakery.length; j++){
        if (ingredients[i] === bakery[j]){
          return true;
        }
      }
    }
  };
  //Call the ingredientCheck function for each recipe in the recipe list. If both Bakery A & B return true return that recipe name.
  for (recipe of recipes){
    if (ingredientCheck(bakeryA, recipe.ingredients) === true && ingredientCheck(bakeryB, recipe.ingredients) === true){
      return recipe.name;
    }
  }
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
