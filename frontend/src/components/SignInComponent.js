import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import * as routes from '../routes'
import Title from "./Title";
import { reduxForm, Field} from "redux-form";
import {loginUser} from "../actions/authActions";
import {renderTextField, validate} from "../utils/renderUtils";
import asyncValidate from "../utils/asyncValidate";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(8),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.

  },
  submit: {
    margin: theme.spacing(3, 0, 3),
  },
  bottomSpace: {
      marginBottom: 20,
  },
  topSpace: {
      marginTop: 20,
  },
  textDeco: {
    textDecoration: 'None',
    color: '#ff2060'
  },
}));

function SignIn(props) {
  const classes = useStyles();
   const {handleSubmit, error} = props;
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Title/>
        <Title className={classes.topSpace}>Sign In</Title>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Field
            variant="outlined"
            label="Email Address"
            name="email"
            type={'email'}
            autoComplete="email"
            component={renderTextField}
          />
          <Field
            variant="outlined"
            label="Password"
            name="password"
            type={'password'}
            autoComplete="password"
            component={renderTextField}
          />
          <Typography color={'textSecondary'}>
               {error}
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            size={'large'}
          >
            Sign In
          </Button>
          <Grid container  className={classes.bottomSpace}>
            <Grid item xs>
              <Link to={routes.PASSWORD_RESET} variant="body2" className={classes.textDeco}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to={routes.SIGN_UP} variant="body2" className={classes.textDeco}>
                {"Don't have an account?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default reduxForm({
    form: "sign_in",
    validate: validate,
    onSubmit: loginUser,
    asyncValidate
})(SignIn);
