class Meal {
    constructor(
        id, 
        categoryIds, 
        title, 
        affordability, 
        complexity, 
        imageUrl, 
        duration, 
        ingredients, 
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree
        ) {
            this.id = id ;
            this.title = title ;
            this.affordability = affordability ;
            this.complexity =complexity;
            this.imageUrl = imageUrl ;
            this.duration = duration ;
            this.ingredients =  ingredients;
            this.steps =  steps;
            this.isisGlutenFree = isGlutenFree;
            this.isVegan =  isVegan;
            this.isVegetarian =  isVegetarian;
            this.isLactoseFree =  isLactoseFree;
            this.categoryIds =  categoryIds;
    }
}

export default Meal;