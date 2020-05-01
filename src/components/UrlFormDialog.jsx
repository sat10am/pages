import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: '10px',
    right: '10px',
    margin: '0 auto'
  },
  hidden: {
    display: 'none'
  }
}));

export default function UrlFormDialog({ appBarShowing, authorName, onClickSubmit }) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);
  const [authorNameInputValue, setAuthorNameInputValue] = React.useState(authorName || '')
  const [urlInputValue, setUrlInputValue] = React.useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Fab 
        color="secondary" 
        aria-label="add" 
        className={`${classes.fabButton} ${appBarShowing ? '' : classes.hidden}`}
        onClick={handleClickOpen}
      >
        <SendIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Url을 공유하자</DialogTitle>
        <DialogContent>
          <DialogContentText>
            저장할 링크를 입력해주세요.
          </DialogContentText>
          <TextField
            autoFocus={!authorName}
            margin="dense"
            id="name"
            label="Author"
            type="text"
            fullWidth
            value={authorNameInputValue}
            error={!authorNameInputValue}
            onChange={(e) => {
              setAuthorNameInputValue(e.target.value)
            }}
          />
          <TextField
            autoFocus={!!authorName}
            margin="dense"
            id="name"
            label="Url"
            type="url"
            fullWidth
            value={urlInputValue}
            error={!urlInputValue}
            onChange={(e) => {
              setUrlInputValue(e.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {
            if (!authorNameInputValue || !urlInputValue) {
              return
            }
            
            handleClose();
            onClickSubmit(authorNameInputValue, urlInputValue);
            setAuthorNameInputValue('')
            setUrlInputValue('')
          }} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
