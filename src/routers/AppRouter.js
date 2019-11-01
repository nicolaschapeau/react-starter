// Imports
import React from 'react'
import { Router, Route, Link, NavLink, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import PrivateRoute from './middlewares/PrivateRoute'
import PublicRoute from './middlewares/PublicRoute'

// Components
import App from '../components/App'




// Create history
export const history = createBrowserHistory()

// AppRouter
const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route component={App} />
            </Switch>
        </div>
    </Router>
)



// Export
export default AppRouter