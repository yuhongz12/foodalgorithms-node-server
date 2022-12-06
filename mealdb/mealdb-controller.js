const MealDBController = (app) => {
    app.get('api/meal/:mid', findMealById);
    app.get('api/meal/random', findMealById);
}

const findMealById = (req, res) => {

}

const findRandomMeal = (req, res) => {

}

export default MealDBController;