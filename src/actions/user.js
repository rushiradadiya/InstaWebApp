import axios from 'axios';
import firebase from '../Firebase';
import {SIGNUP} from './type'
const store = firebase.firestore().collection('users');
export const SignUp = (data) => {
    debugger
    return (dispatch, getState) => {
        store.add({
           data
        }).then((response) => {
            debugger
            dispatch({
                type: SIGNUP,
                payload: response
            })
            return Promise.resolve({
                data: true
            })            // this.props.history.push("/")
        })
            .catch((error) => {
                debugger
                return Promise.reject({
                    data:false
                })
                console.error("Error adding document: ", error);
            });
    };
};
