
import React, { Component, PropTypes } from 'react';

import { AppBar } from 'material-ui';
import { MenuItem } from 'material-ui';
import { LeftNav } from 'material-ui';

class DemoAppBar extends Component {

    constructor(props, content) {
        super(props, content);
        this.state = {leftNavOpen: false};
        this.showLeftNavClick = this.showLeftNavClick.bind(this);
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    showLeftNavClick() {
        this.setState({leftNavOpen: !this.state.leftNavOpen})
    }

    handleLinkClick(event, item){
        event.preventDefault();
        event.stopPropagation();
        // todo: fix to using react-router after v2.0.0 release
        window.location.href = event.currentTarget.dataset.value;
    }

    render() {
        return (
            <div>
                <AppBar {...this.props} onLeftIconButtonTouchTap={this.showLeftNavClick}/>
                <LeftNav ref="leftNav" docked={false} width={200} open={this.state.leftNavOpen}>
                    <MenuItem primaryText="go to /set1" data-value="set1" onTouchTap={this.handleLinkClick}/>
                    <MenuItem primaryText="go to /set2" data-value="set2" onTouchTap={this.handleLinkClick}/>
                    <MenuItem primaryText="go to /progress" data-value="progress" onTouchTap={this.handleLinkClick}/>
                </LeftNav>
            </div>
            );
    }
}


DemoAppBar.propTypes = {
    title: PropTypes.string
};
DemoAppBar.defaultProps = {
    title: 'Brand'
};

export default DemoAppBar;