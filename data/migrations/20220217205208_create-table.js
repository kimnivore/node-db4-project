
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.string('recipe_name', 128).notNullable().unique();
        // tbl.timestamp('created_at').defaultTo(knex.fn.now());
        // tbl.string('steps', 128).notNullable();  
    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.string('ingredient_name', 128).notNullable().unique();
        tbl.string('ingredient_unit', 50)
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id');
        tbl.integer('step_number').notNullable();
        tbl.string('step_instructions', 128).notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        // tbl.integer('ingredients').notNullable();
        // tbl.integer('ingredient_id')
        //     .unsigned()
        //     .notNullable()
        //     .references('ingredients_id')
        //     .inTable('ingredients')
        //     .onDelete('CASCADE')
        //     .onUpdate('CASCADE')
        // tbl.decimal('quantity').notNullable();
    })
    .createTable('step_ingredients', tbl => {
        tbl.increments('step_ingredient_id')
        tbl.float('quantity').notNullable()
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        // tbl.primary(['recipe_id', 'step_id'])
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
