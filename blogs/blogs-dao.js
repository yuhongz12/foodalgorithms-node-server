import blogsModel from "./blogs-model.js";

export const createBlog = async (blog) =>
    await blogsModel.create(blog)


