import React from 'react';
import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	ContentSubtitle,
	ContentTitle,
} from './menu-item.styles';
import { withRouter } from 'react-router-dom';

// react gives every html markup a style property. It takes object that has prop values equal to css values we want to apply
// history.push() -> redirects us to /somematchedURL/linkUel ex shop+/hats
const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
	<MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<BackgroundImageContainer
			imageUrl={imageUrl}
			className="background-image"
		/>
		<ContentContainer className="content">
			<ContentTitle>{title.toUpperCase()}</ContentTitle>
			<ContentSubtitle>SHOP NOW</ContentSubtitle>
		</ContentContainer>
	</MenuItemContainer>
);

// allows this MenuItem component to have access to router location/match/history props
export default withRouter(MenuItem);
