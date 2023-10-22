import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const DialogPopUp = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      id="dialogPopUp"
      style={{ width: "100%" }}
      fullWidth={true}
    >
      <DialogTitle id="alert-dialog-title">{props.DialogTitle}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={props.handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.DialogContent}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleYes}>Yes</Button>
        <Button onClick={props.handleNo} autoFocus>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogPopUp;
