
import React, { Component, PropTypes } from 'react';

import { FlatButton, Dialog } from 'material-ui';

class FlatButtonDialog extends Component {

    constructor(props, content) {
        super(props, content);
        this.state = {
            open: false
        };
        this.onDialogSubmit = this.onDialogSubmit.bind(this);
        this.onDialogCancel = this.onDialogCancel.bind(this);
        this.handleShowDialog = this.handleShowDialog.bind(this);
    }

    onDialogSubmit(){
        if(this.props.onDialogSubmit){
            this.props.onDialogSubmit();
        }
    }

    onDialogCancel() {
        if(this.props.onDialogCancel){
            if(this.props.onDialogCancel()){
                this.refs.dialog.dismiss();
            }
        } else {
            this.setState({open: false});
        }
    }

    handleShowDialog(){
        this.setState({open: true});
    }

    render() {

        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.onDialogCancel} />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.onDialogSubmit} />,
        ];

        const { dialogTitle, modal } = this.props;
        return (
            <div style={{display: 'inline-block'}}>
                <FlatButton {...this.props} onTouchTap={this.handleShowDialog}/>
                <Dialog
                    open={this.state.open}
                    title={dialogTitle}
                    actions={actions}
                    modal={modal}
                    autoDetectWindowHeight={true}
                    onRequestClose={this.onDialogCancel}>
                    <div>
                        <p><span>Change content of this Dialog</span></p>
                    </div>
                </Dialog>
            </div>
        );
    }
}

FlatButtonDialog.propTypes = {
    dialogTitle: PropTypes.string,
    modal: PropTypes.bool,
    onDialogSubmit: PropTypes.func,
    onDialogCancel: PropTypes.func
};
FlatButtonDialog.defaultProps = {
    label: 'Default Dialog',
    modal: true,
    onDialogSubmit: null,
    onDialogCancel: null
};

export default FlatButtonDialog;