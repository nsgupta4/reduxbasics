import * as actionTypes from './actionTypes';

export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};
export const add = (value) => {
    //const updatedValue = value * 2;
    return {
        type: actionTypes.ADD,
        value: value,
    };
};
export const subtraction = (value) => {
    return {
        type: actionTypes.SUBTRACTION,
        value: value,
    };
};