
exports.seed = async function(knex) {
  await knex('steps').truncate();
  return knex('steps').insert([
    {step_number: '1', step_instructions: 'boil pasta' },
    
    
  ]);
};