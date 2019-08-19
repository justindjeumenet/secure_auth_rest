import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Title from "./Title";
import {Paper, Typography} from "@material-ui/core";
import { reduxForm } from "redux-form";
import { activateUserAccount } from "../actions/authActions";
import HomeContainer from "./HomeContainer";



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

function AccountActivationComponent(props) {
  const classes = useStyles();
   const { handleSubmit, error} = props;
   return (
       <HomeContainer>
           <Paper>
               <Container component="main" maxWidth="xs">
                  <div className={classes.paper}>
                    <Title/>
                    <Title className={classes.topSpace}>Activate your account</Title>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Typography>
                            Please activate your account by clicking on the button below
                        </Typography>
                        <Typography>
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
                        Activate
                      </Button>
                    </form>
                  </div>
                </Container>
           </Paper>
       </HomeContainer>
  );
}

export default reduxForm({
    form: "user_account_activation",
    onSubmit: activateUserAccount,
})(AccountActivationComponent);