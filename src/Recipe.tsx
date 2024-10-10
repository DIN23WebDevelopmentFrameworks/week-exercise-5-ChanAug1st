// src/Recipe.tsx

import React from 'react';
import { IRecipe } from './types';

interface IRecipeProps {
    recipeData: IRecipe;
}

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
    return (
        <div>
            <h3>{recipeData.name}</h3>
            <p>Ingredients:</p>
            <ul>
                {recipeData.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <p>Instructions:</p>
            <ol>
                {recipeData.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
};

export default Recipe;
