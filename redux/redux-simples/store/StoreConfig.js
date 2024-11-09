import { createStore, combineReducers } from "redux"

const initialState = {
    min: 9,
    max: 19
}

const rootReducers = combineReducers({
    numeros: function (state = initialState, action) {

        switch(action.type){
            case "NUM_MIN_ALTERADO":
                return {
                    ...state,
                    min: action.payload
                }
            case "NUM_MAX_ALTERADO":
                return {
                    ...state,
                    max: action.payload
                }
            default:
                return state
        }
    }
})

function storeConfig(){
    return createStore(rootReducers)
}

export default storeConfig