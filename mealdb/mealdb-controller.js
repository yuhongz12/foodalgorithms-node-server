const API_LINK = "https://www.themealdb.com/api/json/v1/1/";


const findMealById = (req, res) => {
    res.json(req.params.mid)

}

const findRandomMeal = (req, res) => {
    res.send("hello world random meal")
}

const findAllMeal = (req, res) => {
    res.send("hellow world find all meal")
}


const MealDBController = (app) => {
    app.get('/meal',findAllMeal)
    app.get('/meal/random/', findRandomMeal);

        app.get('/meal/:mid', findMealById);
}

export default MealDBController;