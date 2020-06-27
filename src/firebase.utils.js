import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyA7V5rNpz_hS9zWuBLjiOijBjOSuOQmo8A",
    authDomain: "foroshgah-755c6.firebaseapp.com",
    databaseURL: "https://foroshgah-755c6.firebaseio.com",
    projectId: "foroshgah-755c6",
    storageBucket: "foroshgah-755c6.appspot.com",
    messagingSenderId: "548399089061",
    appId: "1:548399089061:web:f47739d4210b039e34944c",
    measurementId: "G-WJGCSX949N"
};


///// create user who sign in with google and save it to fire base server

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const useRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShop = await useRef.get();

    if (!snapShop.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await useRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })


        } catch (error) {

            config.log('error creating user', error.message)
       
       
        }
        return useRef;

    }

}


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;


