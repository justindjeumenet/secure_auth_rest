import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Close from '@material-ui/icons/Close'
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import * as routes from '../routes'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Grid container direction={'row'} justify={'space-between'} alignItems={'baseline'} spacing={4}>
          <Grid item>
             <Typography variant="h5" component="h3">
                Great!
              </Typography>
          </Grid>
          <Grid item>
            <Link to={routes.SIGN_IN}>
              <Close color={'primary'}/>
            </Link>
          </Grid>
        </Grid>
        <Typography component="p">
          A password reset email has been sent to you. Please follow the instructions to reset your password.
        </Typography>
      </Paper>
    </div>
  );
}
