'use strict';
const bcryptjs = require('bcryptjs');
const { password } = require('../../config/database');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
        'users',
        [
          {
           nome: 'John Doe',
           email: "teste1@gmail.com",
           password_hash: await bcryptjs.hash('123456', 8),
           created_at: new Date(),
           updated_at: new Date(),
          },
          {
            nome: 'John 2',
            email: "teste2@gmail.com",
            password_hash: await bcryptjs.hash('123456', 8),
            created_at: new Date(),
            updated_at: new Date(),
           },
           {
            nome: 'John 3',
            email: "teste3@gmail.com",
            password_hash: await bcryptjs.hash('123456', 8),
            created_at: new Date(),
            updated_at: new Date(),
           },
        ], {});

  },

  async down (queryInterface, Sequelize) {

  }
};
