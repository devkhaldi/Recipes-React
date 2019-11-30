import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Axios from 'axios';
import List from './components/recipes/List';

const API_KEY = "f3792d37f5b64c61bb4e585c489aac25"

class App extends Component {
  state = {
    recipes: [],
    baseUri : ''
  }
  getRecipes = e => {
    e.preventDefault() 
    const recipeName = e.target.elements.recipeName.value
    const api_url = `https://api.spoonacular.com/recipes/search?query=${recipeName}&apiKey=${API_KEY}`
    Axios.get(api_url).then(res => {
      this.setState({
        recipes: res.data.results,
        baseUri : res.data.baseUri
      })
      console.log(this.state.recipes)
    })
      .catch(err => {
      console.log(err)
    })  
  }
  render() {
    const {baseUri,recipes} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
       
        <Form getRecipes={this.getRecipes} />
        
        <List recipes={recipes} baseUri={baseUri}/>
        
      </div>
    );
  }
}

export default App;