import * as blogsDao from './blogs-dao.js'

const BlogsController = (app) => {


    const createBlog = async (req, res) => {
        const newBlog = req.body;
        const actualBlog = await blogsDao.createBlog(newBlog)
        res.json(actualBlog)
    }
    app.post('/blog', createBlog)

}
export default BlogsController;