import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
}
const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT:
                //const newState = Object.assign(state);
                //newState.counter = state.counter + 1;
                return {
                    ...state,
                    counter: state.counter + 1,
                }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
        }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
        }
        case actionTypes.SUBTRACTION:
            return {
                ...state,
                counter: state.counter - action.value
        }
        
    }
    return state;
};

export default reducer;