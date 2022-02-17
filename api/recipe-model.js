const db = require('../data/db-config');

function getRecipes() {
    return db('recipes');
}

async function getRecipeById(recipe_id) {
    const result = await db('recipes as r')
        .where('recipe_id', recipe_id)
    return result;
}

module.exports = {
    getRecipes,
    getRecipeById
}