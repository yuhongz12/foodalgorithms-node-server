const MealDBController = (app) => {
    app.get('api/meal/:mid', findMealById);
    app.get('api/meal/random', findMealById);
}

const findMealById = (req, res) => {
    res.send("hi")
}

const findRandomMeal = (req, res) => {
    res.send('h1')

}

export default MealDBController;