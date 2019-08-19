import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Paper} from "@material-ui/core";
import {updateUserProfile} from "../actions/authActions";
import HomeContainer from "../components/HomeContainer";
import Button from "@material-ui/core/Button";
import {renderTextField} from "../utils/renderUtils";
import {Field, reduxForm} from "redux-form";
import Title from "../components/Title";
import {connect} from "react-redux";
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

function UserProfile(props) {
  const classes = useStyles();
   const {handleSubmit} = props;

   return (

       <HomeContainer>
           <Paper>
               <Container component="main" maxWidth="xs">
                  <div className={classes.paper}>
                      <Title/>
                      <Title className={classes.topSpace}>Update Profile</Title>
                       <form className={classes.form} onSubmit={handleSubmit}>
                          <Field
                            variant="outlined"
                            label="Username"
                            name="username"
                            type={'text'}
                            autoComplete="username"
                            component={renderTextField}
                          />
                          <Field
                            variant="outlined"
                            label="First Name"
                            name="first_name"
                            type={'text'}
                            autoComplete="firstName"
                            component={renderTextField}
                          />
                          <Field
                            variant="outlined"
                            label="Last Name"
                            name="last_name"
                            type={'text'}
                            autoComplete="lastName"
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
                          Save
                          </Button>
                      </form>
                      <Grid container  className={classes.bottomSpace}>
                        <Grid item xs>
                          <Link to={routes.DASHBOARD} variant="body2" className={classes.textDeco}>
                            Return to Dashboard?
                          </Link>
                        </Grid>
                      </Grid>
                  </div>
                </Container>
           </Paper>
       </HomeContainer>

  );
}

function mapStateToProps(state) {
    return {
        initialValues: state.auth.user
    }
}
export default connect(mapStateToProps)(reduxForm({
    form: "update_userProfile",
    onSubmit: updateUserProfile,
})(UserProfile));