const redux = require('redux')
const createStore = redux.createStore

const PRODUCT_TYPE = "Sari";

const initialState = {
    count : 10
}

function actionCreator () {
    return {
        type : PRODUCT_TYPE,
        info : "Paithani Sari"
    }
}

const reducer = (state = initialState , action) => {
    switch (action.type) {
        case PRODUCT_TYPE :  
            return {
                ...state,
                count : state.count + 1  
            } 

        default : return state
    }
}

const store = createStore(reducer);

console.log('Initial State' , store.getState())
store.dispatch(actionCreator())
console.log('Updated State' , store.getState())