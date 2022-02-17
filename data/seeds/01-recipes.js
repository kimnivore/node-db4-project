exports.seed = async function(knex) {
  await knex('recipes').truncate();
  return knex('recipes').insert([
    {recipe_name: 'pasta', steps: 'boil pasta' },
    {recipe_name: 'pasta', steps: 'make sauce' },
    {recipe_name: 'pasta', steps: 'combine pasta' },
    
  ]);
};