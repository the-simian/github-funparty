
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import Row from '../components/FlexboxGrid/Row.jsx';
import Col from '../components/FlexboxGrid/Col.jsx';
import Box from '../components/FlexboxGrid/Box.jsx';
import DemoAppBar from '../components/DemoGroup/DemoAppBar.jsx';
import GithubRepoContainer from '../containers/GithubRepo/GithubRepoContainer.jsx';
import GithubRepoForm from '../containers/GithubRepo/GithubRepoForm.jsx';


class Main extends Component {

    render() {
        return (
            <div>
                <DemoAppBar title="Gihub Wacky Fun Go Party"
                            style={ {    display: 'none'} }
                            params={ this.props.params }></DemoAppBar>
                <Row params={ this.props.params }>
                    <Col auto={ true } params={ this.props.params }>
                    <Box params={ this.props.params }>
                        <GithubRepoForm params={ this.props.params }></GithubRepoForm>
                    </Box>
                    </Col>
                </Row>
                <Row params={ this.props.params }>
                    <GithubRepoContainer params={ this.props.params }></GithubRepoContainer>
                </Row>
            </div>
            );
    }
}

export default Main;

