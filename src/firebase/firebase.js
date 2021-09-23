import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyCkfOidq80Oe3kPAKQhv7N5SjDn50FyIDY",
    authDomain: "moon-store-f3ac7.firebaseapp.com",
    databaseURL: "https://moon-store-f3ac7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "moon-store-f3ac7",
    storageBucket: "moon-store-f3ac7.appspot.com",
    messagingSenderId: "892334090398",
    appId: "1:892334090398:web:b2f239650c3955a757338f",
};
initializeApp(firebaseConfig);
const auth = getAuth()

export const api = {
    signUp(data) {
        createUserWithEmailAndPassword(auth, data.Email, data.Password).then(() => {
            updateProfile(auth.currentUser, {
                displayName: data.Name
            })
        }).catch((err) => alert(err))
    },
    async signIn(data) {
        return await signInWithEmailAndPassword(auth, data.Email, data.Password).then((res) => res)
            .catch((err) => {
                console.log(err)
            })
    },
    signOut() {
        signOut(auth).catch((err) => console.log(err))
    }
}