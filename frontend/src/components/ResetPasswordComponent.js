import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Title from "./Title";
import {renderTextField, validate} from "../utils/renderUtils";
import {Field, reduxForm} from "redux-form";
import { resetPassword } from "../actions/authActions";
import {Paper} from "@material-ui/core";
import HomeContainer from "./HomeContainer";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import * as routes from "../routes";

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

function ResetPasswordComponent(props) {
  const classes = useStyles();
  const { handleSubmit} = props;
  return (
    <HomeContainer>
         <Container>
              <Paper>
                  <Container component="main" maxWidth="xs">
                    <div className={classes.paper}>
                      <Title/>
                      <Title className={classes.topSpace}>Reset Password</Title>
                      <form className={classes.form} onSubmit={handleSubmit}>
                        <Field
                          variant="outlined"
                          label="Email Address"
                          name="email"
                          type={'email'}
                          autoComplete="email"
                          component={renderTextField}
                        />
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          className={classes.submit}
                          size={'large'}
                        >
                         Submit
                        </Button>
                      </form>
                      <Grid container  className={classes.bottomSpace}>
                        <Grid item xs>
                          <Link to={routes.HOME} variant="body2" className={classes.textDeco}>
                            Back to home page?
                          </Link>
                        </Grid>
                      </Grid>
                    </div>
                  </Container>
              </Paper>
          </Container>
    </HomeContainer>

  );
}

export default reduxForm({
    form: "reset_password",
    validate: validate,
    onSubmit: resetPassword,
 })(ResetPasswordComponent);