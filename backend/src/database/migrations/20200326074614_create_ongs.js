
exports.up = function(knex) { // Executado na criação da tabela.
  return knex.schema.createTable('ongs', function (table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) { // O que deve ser executado quando der problema.
  return knex.schema.dropTable('ongs');
};
