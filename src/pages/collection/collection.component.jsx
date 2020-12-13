import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';

import {
	CollectionItemsContainer,
	CollectionTitle,
	CollectionPageContainer,
} from './collection.styles';

// match.params.collectionId gets us string after shop/
const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};
// ownProps = props of component we are wrapping
// match.params.collectionId gets us string after shop/ we get this from parent <Route />
// currying -> selectCollection is a func which return a func, both of them need args, so we pass and call both of them at the time
const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
