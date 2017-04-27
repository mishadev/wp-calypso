/**
 * External dependencies
 */
import { createReducer } from 'state/utils';

/**
 * Internal dependencies
 */
import {
	WOOCOMMERCE_FETCH_PRODUCT_CATEGORIES,
	WOOCOMMERCE_FETCH_PRODUCT_CATEGORIES_SUCCESS,
	WOOCOMMERCE_FETCH_PRODUCT_CATEGORIES_FAILURE,
} from '../action-types';

export default createReducer( {}, {
	[ WOOCOMMERCE_FETCH_PRODUCT_CATEGORIES ]: fetchProductCategories,
	[ WOOCOMMERCE_FETCH_PRODUCT_CATEGORIES_SUCCESS ]: fetchProductCategoriesSuccess,
	[ WOOCOMMERCE_FETCH_PRODUCT_CATEGORIES_FAILURE ]: fetchProductCategoriesFailure,
} );

function fetchProductCategories( productCategories, action ) {
	const { siteId } = action.payload;
	const site = productCategories[ siteId ] || [];
	const _site = { ...site, state: 'fetching' };

	return { ...productCategories, [ siteId ]: _site };
}

function fetchProductCategoriesSuccess( productCategories, action ) {
	const { siteId, data } = action.payload;
	const _site = { data, state: 'fetched' };

	return { ...productCategories, [ siteId ]: _site };
}

function fetchProductCategoriesFailure( productCategories, action ) {
	const { siteId, error } = action.payload;
	const site = productCategories[ siteId ] || [];
	const _site = { ...site, error, state: 'error' };

	return { ...productCategories, [ siteId ]: _site };
}

