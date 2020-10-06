// import default firebase and exact packages we need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAXnh-fb0A3XxJb-ysTNM1WegRijLxSO-A',
	authDomain: 'crown-ecommerce-db-cf6fb.firebaseapp.com',
	databaseURL: 'https://crown-ecommerce-db-cf6fb.firebaseio.com',
	projectId: 'crown-ecommerce-db-cf6fb',
	storageBucket: 'crown-ecommerce-db-cf6fb.appspot.com',
	messagingSenderId: '110387282319',
	appId: '1:110387282319:web:91d1bec2b85590fc5a8bfa',
	measurementId: 'G-MNVKM8YBYS',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// set up google auth utility
// gives access to class from auth library
const provider = new firebase.auth.GoogleAuthProvider();
// always trigger google popup when we use this googleAuth provider
provider.setCustomParameters({ prompt: 'select_account' });
// this takes provider class we made, but for many differnet platforms - like twitter, fb etc
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export whole library
export default firebase;
