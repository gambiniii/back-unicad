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
                    isCoordinate(value) {
                        const regex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|(\d{1,2}))(\.\d+)?)$/;

                        if (!regex.test(value)) {
                            throw new Error('O ponto de destino deve estar no formato: "+-00.00, +-00.00"');
                        }
                    }
                }
            },

            ponto_destino: {
                type: Sequelize.STRING,
                defaultValue: '',
                allowNull: false,
                validate: {
                    isCoordinate(value) {
                        const regex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|(\d{1,2}))(\.\d+)?)$/

                        if (!regex.test(value)) {
                            throw new Error('O ponto de destino deve estar no formato: "+-00.00, +-00.00"')
                        }
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