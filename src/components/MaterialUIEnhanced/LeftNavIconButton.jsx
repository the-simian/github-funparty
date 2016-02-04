
import React, { Component, PropTypes } from 'react';

import { IconButton, Divider, MenuItem, LeftNav } from 'material-ui';

class LeftNavIconButton extends Component {

    constructor(props, content) {
        super(props, content);
        this.state = {leftNavOpen: false};
        this.showLeftNavClick = this.showLeftNavClick.bind(this);
    }

    showLeftNavClick() {
        this.setState({leftNavOpen: !this.state.leftNavOpen})
    }

    render() {
        return (
            <div style={{display: 'inline-block'}}>
                <IconButton {...this.props} onTouchTap={this.showLeftNavClick}>
                    { this.props.children }
                </IconButton>
                <LeftNav
                    docked={this.props.docked}
                    width={200}
                    open={this.state.leftNavOpen}
                    onRequestChange={this.showLeftNavClick}>
                    <MenuItem primaryText="Get Started"/>
                    <MenuItem primaryText="Customization"/>
                    <MenuItem primaryText="Components"/>
                    <Divider/>
                    <MenuItem primaryText="Resources"/>
                </LeftNav>
            </div>
        );
    }
}


LeftNavIconButton.propTypes = {
    iconClassName: PropTypes.string,
    tooltip: PropTypes.string,
    disabled: PropTypes.bool,
    tooltipPosition: PropTypes.string,
    docked: PropTypes.bool
};
LeftNavIconButton.defaultProps = {
    iconClassName: 'fa fa-bars',
    tooltip: 'Left side navigation bar',
    disabled: false,
    tooltipPosition: 'bottom-center',
    docked: false
};

export default LeftNavIconButton;