import * as types from '../constants/actionTypes.js';

export const updateNewName = (newName) => {
    return {
        type: types.NEW_NAME,
        payload: newName,
    }
}

export const updateNewAddress = (newAddress) => {
    return {
        type: types.NEW_ADDRESS, 
        payload: newAddress,
    }
}
export const updateNewPhone = (newPhone) => {
    return {
        type: types.NEW_PHONE,
        payload: newPhone,
    }
}
export const createContact = (data) => {
    return {
        type: types.CREATE_CONTACT,
        payload: data,
    }
}
export const deleteContact = (id) => {
    return {
        type: types.DELETE_CONTACT,
        payload: id,
    }
}
export const updateContact = (data) => {
    return {
        type: types.UPDATE_CONTACT,
        payload: data
    }
}