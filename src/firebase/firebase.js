import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCkfOidq80Oe3kPAKQhv7N5SjDn50FyIDY",
    authDomain: "moon-store-f3ac7.firebaseapp.com",
    databaseURL: "https://moon-store-f3ac7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "moon-store-f3ac7",
    storageBucket: "moon-store-f3ac7.appspot.com",
    messagingSenderId: "892334090398",
    appId: "1:892334090398:web:b2f239650c3955a757338f"
};
initializeApp(firebaseConfig);

export const api = {
    signUp(data) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, data.Email, data.Password)
            .then(userCredential => {
                console.log('userCredential ', userCredential)
            })
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: data.Name
                })
            })
            .catch((err) => {
                alert(err)
                console.log('error create ', err)
            })
    },
    signIn(data) {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, data.Email, data.Password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                // ...
            })
            .catch((err) => {
                console.log(err)
            });
    },
    signOut() {
        const auth = getAuth()
        signOut(auth).catch((err) => {
            console.log(err)
        });
    },
    getUser() {
        const user = getAuth().currentUser
        if (user !== null) return user.providerData[0]
    }
}
window.api = api