import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ArticleForm({onClickAdd}) {
  const classes = useStyles();
  const inputRef = useRef();
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        id="standard-basic" 
        label="Standard"
        inputRef={inputRef}
      />
      <IconButton aria-label="delete">
        <AddIcon onClick={() => {
          onClickAdd(inputRef.value)
        }}/>
      </IconButton>
    </form>
  );
}