import firebase from '../Firebase';
import {SIGNUP} from './type'
let store = firebase.firestore().collection('users');


export const SignUp = (data) => async dispatch => {
     store = firebase.firestore().collection('users');
    store.add(data).then((response) => {
        // dispatch({
        //     type: SIGNUP,
        //     payload: response
        // })
        return Promise.resolve(true)            // this.props.history.push("/")
    })
        .catch((error) => {
            return Promise.reject(false)
            // console.error("Error adding document: ", error);
        });

};
export const login = (data) => async dispatch => {
    store.whereEqualTo("emailPhone", data.email)
    store.whereEqualTo("password", data.password)
    .get()
    .then(function(querySnapshot) {
        debugger
        querySnapshot.forEach(function(doc) {
            debugger
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            return Promise.resolve(doc.data())
        });
    })
    .catch(function(error) {
        debugger
        console.log("Error getting documents: ", error);
        return Promise.reject(error)
    });
}