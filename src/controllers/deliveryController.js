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
            console.log(error)
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            })
        }
    }

    async store(req, res) {
        try {
            await Delivery.create(req.body)

            res.status(200).json({
                "description": "Pedido cadastrado com sucesso!",
                "status": "success"
            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                errors: e.errors.map(err => err.message)
            })
        }
    }
}

export default new DeliveryController()