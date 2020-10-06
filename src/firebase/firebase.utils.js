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

// pass data to the db
export const createUserProfileDocument = async (userAuth, additionalData) => {
	// exit if not authorised
	if (!userAuth) return;

	// returns a referance to a place in database
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	// returns a data snapshot as an object
	const snapShot = await userRef.get();

	// exists checks if there are data and returns bool
	if (!snapShot.exists) {
		// get info from auth object + create date when data was added into db
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		// trycatch block to catch errors - these are going to be async operations
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('Error creating user', error.message);
		}
	}

	// return user reference in case we need it
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// set up google auth utility
// gives access to class from auth library
const provider = new firebase.auth.GoogleAuthProvider();
// always trigger google popup when we use this googleAuth provider
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export whole library
export default firebase;
