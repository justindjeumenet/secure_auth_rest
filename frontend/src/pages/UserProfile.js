import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Paper, Typography} from "@material-ui/core";
import {getUserProfile} from "../actions/authActions";
import HomeContainer from "../components/HomeContainer";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Title from "../components/Title";
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
   const { user} = props;

   useEffect(() => {
   getUserProfile();
});

  if(user){
   return (

       <HomeContainer>
           <Paper>
               <Container component="main" maxWidth="xs">
                  <div className={classes.paper}>
                      <Title/>
                      <Title className={classes.topSpace}>Profile</Title>
                      <form className={classes.form} >
                          <TextField
                            variant={'outlined'}
                            margin="normal"
                            required
                            fullWidth
                            label={'Username'}
                            name={'username'}
                            type={'text'}
                            autoComplete={'username'}
                            value={user.username}
                            disabled
                          />
                          <TextField
                            variant={'outlined'}
                            margin="normal"
                            required
                            fullWidth
                            label={'First Name'}
                            name={'first_name'}
                            type={'text'}
                            autoComplete={'first_name'}
                            disabled
                            value={user.first_name}
                          />
                          <TextField
                            variant={'outlined'}
                            margin="normal"
                            required
                            fullWidth
                            label={'Last Name'}
                            name={'last_name'}
                            type={'text'}
                            autoComplete={'username'}
                            disabled
                            value={user.last_name}
                          />
                          <TextField
                            variant={'outlined'}
                            margin="normal"

                            fullWidth
                            label={'Email'}
                            name={'email'}
                            type={'email'}
                            autoComplete={'email'}
                            value={user.email}
                            disabled
                          />
                         <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            size={'large'}
                            href={'/updateProfile'}
                          >
                           Update Profile
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
   } else {
      return (

       <HomeContainer>
           <Paper>
               <Container component="main" maxWidth="xs">
                  <div className={classes.paper}>
                       <Typography>
                           Something is wrong and nothing is loading!
                       </Typography>
                  </div>
                </Container>
           </Paper>
       </HomeContainer>

  );
  }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, { getUserProfile } )(UserProfile);