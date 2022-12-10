import express from 'express'
import MealDBController from './mealdb/mealdb-controller.js'
import UsersController from './users/users-controller.js'
import cors from 'cors'
import mongoose from 'mongoose'
import session from 'express-session'
const app = express()


const options = {
    family: 4 // Use IPv4, skip trying IPv6
}
const CONNECTION_STRING = 'mongodb://localhost:27017/foodalgorithms';
mongoose.connect(CONNECTION_STRING, options);



app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
app.use(session({
    secret: 'should be environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))

app.use(express.json());

MealDBController(app)
UsersController(app);



app.listen(4000)