// MIDDLEWARE FOR LOGGED USERS


// Imports
import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'



// Component
export const PrivateRoute = ({ 
    isAuthenticated, 
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
            </div>
        ) : (
            <Redirect to="/" />
        )
    )} />
)



// Export + store
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)