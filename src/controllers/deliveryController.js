import Delivery from '../models/Delivery'

class DeliveryController {
    async index(req, res) {
        try {
            const deliveries = await Delivery.findAll({
                order: [['id', 'DESC']],
            });

            if (!deliveries || deliveries.length === 0) {
                return res.status(200).json([]);
            }

            return res.status(200).json(deliveries);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}

export default new DeliveryController()