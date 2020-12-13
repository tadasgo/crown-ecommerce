import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import {
	CollectionPreviewContainer,
	PreviewContainer,
	TitleContainer,
} from './collection-preview.styles';

// display list of 4 items in the shop page
// all of array methods are called everytime component get rendererd
const CollectionPreview = ({ title, items, history, match, routeName }) => (
	<CollectionPreviewContainer>
		<TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
			{title.toUpperCase()}
		</TitleContainer>
		<PreviewContainer>
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</PreviewContainer>
	</CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
