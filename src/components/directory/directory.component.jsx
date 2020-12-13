import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles.jsx';

const Directory = ({ sections }) => (
	// loop through state and destructure values of each object from sections -> pass them MenuItem
	// ...otherSectionProp first catches all other properties into an array then spreads them back into properties to each MenuItem
	<DirectoryMenuContainer>
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
