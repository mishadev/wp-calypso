/**
 * External dependencies
 */
import { combineReducers } from 'redux';

/**
 * Internal dependencies
 */
import productCategories from './product-categories/reducer';
import ui from './ui/reducer';

export default combineReducers( {
	productCategories,
	ui
} );
