import * as types from '../constants/actionTypes.js';



export function newName(previousState = "", action) {
    switch(action.type) {
        case types.NEW_NAME:
            return action.payload;
        case types.CREATE_CONTACT:
            return "";
        case types.UPDATE_CONTACT:
            return "";
        default:
            return previousState;
    }
}

export function newAddress(previousState = "", action) {
    switch(action.type) {
        case types.NEW_ADDRESS:
            return action.payload;
        case types.CREATE_CONTACT:
            return "";
        case types.UPDATE_CONTACT:
            return "";
        default:
            return previousState;
    }
}

export function newPhone(previousState = "", action) {
    switch(action.type) {
        case types.NEW_PHONE:
            return action.payload;
        case types.CREATE_CONTACT:
            return "";
        case types.UPDATE_CONTACT:
            return "";
        default:
            return previousState;
    }
}