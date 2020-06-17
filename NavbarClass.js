import React, {useContext, Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles/NavBarStyles';
// import {ThemeContext} from './contexts/ThemeContext';
// import {LanguageContext} from './contexts/LanguageContext';

class NavbarClass extends Component {
    render() {
        return(
            <div className={classes.root}>
                <h1>NavbarClass here</h1>
            </div>
        )
    }
}
export default withStyles(styles)(NavbarClass);