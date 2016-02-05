import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { RaisedButton, TextField } from 'material-ui';
import Row from '../../components/FlexboxGrid/Row.jsx';
import Col from '../../components/FlexboxGrid/Col.jsx';
import Box from '../../components/FlexboxGrid/Box.jsx';
import { fetchGitHubData } from '../../actions/index.js';

class GithubRepoForm extends Component {

    constructor(props, content) {
        super(props, content);
        this.handleFetch = this.handleFetch.bind(this);
    }
    handleFetch(e) {
        e.preventDefault();
        e.stopPropagation();
        const {dispatch} = this.props;
        const {searchTextField} = this.refs;
        dispatch(fetchGitHubData(searchTextField.getValue()));
    }

    render() {
        const {status, statusText} = this.props;
        let fetchButton = null;
        if (status === 'loading') {
            fetchButton = (<RaisedButton
                                         label="loading"
                                         onClick={ this.handleFetch } />
            );
        } else if(status === 'done') {
            fetchButton = (<RaisedButton
                                         label="Fetch Data"
                                         onClick={ this.handleFetch } />
            );
        }
        else if(status === 'error'){
          fetchButton = (<RaisedButton
                                       label="Error"
                                       onClick={ this.handleFetch } />
          );
        }
        return (<form {...this.props}>
                    <Row>
                        <Col auto={ true }>
                        <Box>
                            <TextField
                                       ref="searchTextField"
                                       hintText="Owner Name"
                                       style={ {    "width": "100%"} } />
                        </Box>
                        </Col>
                        <Col auto={ true }>
                        <Box>
                            { fetchButton }
                        </Box>
                        </Col>
                    </Row>
                </form>
            );
    }
}
function mapStateToProps(state) {
    const {githubData: {fetching: {status, statusText}}} = state;
    return {
        status,
        statusText
    };
}

export default connect(mapStateToProps)(GithubRepoForm);
