import React from 'react';
import MaterialUiAppBar from '@material-ui/core/AppBar';
import LinearProgress from '@material-ui/core/LinearProgress';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import sat10amlogo from '../sat10amlogo.png'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    width: '100%',
    zIndex: 1,
    flexGrow: 1,
    backgroundColor: '#FFDF44'
  },
  showing: {
    display: 'block'
  },
  hidden: {
    display: 'none'
  },
  logo: {
    marginRight: theme.spacing(2),
    height: '64px'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    alignItems: 'left'
  }
}));

export default function AppBar({ showing, loading }) {
  const classes = useStyles();

  return (
    <div className={showing ? classes.showing : classes.hidden}>
      <MaterialUiAppBar className={classes.appBar} position="static">
        { loading && <LinearProgress />}
        <Toolbar>
          <img className={classes.logo} src={sat10amlogo} alt="sat10am"></img>
          <Typography className={classes.title} variant="h6" noWrap>
            Pages
          </Typography>
        </Toolbar>
      </MaterialUiAppBar>
    </div>
  );
}