import express from 'express'
import cors from 'cors'
import MealDBController from './mealdb/mealdb-controller.js'
import UsersController from "./users/users-controller.js";
const app = express()
app.use(cors())
app.use(express.json())

MealDBController(app)
UsersController(app)
app.listen(4000)