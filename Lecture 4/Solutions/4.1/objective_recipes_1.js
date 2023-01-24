function Ingredient(name, amount) {
    this.name = name
    this.amount = amount
}

function Recipe(name, ingredients, servings) {
    this.name = name
    this.ingredients = ingredients
    this.servings = servings
    this.toString = function () {
        return this.ingredients.reduce((acc, cur) => {
            return acc + `- ${cur.name} (${cur.amount})\n`
        }, `${this.name} (${this.servings} servings)\n\n`)
    }
}

const flour = new Ingredient('flour', 300)
const water = new Ingredient('water', 150)
const oil = new Ingredient('Oil', 30)
const salt = new Ingredient('Salt', 0)

const tortillas = new Recipe('tortillas', [flour, water, oil, salt], 12)
console.log(tortillas.toString())