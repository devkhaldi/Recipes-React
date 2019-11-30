import React from 'react'

function Form(props) {
    return (
        <div>
            <form onSubmit={props.getRecipes} className="my-5" >
                    <input name="recipeName" type="text" placeholder="Find recipes" className="form__input" />
                    <button className="form__button">Find Recipe</button>
            </form>
        </div>
    )
}

export default Form
