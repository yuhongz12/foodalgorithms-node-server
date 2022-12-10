import express from 'express'
import cors from 'cors'
import MealDBController from './mealdb/mealdb-controller.js'
import UsersController from "./users/users-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = 'mongodb://localhost:27017/foodalgorithms'
//                           || process.env.DB_CONNECTION_STRING
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())
app.use(express.json())

MealDBController(app)
UsersController(app)
app.listen(4000)