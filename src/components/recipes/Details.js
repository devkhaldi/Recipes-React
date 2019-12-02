import React, { Component } from 'react'
import Axios from 'axios';


const API_KEY = "f3792d37f5b64c61bb4e585c489aac25"

export class Details extends Component {
        state = {
             recipe : {} 
        }

    componentDidMount = () => {
        const recipeId = this.props.match.params.id;
        const api_url = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}&includeNutrition=false`
        Axios.get(api_url).then(res => {
            console.log(res) 
        })
    }

    render() {
        return (
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Recipe Details</h1>
                    </header>
                
                </div>
            )
        }
 }

export default Details
