import React, { useState, useEffect } from 'react';
import './signin.scss'
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyIcon from '@mui/icons-material/Key';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { checkCredentials } from '../../Auth';

export default function SignIn({ setLoggedIn }) {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState('paper');
  const [username, setUsername] = useState('');
  const [repoPATToken, setRepoPATToken] = useState('');
  const [loggedIn, setLoggedInState] = useState(localStorage.getItem('loggedIn') === 'true');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    const user = checkCredentials(username, repoPATToken);

    if (user) {
      // Sign-in successful
      console.log('User signed in:', user);
      // Perform any additional actions after successful sign-in

      // Set the logged-in state
      setLoggedInState(true);
      localStorage.setItem('loggedIn', 'true');
    } else {
      // Invalid credentials
      console.error('Username or token does not match');
      // Show an error message to the user (you can use a toast or a Snackbar component)
    }

    // Close the dialog
    setOpen(false);
    setUsername('');
    setRepoPATToken('');
  };

  const handleSignOut = () => {
    setLoggedInState(false);
    localStorage.setItem('loggedIn', 'false');
  };

  useEffect(() => {
    setLoggedIn(loggedIn);
  }, [loggedIn, setLoggedIn]);

  return (
    <div>
      {loggedIn ? (
          <div className="header-page-top-right">
          <div className="header-page-top-right-user-icon"><AccountCircleIcon /></div>
          <div className="header-page-top-right-user-options-container">
              <div className="header-page-top-right-user-option option-1">Account</div>
              <div className="header-page-top-right-user-option option-2">Settings</div>
              <div onClick={handleSignOut} className="header-page-top-right-user-option option-3">Sign Out</div>
          </div>
      </div>
      ) : (
        <div className="header-page-top-right-signedin">
        <Button onClick={handleClickOpen('paper')} sx={{ color: 'black' }}>
          <AccountCircleIcon />
          Sign In
        </Button>
        </div>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <TextField
                id="input-with-icon-textfield"
                label="Username"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Box>

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <TextField
                id="input-with-icon-textfield"
                label="PAT Token"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                value={repoPATToken}
                onChange={(e) => setRepoPATToken(e.target.value)}
              />
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Sign In</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
