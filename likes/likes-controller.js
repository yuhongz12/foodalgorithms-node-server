import * as likesDao from "./likes-dao.js";
import {userLikesFood} from "./likes-dao.js";


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
    const userLikesMovie = async (req, res) => {
        const uid = req.session['currentUser']._id
        const mid = req.params.mid

        const newLike = await likesDao.userLikesFood(uid, mid)
        res.json(newLike)
    }
    const findAllLikes = async (req, res) => {
        const likes = await likesDao.findAllLikes()
        res.json(likes)
    }
    const findFoodLikedByUser = async (req, res) => {
        const uid = req.params.uid
        const food = await likesDao.findFoodLikedByUser(uid)
        res.json(food)
    }
    const findUsersWhoLikedFood = async (req, res) => {
        const mid = req.params.mid
        const users = await likesDao.findUsersThatLikeFood(mid)
        res.json(users)
    }

    app.post('/users/likes/:mid', userLikesFood)
    app.get('/likes', findAllLikes)
    app.get('/users/:uid/likes', findFoodLikedByUser)
    app.get('/movies/:mid/likes', findUsersWhoLikedFood)
}

export default LikesController;