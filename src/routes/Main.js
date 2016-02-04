
import React, { Component, PropTypes } from 'react';

import '../assets/css/flexboxgrid.css';
import '../assets/css/font-awesome.css';
import '../assets/css/main.css';

import Row from '../components/FlexboxGrid/Row.jsx';
import Col from '../components/FlexboxGrid/Col.jsx';
import Box from '../components/FlexboxGrid/Box.jsx';
import { RaisedButton } from 'material-ui';
import { TextField } from 'material-ui';
import TableX from '../components/MaterialUITable/TableX.jsx';
import DemoAppBar from '../components/DemoGroup/DemoAppBar.jsx';


class Main extends Component {

    render() {
        return (
            <div>
                <DemoAppBar title="Gihub Wacky Fun Go Party" params={ this.props.params }></DemoAppBar>
                <Row params={ this.props.params }>
                    <Col auto={ true } params={ this.props.params }>
                    <Box params={ this.props.params }>
                        <form params={ this.props.params }>
                            <Row params={ this.props.params }>
                                <Col auto={ true } params={ this.props.params }>
                                <Box params={ this.props.params }>
                                    <TextField hintText="Owner Name"
                                               style={ {    width: '100%'} }
                                               params={ this.props.params }></TextField>
                                </Box>
                                </Col>
                                <Col auto={ true } params={ this.props.params }>
                                <Box params={ this.props.params }>
                                    <RaisedButton label="Fetch Potato" params={ this.props.params }></RaisedButton>
                                </Box>
                                </Col>
                            </Row>
                        </form>
                    </Box>
                    </Col>
                </Row>
                <Row params={ this.props.params }>
                    <TableX fixedHeader={ true }
                            fixedFooter={ true }
                            stripedRows={ true }
                            showRowHover={ true }
                            selectable={ false }
                            multiSelectable={ true }
                            enableSelectAll={ true }
                            deselectOnClickaway={ true }
                            height="400px"
                            params={ this.props.params }></TableX>
                </Row>
            </div>
            );
    }
}

export default Main;

