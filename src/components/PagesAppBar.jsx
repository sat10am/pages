import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Menu';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  hidden: {
    display: 'none',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

export default function PagesAppBar({ loading, hideToolbar , onClickAdd }) {
  const classes = useStyles();

  return (
    <div id="AppBar" className={classes.root}>
      { loading && <LinearProgress />}
      <AppBar>
        <Toolbar className={hideToolbar ? classes.hidden : '' }>
          <Typography variant="h6" className={classes.title}>
            Sat10AM.Pages
          </Typography>
          <IconButton onClick={onClickAdd} edge="end" color="inherit" aria-label="add">
            <AddIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}