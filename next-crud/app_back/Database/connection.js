const Knex = require('knex')

const knexInstance = Knex({
  client: 'mysql2', // O cliente de banco de dados que você está usando (mysql2, pg, etc.)
  connection: {
    host: '127.0.0.1', // Endereço do servidor MySQL
    port: 3306, // Porta do MySQL
    user: 'root', // Usuário do banco de dados
    password: '1234', // Senha do banco de dados
    database: 'next-crud', // Nome do banco de dados
  },
  pool: { min: 0, max: 10 }, // (Opcional) Configuração de pool de conexões
  migrations: {
    tableName: 'destinos', // (Opcional) Nome da tabela onde as migrações serão armazenadas
  },
});

module.exports = knexInstance;