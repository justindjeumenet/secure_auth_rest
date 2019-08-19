import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import * as routes from '../routes'
import { reduxForm, Field} from "redux-form";
import {signupUser} from "../actions/authActions";
import Title from "./Title";
import {renderTextField, validate} from "../utils/renderUtils";
import asyncValidate from "../utils/asyncValidate";

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

function SignUp(props) {
  const classes = useStyles();
  const {handleSubmit} = props;

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Title/>
        <Title className={classes.topSpace}>Sign Up</Title>
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
            label="username"
            name="username"
            type={'text'}
            autoComplete="username"
            component={renderTextField}
          />
          <Field
            variant="outlined"
            label="Password"
            name="password1"
            type={'password'}
            autoComplete="Password"
            component={renderTextField}
          />
          <Field
            variant="outlined"
            label="Confirm Password"
            name="password2"
            type={'password'}
            autoComplete="Password2"
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
            Sign Up
          </Button>
          <Grid container  className={classes.bottomSpace}>
            <Grid item xs>
              <Link to={routes.PASSWORD_RESET} variant="body2" className={classes.textDeco}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to={routes.SIGN_IN} variant="body2" className={classes.textDeco}>
                {"Already have an account?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const validateForm = values => {
    const errors = {};
    const { password1, password2 } = values;
    if (password1 !== password2) {
        errors.password2 = "Password does not match."
    }
    return errors;
};

export default reduxForm({
    form: "signup",
    validate: validate,
    onSubmit: signupUser,
    asyncValidate,
     validateForm
})(SignUp);


/*****
 *
 * const [form, setForm] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    });

  const {username, email, password1, password2} = form;

  const handleChange = name => event => {
    setForm({ ...form, [name]: event.target.value });
  };
  const handleSubmit = event => {
       event.preventDefault();
        console.log(form);
        signupUser({username: username, email: email, password1: password1, password2: password2 });
        console.log("J'ai traverser register")
  };
 *
 *SignUp.propTypes = {
    signupUser: PropTypes.func.isRequired,
     isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {signupUser})(SignUp);


 *
 *
 *
 * ******/