function Ingredient(name, amount) {
    this.name = name
    this.amount = amount
}

Ingredient.prototype.scale = function (factor) {
    this.amount = factor * this.amount
}

function Recipe(name, ingredients, servings) {
    this.name = name
    this.ingredients = ingredients
    this.servings = servings
}

Recipe.prototype.toString = function () {
    return this.ingredients.reduce((acc, cur) => {
        return acc + `- ${cur.name} (${cur.amount})\n`
    }, `${this.name} (${this.servings} servings)\n\n`)
}

Recipe.prototype.setServings = function (servings) {
    this.ingredients.forEach(ingredient => ingredient.scale(servings / this.servings))
    this.servings = servings
}

class HotRecipe extends Recipe {
    constructor(name, ingredients, servings, heatLevel) {
        super(name, ingredients, servings)
        this.heatLevel = heatLevel
    }

    toString() {
        let recipeStr = super.toString()
        if (this.heatLevel > 5) {
            recipeStr += '\n' + `WARNING: This is a heat level ${this.heatLevel} recipe!`
        }
        return recipeStr
    }
}

const tomato = new Ingredient('tomato', 400)
const onion = new Ingredient('onion', 1)
const garlic = new Ingredient('garlic', 3)
const someChili = new Ingredient('chili', 1)
const lotsChili = new Ingredient('chili', 10)

const mildSalsa = new HotRecipe('Mild Salsa', [tomato, onion, garlic, someChili], 6, 3)
mildSalsa.setServings(100)
const hotSalsa = new HotRecipe('Hot Salsa', [tomato, onion, garlic, lotsChili], 6, 8)
hotSalsa.setServings(100)

console.log(mildSalsa.toString())
console.log(hotSalsa.toString())