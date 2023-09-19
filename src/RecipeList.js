import React from "react";

function RecipeList({ recipes, setRecipes }) {
  
  // done TODO: Display the list of recipes using the structure of table that is provided.
  // done(deleteRecipe) TODO: Create at least one additional component that is used by this component.
  // done TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked



  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) => 
    currentRecipes.filter((recipe, index) => index !== indexToDelete));
  }

  const eachRecipe = recipes.map((recipe, index) => {
    return (
      <tr key={index}>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img 
            src={recipe.photo}
            alt={recipe.name}
          />
        </td>
        <td>{recipe.ingredients}</td>
        <td>{recipe.preparation}</td>
        <td>
          <button name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
        </td>
      </tr>
    )
  });


  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
            {eachRecipe}
          
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;