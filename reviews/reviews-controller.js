import * as dao from "./reviews-dao.js"

const ReviewsController = (app) => {
    const createReview = async (req, res) => {
        const currentUser = req.session['currentUser']
        let review = req.body;
        review = {
            ... review,
            author: currentUser._id,
            time: Date.now()
        }
        console.log(review)
        const actualReview = await dao.createReview(review)
        res.json(actualReview)
    }

    const updateReview = async (req, res) => {
        const newReview = req.body;
        const review = await dao.updateReviewById(newReview._id, newReview)
        console.log(newReview);
        res.json(newReview);
    }

    const deleteReview = async(req, res) => {
        const reviewID = req.params.idMeal;
        const response = await dao.deleteReview(reviewID)
        res.json({reviewID})
    }

    const findReviewsByFood = async (req, res) => {
        const idMeal = req.params.idMeal
        const reviews = await dao.findReviewsByFood(idMeal)
        res.send(reviews)
    }
    const findReviewsByAuthor = async (req, res) => {
        const author = req.params.author
        const reviews = await dao.findReviewsByAuthor(author)
        res.json(reviews)
    }
    app.post('/api/reviews/meal/:idMeal', createReview)
    app.put('/api/reviews/meal/:idMeal',  updateReview)
    app.delete('/api/reviews/meal/:idMeal',  deleteReview)
    app.get('/api/reviews/meal/:idMeal', findReviewsByFood)
    app.get('/api/users/:author/reviews', findReviewsByAuthor)
}
export default ReviewsController