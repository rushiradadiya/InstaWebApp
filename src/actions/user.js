import firebase from '../Firebase';

let store = firebase.firestore().collection('users');


export const SignUp = (data) => async dispatch => {
    store = firebase.firestore().collection('users');
    store.add(data).then((response) => {
        console.log(response.id);
        return Promise.resolve(true)            // this.props.history.push("/")
    })
        .catch((error) => {
            return Promise.reject(false)
        });

};
export const login = (data) => async dispatch => {
    return new Promise(function (resolve, reject) {

         store.where("emailPhone", "==", data.email).where("password", "==", data.password)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    console.log(doc.id, " => ", doc.data());
                    return resolve(true)
                });
                return resolve(false)

            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
                return reject(false)
            });
    })
}
