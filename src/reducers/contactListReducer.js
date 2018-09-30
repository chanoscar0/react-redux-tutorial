import * as types from '../constants/actionTypes.js';

const initialState = {
    contacts: [],
    id: 0,
}
export default function (previousState = initialState, action) {
    const newState = Object.assign({}, previousState);
    switch(action.type) {
        case types.CREATE_CONTACT:
            let newId = previousState.id;
            let newObj = {
                id: newId,
                name: action.payload.name,
                address: action.payload.address,
                phone: action.payload.phone,
            }
            newState.contacts.push(newObj);
            newState.id += 1;
            return newState;
        case types.DELETE_CONTACT:
        console.log('Hello');
        console.log(action.payload);
            for (let i = 0; i < previousState.contacts.length; i += 1){
                console.log(previousState.contacts[i].id);
                if(previousState.contacts[i].id == action.payload){
                    console.log("I'm deleting the contact");
                    newState.contacts.splice(i,1);
                    break;
                }
            }
            return newState;
        case types.UPDATE_CONTACT:
        for (let i = 0; i < previousState.contacts.length; i += 1){
            console.log(previousState.contacts[i], action.payload.id);
            if(previousState.contacts[i].id == action.payload.id){
                let copyObj = {
                    id: previousState.contacts[i].id,
                    name: action.payload.name,
                    address: action.payload.address,
                    phone: action.payload.phone,
                }     
                console.log("I'm updating the contact");
                newState.contacts[i] = copyObj;
                break;
            }
        }
        return newState;
        default:
            return previousState;
    }
}