
import React, { Component, PropTypes } from 'react';

import { RaisedButton, Snackbar } from 'material-ui';

class SnackbarRaisedButton extends Component {

    constructor(props, content) {
        super(props, content);
        this.state = {snackbarOpen: false};
        this.handleAction = this.handleAction.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleAction(){
        alert('We removed the event from your calendar.');
    }

    handleClick(e) {
        this.setState({snackbarOpen: !this.state.snackbarOpen})
    }

    render() {
        const { autoHideDuration, label } = this.props;
        return (
            <div {...this.props}>
                <RaisedButton label={label} onTouchTap={this.handleClick}></RaisedButton>
                <Snackbar
                    open={this.state.snackbarOpen}
                    message="Event added to your calendar"
                    action="undo"
                    autoHideDuration={autoHideDuration}
                    onActionTouchTap={this.handleAction}
                    onRequestClose={this.handleClick}/>
            </div>
            );
    }
}

SnackbarRaisedButton.propTypes = {
    style: PropTypes.object,
    autoHideDuration: PropTypes.number,
    label: PropTypes.string
};
SnackbarRaisedButton.defaultProps = {
    style: {
        display: 'inline-block'
    },
    autoHideDuration: 0,
    label: "Snackbar toggle"
};

export default SnackbarRaisedButton;