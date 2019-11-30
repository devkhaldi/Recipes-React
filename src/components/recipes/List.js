import React from 'react'
import Single from './Single'

function List({baseUri,recipes}) {
    return (
        <div className="container">
            <div className="row">
                { recipes.map(recipe => <Single baseUri={baseUri} recipe={recipe} key={recipe.id} />) }
            </div>
        </div>
    )
}

export default List
