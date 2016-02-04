```
//image avatar
<Avatar src="images/uxceo-128.jpg" />
```

**Note**<br/>
As far as the builder is using webpack for compiling resource files as well as source code files, we need to use in project the following construction in order to get image.
```
import React, { Component, PropTypes } from 'react';

import { Avatar } from 'material-ui';
const avatarImg = require('../../assets/images/logo.png');

class AvatarWithImage extends Component {

    constructor(props, content) {
        super(props, content);
    }

    render() {
        return (
            <Avatar {...this.props} src={avatarImg}>
                { this.props.children }
            </Avatar>
            );
    }
}

export default AvatarWithImage;
```
