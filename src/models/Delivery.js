import Sequelize, { Model } from "sequelize";

export default class Delivery extends Model {
    static init(sequelize) {
        super.init({

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
                defaultValue: '',
                allowNull: false
            },

            ponto_partida: {
                type: Sequelize.STRING,
                defaultValue: '',
                allowNull: false,
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'O ponto de partida precisa ter entre 3 e 255 caracteres'
                    }
                }
            },

            ponto_destino: {
                type: Sequelize.STRING,
                defaultValue: '',
                allowNull: false,
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'O ponto de partida precisa ter entre 3 e 255 caracteres'
                    }
                }
            }

        }, {
            sequelize,
            tableName: 'entrega'
        })

        return this
    }
}