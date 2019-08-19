import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect } from "react-redux";
import {logoutUser} from "../actions/authActions";
import { Link } from "react-router-dom";
import * as routes from '../routes'




const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const useStyles = makeStyles(theme => ({
  textDeco: {
    textDecoration: 'None',
    color: 'black'
  },
}));

function Menus(props) {
  const {logoutUser}  = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton color="inherit"  onClick={handleClick}>
        <AccountCircle/>
      </IconButton>
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
             <Link to={routes.PROFILE} className={classes.textDeco}>
                Profile
            </Link>
        </MenuItem>
        <MenuItem>
            <Link to={routes.PASSWORD_CHANGE} className={classes.textDeco}>
                Change your password
            </Link>
        </MenuItem>
        <MenuItem onClick={logoutUser}>Logout</MenuItem>
      </StyledMenu>
    </div>
  );
}

export default connect(null, {logoutUser}) (Menus);
