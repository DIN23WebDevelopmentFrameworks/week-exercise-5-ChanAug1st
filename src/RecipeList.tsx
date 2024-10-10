// src/RecipeList.tsx

import React from 'react';
import Recipe from './Recipe';
import { IRecipe } from './types';

interface IRecipeListProps {
    recipes: IRecipe[];
    onBack: () => void;
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes, onBack }) => {
    return (
        <div>
            <h2>Recipes for {recipes.length > 0 ? recipes[0].tags[0] : ''}</h2>
            <button onClick={onBack}>Back</button>
            {recipes.map(recipe => (
                <Recipe key={recipe.id} recipeData={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;
