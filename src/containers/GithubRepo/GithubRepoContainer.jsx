import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TableX from '../../components/MaterialUITable/TableX.jsx';

class GithubRepoContainer extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        const {list} = this.props || [];
        let gitTable;



        if (list && list.length > 0) {
          gitTable = (<TableX
                                rows={ list }
                                fixedHeader={ true }
                                fixedFooter={ true }
                                stripedRows={ true }
                                showRowHover={ true }
                                selectable={ false }
                                multiSelectable={ true }
                                enableSelectAll={ true }
                                deselectOnClickaway={ true }
                                height="400px" />
                    );
        } else {
            gitTable = (<TableX
                                 rows = { list }
                                 fixedHeader={ true }
                                 fixedFooter={ true }
                                 stripedRows={ true }
                                 showRowHover={ true }
                                 selectable={ false }
                                 multiSelectable={ true }
                                 enableSelectAll={ true }
                                 deselectOnClickaway={ true }
                                 height="400px" />
            );
        }
        return gitTable;
    }
}
function mapStateToProps(state) {
    const {githubData: {list}} = state;
    return {
        list
    };
}

export default connect(mapStateToProps)(GithubRepoContainer);
