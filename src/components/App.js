// Imports
import React from 'react'
import { connect } from 'react-redux'

import { startIncrementCount, startDecrementCount, startSetCount } from '../redux/actions/countActions'


// Component
const App = (props) => (
    <div>
        {props.count}
        <button 
            onClick={
                () => (
                    props.dispatch(startIncrementCount())
                )
            }
        >
        +1
        </button>
        <button 
            onClick={
                () => (
                    props.dispatch(startDecrementCount())
                )
            }
        >
        -1
        </button>
        <button
            onClick={
                () => (
                    props.dispatch(startSetCount(0))
                )
            }
        >
        Reset
        </button>
        <button
            onClick={
                () => (
                    props.dispatch(startSetCount(props.count + 5))
                )
            }
        >
        +5
        </button>
        <button
            onClick={
                () => (
                    props.dispatch(startSetCount(props.count - 5))
                )
            }
        >
        -5
        </button>
    </div>
)



// Export
const mapStateToProps = (state) => {
    return {
        count: state.count,
    }
}

export default connect(mapStateToProps)(App)