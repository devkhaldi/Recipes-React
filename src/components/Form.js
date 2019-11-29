import React from 'react'

function Form(props) {
    return (
        <div>
            <form onSubmit={props.getRecipes} >
                    <input name="recipeName" type="text" placeholder="Find recipes" />
                    <button>Search</button>
            </form>
        </div>
    )
}

export default Form
