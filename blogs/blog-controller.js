
import * as blogsDao from './blogs-dao.js'

const BlogsController = (app) => {


    const createBlog = async (req, res) => {
        const newBlog = req.body;
        const currentUser = req.session['currentUser']
        console.log(req.session);
        newBlog.time = Date.now;
        const actualBlog = await blogsDao.createBlog(newBlog);
        res.json(actualBlog);
    }
    

    const findBlogById = async (req, res) => {
        const blogId = req.params.bid;
        const blogDetails = await blogsDao.findBlogById(blogId);
        res.json(blogDetails);
    }

    const findAllBlogs = async (req, res) => {
        const allBlogs = await blogsDao.findAllBlogs();
        res.json(allBlogs);
    }

    app.post('/blog', createBlog)
    app.get('/blog/:bid', findBlogById)
    app.get('/blog', findAllBlogs)

}
export default BlogsController;