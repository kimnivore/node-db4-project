const recipes = [
  { recipe_name: 'rice' },
  { recipe_name: 'pasta' },
  { recipe_name: 'bread' },
]

const ingredients = [
  { ingredient_name: 'flour', ingredient_unit: 'lbs' },
  { ingredient_name: 'egg', ingredient_unit: 'grams' },
  { ingredient_name: 'rice', ingredient_unit: 'lbs' },
  { ingredient_name: 'water', ingredient_unit: 'oz' },
  { ingredient_name: 'sugar', ingredient_unit: 'grams' },
  { ingredient_name: 'salt', ingredient_unit: 'grams' },
  { ingredient_name: 'yeast', ingredient_unit: 'grams' },
]

const steps = [
  //rice
  { step_instructions: 'clean rice', step_number: 1, recipe_id: 1 },
  { step_instructions: 'boil until cooked', step_number: 2, recipe_id: 1 },
  { step_instructions: 'serve with a vegetable and a meat', step_number: 3, recipe_id: 1 },
  //pasta
  { step_instructions: 'boil water', step_number: 1, recipe_id: 2 },
  { step_instructions: 'cook pasta for 8 minutes', step_number: 2, recipe_id: 2 },
  { step_instructions: 'serve with sauce and meatballs', step_number: 3, recipe_id: 2 },
  //bread
  { step_instructions: 'measure and mix ingredients', step_number: 1, recipe_id: 3 },
  { step_instructions: 'bake in the oven', step_number: 2, recipe_id: 3 },
  { step_instructions: 'serve with a lot of butter', step_number: 3, recipe_id: 3 },
]

const step_ingredients = [
  //rice
  { step_id: 1, ingredient_id: 3, quantity: 1 },
  //pasta
  { step_id: 1, ingredient_id: 4, quantity: 2 },
  { step_id: 2, ingredient_id: 1, quantity: 2 },
  { step_id: 2, ingredient_id: 2, quantity: 3 },
  { step_id: 2, ingredient_id: 4, quantity: 1 },
  { step_id: 2, ingredient_id: 5, quantity: 5 },
  { step_id: 2, ingredient_id: 6, quantity: 1 },
  //bread
  { step_id: 1, ingredient_id: 1, quantity: 3 },
  { step_id: 1, ingredient_id: 2, quantity: 1 },
  { step_id: 1, ingredient_id: 4, quantity: 2 },
  { step_id: 1, ingredient_id: 5, quantity: 1 },
  { step_id: 1, ingredient_id: 6, quantity: 4 },
  { step_id: 1, ingredient_id: 7, quantity: 1 },
]

exports.seed = async function(knex) {
  await knex('recipes').insert(recipes), 
  await knex('ingredients').insert(ingredients), 
  await knex('steps').insert(steps), 
  await knex('step_ingredients').insert(step_ingredients)  
}