// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Store General
import configureStore from './redux/store/configureStore'

// Router import
import AppRouter, { history } from './routers/AppRouter'

// Style
import 'normalize.css/normalize.css'
import './styles/styles.scss'


// Components
// Main app component here
const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)



// Render
ReactDOM.render(jsx, document.getElementById('app'))





// Exemple loading page
//
// >>>>>>>>>>>>>>>>>>>>


// ReactDOM.render(<LoadingPage />, document.getElementById('app'))
// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         store.dispatch(login(user.uid))

//         store.dispatch(startSetExpenses()).then(() => {
//             renderApp()

//             if (history.location.pathname === '/') {
//                 history.push('/dashboard')
//             }
//         })
//     } else {
//         store.dispatch(logout())

//         renderApp()

//         history.push('/')
//     }
// })