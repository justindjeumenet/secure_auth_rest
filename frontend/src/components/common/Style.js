import { makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({

  heightCenter: {
     height: '100vh',
     zIndex: -99999,
  },
  boxPositionLeft: {
     position: 'absolute',
     left: 0,
     height: '100vh',
     zIndex: 1000,
     width: '50vw',
     backgroundColor: '#fff'
  },
  boxPositionRight: {
     position: 'absolute',
     right: 0,
     height: '100vh',
     zIndex: 1000,
     width: '50vw',
     backgroundColor: 'rgba(221,59,96,0.88)'
  },

});

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff2060',
            dark: "#ff2060",
            contrastText: "#fff",
        },
        secondary:  {
            main: "#2834ff",
            contrastText: "#fff",
        },
        action: {
            hover: "rgba(255,92,87,0.08)",
            active: "rgba(255,92,87,0.2)",
            hoverOpacity: 0.2,
            selected: "rgba(255,92,87,0.14)",
        },
    },

    overrides: {
        MuiCardActionArea : {
            focusVisible: {

            }
        }
    },
});

export {useStyles, theme};