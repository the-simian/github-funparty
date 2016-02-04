
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import DemoAppBar from '../components/DemoGroup/DemoAppBar.jsx';


class Main extends Component {

    render() {
        return (
            <div>
                <DemoAppBar title="Gihub Wacky Fun Go Party" params={ this.props.params }></DemoAppBar>
            </div>
            );
    }
}

export default Main;

