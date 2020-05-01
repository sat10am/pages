import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ArticleItem from './ArticleItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ArticleList({list }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {list.map((item, idx) => <ArticleItem key={item.id} item={item} />)}
    </List>
  );
}