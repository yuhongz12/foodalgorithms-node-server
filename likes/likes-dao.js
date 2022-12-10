import likesModel from "./likes-model.js";

export const userLikesFood = async (uid, mid) => {
    return await likesModel.create({user: uid, food: mid})
}
export const userUnlikesFood = async(uid, mid) => {
    return await likesModel.deleteOne({user: uid, food: mid})
}
export const findFoodLikedByUser = async(uid) => {
    return await likesModel
        .find({user: uid}, {user: false})
        .populate('food', 'title')
        .exec()
}
export const findUsersThatLikeFood = async(mid) => {
    return await likesModel.find({movie: mid}, {food: false})
        .populate('user', 'username')
        .exec()
}
export const findAllLikes = async () =>
    await likesModel.find()