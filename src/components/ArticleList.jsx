import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ArticleItem from './ArticleItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  showPaddingTop: {
    paddingTop: '64px'
  },
  hidePaddingTop: {
    paddingTop: 0
  },
  inline: {
    display: 'inline',
  },
}));

export default function ArticleList({ showPaddingTop, list }) {
  const classes = useStyles();

  return (
    <List className={`${classes.root} ${showPaddingTop ? classes.showPaddingTop : classes.hidePaddingTop}`} >
      {list.map((item) => <ArticleItem key={item.id} item={item} />)}
    </List>
  );
}