// src/App.tsx

import React, { useEffect, useState } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';
import { IRecipe } from './types';

const App: React.FC = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    useEffect(() => {
        const fetchTags = async () => {
            const response = await fetch('https://dummyjson.com/recipes/tags');
            const data = await response.json();
            setTags(data);
        };

        fetchTags();
    }, []);

    useEffect(() => {
        if (selectedTag) {
            const fetchRecipes = async () => {
                const response = await fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`);
                const data = await response.json();
                setRecipes(data.recipes);
            };

            fetchRecipes();
        }
    }, [selectedTag]);

    const handleSelectTag = (tag: string) => {
        setSelectedTag(tag);
    };

    const handleBack = () => {
        setSelectedTag(null);
        setRecipes([]);
    };

    return (
        <div>
            <h1>ACME Recipe O'Master</h1>
            {!selectedTag ? (
                <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
            ) : (
                <RecipeList recipes={recipes} onBack={handleBack} />
            )}
        </div>
    );
};

export default App;
