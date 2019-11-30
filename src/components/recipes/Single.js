import React from 'react'

function Single({baseUri,recipe}) {
    return (
        <div className="col-md-6">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={`${baseUri}/${recipe.image}`} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{recipe.title}</h5>
                        <p className="card-text">{`${recipe.readyInMinutes} minutes`}</p>
                        <button className="btn btn-secondary btn-sm">Show</button>  
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Single
