import React, {useContext, Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
// withStyles is a higher order component, a wrapper component:
import {withStyles} from '@material-ui/core/styles';
// styles generates a bunch of styles for us:
import styles from './styles/NavBarStyles';
// import {ThemeContext} from './contexts/ThemeContext';
// import {LanguageContext} from './contexts/LanguageContext';

// our CONTEXT here is the 'theme'/styling
class NavbarClass extends Component {
    render() {
        // classes are coming from {withStyles}
        const {classes} = this.props;
        return(
            <div className={classes.root}>
                <Appbar> </Appbar>
            </div>
        )
    }
}
export default withStyles(styles)(NavbarClass);