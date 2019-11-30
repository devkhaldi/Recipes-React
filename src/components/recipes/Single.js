import React from 'react'

function Single({baseUri,recipe}) {
    return (
        <div className="col-md-4" >
            <div className="recipes__box">
                <img src={`${baseUri}/${recipe.image}`} alt="" />
                <div className="recipe__text">
                    <h4 className="recipe__text">
                        {recipe.title.length > 20 ? `${recipe.title.substring(0,20)} ...` : recipe.title }
                    </h4>
                    <p className="recipes__subtitle">Ready in :  {recipe.readyInMinutes} minutes </p>
                </div>
                    <button className="recipe_buttons">Show informations</button>
                </div>
            </div>
    )
}

export default Single
