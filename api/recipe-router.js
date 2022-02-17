const express = require('express');
const Recipes = require('./recipe-model');
const { checkRecipeId } = require('./recipe-middleware')

const router = express.Router();

router.get('/', (req, res, next) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(next);
});

router.get('/:recipe_id', checkRecipeId, (req, res, next) => {
    Recipes.getRecipeById(req.params.recipe_id)
        .then(recipe => {
            res.status(200).json(recipe)
        })
        .catch(next)
})


module.exports = router;