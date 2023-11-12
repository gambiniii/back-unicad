class HomeController {
    async index(req, res) {
        res.status(200).json({ "recebido": true })
    }
}

export default new HomeController()