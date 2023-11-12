import Sequelize from 'sequelize'
import databaseConfig from '../config/database'

import Delivery from '../models/Delivery'

const models = [Delivery]

const connection = new Sequelize(databaseConfig)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))