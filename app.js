import express from 'express'
import cors from 'cors'

import './src/database'

import homeRoutes from './src/router/homeRoutes.js'
import deliveryRoutes from './src/router/deliveryRoutes.js'

const whiteList = [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
]

const corsOptions = {
    origin: function (origin, callback) {
        if (whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

class App {
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(cors(corsOptions))
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    routes() {
        this.app.use('/', homeRoutes)
        this.app.use('/entregas/', deliveryRoutes)
    }
}

export default new App().app