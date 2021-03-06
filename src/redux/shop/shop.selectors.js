import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

// transfor object to array
export const selectCollectionsForPrieview = createSelector(
	[selectCollections],
	(collections) => (collections ? Object.values(collections) : [])
);

// Memoize does the same idea of memoization as reselect does for our selectors, except this time we're memoizing the return of our function
// selector is memoized by reselect
export const selectCollection = memoize((collectionUrlParam) =>
	createSelector([selectCollections], (collections) =>
		collections ? collections[collectionUrlParam] : null
	)
);

export const selectIsCollectionFetching = createSelector(
	[selectShop],
	(shop) => shop.isFetching
);

// !! converts truthy/falsy value to bool
export const selectIsCollectionsLoaded = createSelector(
	[selectShop],
	(shop) => !!shop.collections
);
