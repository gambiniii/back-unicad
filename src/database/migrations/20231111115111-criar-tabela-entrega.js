'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('entrega', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },


      nome_cliente: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
            msg: 'O nome do cliente precisa ter entre 3 e 255 caracteres'
          }
        }
      },

      data_entrega: {
        type: Sequelize.DATE,
        allowNull: false
      },

      ponto_partida: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      ponto_destino: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
      }

    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('entrega');
  }
};
