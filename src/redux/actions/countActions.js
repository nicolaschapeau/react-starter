// Imports



// Actions


// INCREMENT COUNT
//
// -------------->
export const incrementCount = () => (
    {
        type: 'INCREMENT',
    }
)

export const startIncrementCount = () => {
    return (dispatch, getState) => {
        // Get something ?
        // getState().x

        // Update db ?
        // return { database.push(x).then(dispatch(increment())) }

        return dispatch(incrementCount())
    }
}


// DECREMENT COUNT
//
// -------------->
export const decrementCount = () => (
    {
        type: 'DECREMENT',
    }
)

export const startDecrementCount = () => {
    return (dispatch, getState) => {
        // Get something ?
        // getState().x

        // Update db ?
        // return { database.push(x).then(dispatch(increment())) }

        return dispatch(decrementCount())
    }
}



// SET COUNT
//
// -------------->
export const setCount = (value) => (
    {
        type: 'SET',
        value
    }
)

export const startSetCount = (value = 0) => {
    return (dispatch, getState) => {
        // Get something ?
        // getState().x

        // Update db ?
        // return { database.push(x).then(dispatch(increment())) }

        dispatch(setCount(value))
    }
}
