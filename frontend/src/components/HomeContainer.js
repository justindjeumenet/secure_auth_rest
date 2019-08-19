import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
    heightCenter: {
     height: '100vh',
     zIndex: -99999,
  },
  boxPositionLeft: {
     position: 'absolute',
     left: 0,
     height: '100vh',
     zIndex: -1000,
     width: '50vw',
     backgroundColor: '#fff'
  },
  boxPositionRight: {
     position: 'absolute',
     right: 0,
     height: '100vh',
     zIndex: -1000,
     width: '50vw',
     backgroundColor: '#ff2060',
    //  backgroundColor: 'rgba(221,59,96,0.88)'
  },
}));

export default function HomeContainer(props) {
  const classes = useStyles();
  const {children} = props;

  return (
    <div className={classes.root}>
      <Grid container justify={'center'} alignItems={'center'} className={classes.heightCenter}>
        <Grid item>
            {children}
        </Grid>
      <Box className={classes.boxPositionLeft}/>
      <Box className={classes.boxPositionRight}/>
     </Grid>
    </div>
  );
}
