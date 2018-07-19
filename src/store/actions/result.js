import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result,
    };
};

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(()=> {
            //const s=getState().ctr.counter;
            //console.log(s);
            dispatch(saveResult(result));
        }, 2000);
    };
};
export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId, 
    };
};