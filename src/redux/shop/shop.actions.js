import {
	convertCollectionsSnapshotToMap,
	firestore,
} from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage,
});

// thunk is an action creator that returns a function that get the dispatch
export const fetchCollectionsStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection('collections');
		// notify that we are fetching
		dispatch(fetchCollectionsStart());

		// get data as a promise not using observable/observer from firebase
		collectionRef
			.get()
			.then((snapshot) => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				// after we get data from db and promise is fulfilled
				dispatch(fetchCollectionsSuccess(collectionsMap));
			})
			.catch((error) => dispatch(fetchCollectionsFailure(error.message)));
	};
};
