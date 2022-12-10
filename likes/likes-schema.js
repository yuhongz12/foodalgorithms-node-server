import mongoose from "mongoose";

const likesSchema = mongoose.Schema({
                                        user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
                                        movie: {type: mongoose.Schema.Types.ObjectId, ref: 'FoodModel'},
                                    }, {collection: 'likes'})
export default likesSchema

