import {
	firestore,
	convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// collection items state + shop page display
// we get passed match, location and history from route component of parent
// show collection overview with only 4 items each then add links to full collection pages
// we can access categoryId as a parameter in the match
class ShopPage extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		// when collectionRef updates or code gets run for a first time
		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async (snapshot) => {
				const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				updateCollections(collectionsMap);
			}
		);
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route exact path={`${match.path}`} component={CollectionsOverview} />
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
