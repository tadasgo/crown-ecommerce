import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

// react gives every html markup a style property. It takes object that has prop values equal to css values we want to apply
// history.push() -> redirects us to /somematchedURL/linkUel ex shop+/hats
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<div
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
			className="background-image"
		/>
		<div className="content">
			<h1 className="title">{title.toUpperCase()}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

// allows this MenuItem component to have access to router location/match/history props
export default withRouter(MenuItem);
