const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      nome: 'John Doe',
      email: 'jhon@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Morgana Simpsons',
      email: 'Margana@gmail.com',
      password_hash: await bcryptjs.hash('morgana22', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down() { },
};
