import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import sat10amlogo from '../sat10amlogo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  thumbnail: {
    width: 151,
    height: 151,
    display: 'inline-block',
    marginRight: 10
  },
  details: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    width: '100%',
  },
  content: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: 'calc(100% - 161px)',
    height: 151,
    maxHeight: 151
  }
}));

export default function ArticleItem({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <a 
        href={item.url.address} 
        className={classes.details}
      >
        <CardContent>
          <img
            className={classes.thumbnail}
            src={item.thumbnail || sat10amlogo}
            title={item.title}
            alt={item.title}
          />
          <div className={classes.content}>
            <Typography component="h5" variant="h5">
              {item.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {item.description}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {new Date(item.created_at).toDateString()}
            </Typography>
          </div>
        </CardContent>
      </a>
    </Card>
  );
}
