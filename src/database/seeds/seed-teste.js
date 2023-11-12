/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('entrega', [
            {
                nome_cliente: "Lucas",
                data_entrega: new Date(),
                ponto_partida: "-23.618237387124875, -46.566940487200704",
                ponto_destino: "-23.618807533865795, -46.57304519485975",
                created_at: new Date(),
                updated_at: new Date()        
            },
            {
                nome_cliente: "Jorge",
                data_entrega: new Date(),
                ponto_partida: "-23.618237387124875, -46.566940487200704",
                ponto_destino: "-23.61644828986618, -46.566554249106275",
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                nome_cliente: "André",
                data_entrega: new Date(),
                ponto_partida: "-23.625936442486076, -46.58035858728251",
                ponto_destino: "-23.618807533865795, -46.57304519485975",
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                nome_cliente: "Gustavo",
                data_entrega: new Date(),
                ponto_partida: "-23.618007242521216, -46.578886604151016",
                ponto_destino: "-23.618807533865795, -46.57304519485975",
                created_at: new Date(),
                updated_at: new Date()
            }], {});
    },

    async down() { }
}