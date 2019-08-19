import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Title from "./Title";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import * as routes from '../routes'


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  cardAction : {
    marginLeft: 80,
    marginBottom: 20,
  },
  cardActionButton : {
    marginLeft: 30,
  },
  textDeco: {
    textDecoration: 'None',
    color: '#ff2060'
  },
  textDecor: {
    textDecoration: 'None',
    color: '#fff'
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
     <Container component="main" maxWidth="xs">
        <Card className={classes.card}>
          <CardContent>
            <Title> Secure Authentication System</Title>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              I made this with React Hooks, Django 2.2, Rest Framework, Rest-Auth, Redux, Redux-thunk
              Material-UI, SQLite, React-Redux, anymail, ...etc. Take it for free if you love it.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              All functionality for a good authentication. Register and receive an email for an activation;
              Activate your email before you sign in, you can reset your password event you forgot the old one without signing.
            </Typography>
          </CardContent>
          <CardActions  disableSpacing={true} className={classes.cardAction}>
            <Button size="medium" color="primary">
              <Link className={classes.textDeco} to={routes.SIGN_IN}> Login</Link>
            </Button>
            <Button size="medium" color="primary" variant={'contained'} className={classes.cardActionButton}>
                <Link className={classes.textDecor} to={routes.SIGN_UP}> Register </Link>
            </Button>
          </CardActions>
        </Card>
     </Container>
  );
}
