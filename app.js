import express from 'express'
import MealDBController from './mealdb/mealdb-controller'
const app = express()

MealDBController(app)

app.listen(4000)