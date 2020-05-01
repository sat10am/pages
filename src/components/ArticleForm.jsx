import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  urlTextField: {
    flexGrow: 1
  }
}));

export default function ArticleForm({authorName, onClickAdd, openModal}) {
  const classes = useStyles();

  const authorInputRef = useRef();
  const urlInputRef = useRef();
  const titleInputRef = useRef();
  const thumbnailInputRef = useRef();
  const descriptionInputRef = useRef();

  
  return (
    <Modal
          open={openModal}
          onClose={() => this.setOpenArticleFormPopup(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        label="Author Name"
        value={authorName}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField 
        label="Url"
        inputRef={urlInputRef}
      />
      <TextField 
        label="Title"
        inputRef={titleInputRef}
      />
      <TextField 
        label="Thumbnail"
        inputRef={thumbnailInputRef}
      />
      <TextField 
        label="Description"
        inputRef={descriptionInputRef}
        helperText="URL을 확인해주세요."
        multiline
      />
      <Button variant="contained" color="primary" onClick={() => {
        onClickAdd(authorInputRef.value, urlInputRef.value)
      }}>저장하기</Button>
    </form>
      </Modal>
  );
}