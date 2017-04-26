// http://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript
const f = ( a, b ) => [].concat( ...a.map( c => b.map( d => [].concat( c, d ) ) ) );
const cartesian = ( a, b, ...c ) => b ? cartesian( f( a, b ), ...c ) : a;

export default function generateVariations( product ) {
	const { attributes } = product;
	const variationTypes = ( attributes && attributes.filter( attribute => attribute.variation ) ) || [];

	if ( variationTypes.length < 2 ) {
		return variationTypes[ 0 ] && variationTypes[ 0 ].options.map( function( option ) {
			return {
				attributes: [ { option } ]
			};
		} ) || [];
	}

	const variationTypeOptions = [];
	const variationTypeNames = [];
	variationTypes.forEach( function( variationType ) {
		variationTypeOptions.push( variationType.options );
		variationTypeNames.push( variationType.name );
	} );
	return cartesian( ...variationTypeOptions ).map( function( combination ) {
		return {
			attributes: combination.map( function( option, i ) {
				return {
					name: variationTypeNames[ i ],
					option,
				};
			} ),
		};
	} );
}
