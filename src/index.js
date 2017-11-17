import React from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import App from './app/App'
import CurrentPage from './app/CurrentPage'
import IncomePage from './app/IncomePage'

import './styles/index.css'

const routes = (
    <BrowserRouter>
        <Switch>
            <div className='routerDiv'>
                <Route exact path='/' component={App} />
                <Route path='/current' component={CurrentPage} />
                <Route path='/income' component={IncomePage} />
            </div>
        </Switch>
    </BrowserRouter>
    
);

ReactDOM.render(routes , document.getElementById('Main'));