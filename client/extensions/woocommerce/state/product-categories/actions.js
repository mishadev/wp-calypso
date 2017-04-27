/**
 * Internal dependencies
 */
import wp from 'lib/wp';

import {
	WOOCOMMERCE_FETCH_PRODUCT_CATEGORIES,
	WOOCOMMERCE_FETCH_PRODUCT_CATEGORIES_SUCCESS,
	WOOCOMMERCE_FETCH_PRODUCT_CATEGORIES_FAILURE,
} from '../action-types';

export function fetchProductCategories( siteId ) {
	return ( dispatch ) => {
		dispatch( {
			type: WOOCOMMERCE_FETCH_PRODUCT_CATEGORIES,
			payload: { siteId },
		} );

		const jpPath = `/jetpack-blogs/${ siteId }/rest-api/`;
		const apiPath = '/wc/v2/products/categories';

		console.log( 'getting ' + jpPath + '|' + apiPath );
		return wp.req.get( { path: jpPath }, { path: apiPath } )
			.then( ( { data } ) => {
				dispatch( {
					type: WOOCOMMERCE_FETCH_PRODUCT_CATEGORIES_SUCCESS,
					payload: {
						siteId,
						data
					}
				} );
			} )
			.catch( error => {
				dispatch( {
					type: WOOCOMMERCE_FETCH_PRODUCT_CATEGORIES_FAILURE,
					payload: {
						siteId,
						error
					}
				} );
			} );
	};
}
