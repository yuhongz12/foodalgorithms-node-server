// import {getMovies} from "../mealdb/mealdb-controller.js";
// import users from "../users/users.js";
import * as likesDao from "./likes-dao.js";

let likes = [
    {_id: '123', user: '111', food: '123'},
    {_id: '234', user: '111', food: '234'},
    {_id: '345', user: '222', food: '345'},
    {_id: '456', user: '333', food: '345'},
]

const LikesController = (app) => {
    const populate = (
        {
            rawResults, fieldToPopulate,
            sourceData, sourceField
        }) => {
        const populatedResults = rawResults.map((raw) => {
            const source = sourceData.find(source => source[sourceField] === raw[fieldToPopulate])
            return ({
                ...raw,
                [fieldToPopulate]: source
            })
        })
        return populatedResults
    }
    const userLikesFood = async (req, res) => {
        const uid = req.params.uid
        const mid = req.params.mid

        const newLike = await likesDao.userLikesFood(uid, mid)
        res.json(newLike)
    }
    const userUnlikesFood = async (req, res) => {
        const uid = req.params.uid
        const mid = req.params.mid
        const status = await likesDao.userUnlikesFood(uid, mid)

        // likes = likes.filter((l) => l.user !== uid && l.movie !== mid)
        res.send(status)
    }
    const findAllLikes = async (req, res) => {
        const likes = await likesDao.findAllLikes()
        res.json(likes)
    }
    const findFoodLikedByUser = async (req, res) => {
        const uid = req.params.uid
        const food = await likesDao.findFoodLikedByUser(uid)
        res.json(food)
        // const movies = likes.filter((like) => like.user === uid)
        // const populatedMovies = populate({
        //     rawResults: movies,
        //     fieldToPopulate: 'movie',
        //     sourceData: getMovies(),
        //     sourceField: '_id'
        // })
        // res.json(populatedMovies)
    }
    const findUsersWhoLikedFood = async (req, res) => {
        const mid = req.params.mid
        const users = await likesDao.findUsersThatLikeFood(mid)
        res.json(users)

        // const usersWhoLikeMovie = likes.filter((like) => like.movie === mid)
        // const populateUsers = populate({
        //     rawResults: usersWhoLikeMovie,
        //     fieldToPopulate: 'user',
        //     sourceData: users,
        //     sourceField: '_id'
        // })
        // res.json(populateUsers)
    }

    app.post('/users/:uid/likes/:mid', userLikesFood)
    app.delete('/users/:uid/unlikes/:mid', userUnlikesFood)
    app.get('/likes', findAllLikes)
    app.get('/users/:uid/likes', findFoodLikedByUser)
    app.get('/movies/:mid/likes', findUsersWhoLikedFood)
    // app.put(updateLike)
}

export default LikesController;