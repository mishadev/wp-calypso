/**
 * External dependencies
 */
import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */
import { requestRecommendedSites } from 'state/reader/recommended-sites/actions';

class QueryReaderFeed extends Component {
	static propTypes: {
		seed: PropTypes.number,
	};

	static defaultProps = () => ( {
		seed: 0,
	} )

	componentWillMount() {
		this.props.requestRecommnededSites( { seed: this.props.seed } );
	}

	componentWillReceiveProps( nextProps ) {
		this.props.requestRecommnededSites( { seed: nextProps.seed } );
	}

	render() {
		return null;
	}
}

export default connect( null, { requestRecommendedSites } )( QueryReaderFeed );
