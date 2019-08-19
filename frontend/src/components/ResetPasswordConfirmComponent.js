import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Title from "./Title";
import {renderTextField} from "../utils/renderUtils";
import {Field, reduxForm} from "redux-form";
import { confirmPasswordChange } from "../actions/authActions";
import HomeContainer from "./HomeContainer";
import {Paper} from "@material-ui/core";

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
  }
}));

function ResetPasswordConfirmComponent(props) {
  const classes = useStyles();
  const { handleSubmit } = props;
  return (
    <HomeContainer>
        <Container>
            <Paper>
                <Container component="main" maxWidth="xs">
                  <div className={classes.paper}>
                    <Title/>
                    <Title className={classes.topSpace}>Create New Password</Title>
                    <form className={classes.form} onSubmit={handleSubmit}>
                      <Field
                        variant="outlined"
                        label="New Password"
                        name="new_password1"
                        type={'password'}
                        autoComplete="password"
                        component={renderTextField}
                      />
                      <Field
                        variant="outlined"
                        label="Confirm Password"
                        name="new_password2"
                        type={'password'}
                        autoComplete="password"
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
                  </div>
                </Container>
            </Paper>
        </Container>
    </HomeContainer>

  );
}

const validateForm = values => {
    const errors = {};
    const { new_password1, new_password2 } = values;
    if (new_password1 !== new_password2) {
        errors.new_password2 = "Password does not match."
    }
    return errors;
};

export default reduxForm({
    form: "password_reset_confirm",
    validate: validateForm,
    onSubmit: confirmPasswordChange,
})(ResetPasswordConfirmComponent);