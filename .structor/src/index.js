import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
require('../../src/assets/css/flexboxgrid.css');
require('../../src/assets/css/font-awesome.css');
require('../../src/assets/css/main.css');
module.exports = {
    ReactRouter: {
        Link: require('react-router').Link,
        IndexLink: require('react-router').IndexLink
    },
    FlexboxGrid: {
        Row: require('../../src/components/FlexboxGrid/Row.jsx'),
        Col: require('../../src/components/FlexboxGrid/Col.jsx'),
        Box: require('../../src/components/FlexboxGrid/Box.jsx')
    },
    MaterialUI: {
        AppBar: require('material-ui').AppBar,
        Avatar: require('material-ui').Avatar,
        FlatButton: require('material-ui').FlatButton,
        RaisedButton: require('material-ui').RaisedButton,
        FloatingActionButton: require('material-ui').FloatingActionButton,
        DatePicker: require('material-ui').DatePicker,
        DropDownMenu: require('material-ui').DropDownMenu,
        Menu: require('material-ui').Menu,
        MenuItem: require('material-ui').MenuItem,
        FontIcon: require('material-ui').FontIcon,
        SvgIcon: require('material-ui').SvgIcon,
        IconButton: require('material-ui').IconButton,
        Paper: require('material-ui').Paper,
        LinearProgress: require('material-ui').LinearProgress,
        CircularProgress: require('material-ui').CircularProgress,
        RefreshIndicator: require('material-ui').RefreshIndicator,
        Slider: require('material-ui').Slider,
        Checkbox: require('material-ui').Checkbox,
        RadioButtonGroup: require('material-ui').RadioButtonGroup,
        RadioButton: require('material-ui').RadioButton,
        Toggle: require('material-ui').Toggle,
        Tabs: require('material-ui').Tabs,
        Tab: require('material-ui').Tab,
        TextField: require('material-ui').TextField,
        AutoComplete: require('material-ui').AutoComplete,
        SelectField: require('material-ui').SelectField,
        TimePicker: require('material-ui').TimePicker
    },
    MaterialUIEnhanced: {
        AvatarWithImage: require('../../src/components/MaterialUIEnhanced/AvatarWithImage.jsx'),
        AvatarX: require('../../src/components/MaterialUIEnhanced/AvatarX.jsx'),
        IconMenuX: require('../../src/components/MaterialUIEnhanced/IconMenuX.jsx'),
        LeftNavIconButton: require('../../src/components/MaterialUIEnhanced/LeftNavIconButton.jsx'),
        SnackbarRaisedButton: require('../../src/components/MaterialUIEnhanced/SnackbarRaisedButton.jsx'),
        TableX: require('../../src/components/MaterialUITable/TableX.jsx')
    },
    MaterialUICard: {
        Card: require('material-ui').Card,
        CardHeader: require('material-ui').CardHeader,
        CardMedia: require('material-ui').CardMedia,
        CardTitle: require('material-ui').CardTitle,
        CardActions: require('material-ui').CardActions,
        CardText: require('material-ui').CardText
    },
    MaterialUIList: {
        List: require('material-ui').List,
        ListItem: require('material-ui').ListItem,
        Divider: require('material-ui').Divider
    },
    MaterialUIDialogs: {
        FlatButtonDialog: require('../../src/components/MaterialUIDialogs/FlatButtonDialog.jsx')
    },
    DemoGroup: {
        DemoAppBar: require('../../src/components/DemoGroup/DemoAppBar.jsx')
    }
};