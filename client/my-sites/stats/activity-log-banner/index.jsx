/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import Button from 'components/button';
import Gridicon from 'gridicons';

class ActivityLogBanner extends Component {

    static propTypes = {
        logs: PropTypes.array
    };

    getContent() {
        return (
            <div className="activity-log-banner__content">
                <h2 className="activity-log-banner__content-title">This item requires your imediate attention</h2>
                <div className="activity-log-banner__content-body">Jetpack found a treat in your Yoast SEO Plugin</div>
                <div className="activity-log-banner__content-meta">17 January 2017 at 3:30 PM - Melware code detected</div>
            </div>
        );
    }

    getAction() {
        return ( <Button primary>Fix Treat</Button> );
    }

    render() {
        return (
            <Card className="activity-log-banner">
                <div className="activity-log-banner__icon">
                    <Gridicon icon="notice-outline" size={ 24 } />
                </div>
                { this.getContent() }
                { this.getAction() }
            </Card>
        );
    }
};

export default localize( ActivityLogBanner );