import express from 'express'
import MealDBController from './mealdb/mealdb-controller.js'
import UsersController from './users/users-controller.js'
import cors from 'cors'
import mongoose from 'mongoose'
import session from 'express-session'
import BlogsController from './blogs/blog-controller.js'
import LikesController from "./likes/likes-controller.js";
import ReviewsController from "./reviews/reviews-controller.js";
import SessionController from "./session-controller.js";
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

MealDBController(app);
BlogsController(app);
UsersController(app);
LikesController(app)
ReviewsController(app)
SessionController(app)

app.listen(4000)