
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import DemoAppBar from '../components/DemoGroup/DemoAppBar.jsx';


class PageSet1 extends Component {

    render() {
        return (
            <div>
                <DemoAppBar title="Click to navigate in preview mode" params={ this.props.params }></DemoAppBar>
            </div>
            );
    }
}

export default PageSet1;

