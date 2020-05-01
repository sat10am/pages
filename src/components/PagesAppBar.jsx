import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import LinearProgress from '@material-ui/core/LinearProgress';
import ArticleForm from './ArticleForm';

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

export default function PagesAppBar({ loading, hideAppBar , onClickAdd }) {
  const classes = useStyles();

  return (
    <div className={classes.root} position="static">
      { loading && <LinearProgress />}
      <AppBar>
        <Toolbar className={hideAppBar ? classes.hidden : '' }>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
        </Toolbar>
        <ArticleForm onClickAdd={onClickAdd}></ArticleForm>
      </AppBar>
    </div>
  );
}