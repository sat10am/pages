import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '2 0 auto'
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function ArticleItem({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
      <CardMedia
        className={classes.cover}
        image={item.thumbnail}
        title={item.title}
      />
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {item.content}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
