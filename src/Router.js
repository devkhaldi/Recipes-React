import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import App from './App'
import Details from './components/recipes/Details'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/details/:id" component={Details} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router