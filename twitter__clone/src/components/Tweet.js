import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Profile from "./Profile.png"
import style from "./Tweet.module.css"
// import Input from "./Input";
import {CiImageOn,CiLocationOn} from 'react-icons/ci'
import {AiOutlineFileGif,AiOutlineSchedule} from 'react-icons/ai'
import {CgPoll} from 'react-icons/cg'
import {GrEmoji} from 'react-icons/gr'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
          
            left: -190,
            top: -15,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Tweet() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Tweet
      </Button>

      <BootstrapDialog
        PaperProps={{ style: { borderRadius: "1rem" } }}
        className={style.dialogbox}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title">
          <CloseIcon onClose={handleClose} />
        </BootstrapDialogTitle>
        <div className={style.container}>
          <div className={style.Container1}>
            <img
              src="https://imgs.search.brave.com/F1jG4f5hyN3hn_Q1t-BCS6YOzBwCel29npXrBHOUIyc/rs:fit:855:935:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/bWN1ZmYvaW1hZ2Vz/LzkvOWMvUm9tYW5f/cmVpZ25zX3BuZ193/d2VfMjAyMF9ieV92/X21venpfZGU3ZDhw/ay1wcmUucG5nL3Jl/dmlzaW9uL2xhdGVz/dD9jYj0yMDIwMTAy/NTE3MTgzNA"
              width={45}
              height={45}
            />
            {/* <button className={style.button}>Everyone </button> */}
            {/* < */}
            <select className={style.selectbtn}>
              <option value="Everyone">Everyone</option>
              <option value="Twitter-circle">Twitter-circe</option>
            </select>
          </div>
          <div className={style.Container2}>
            <textarea
              className={style.textarea}
              type="text"
              placeholder="What'happening?"
              rows="4"
              cols="50"
            ></textarea>
            <button className={style.button1}>🌍 Everyone can reply</button>
            <hr />
          </div>
          <div className={style.footerIcon}>
            <div className={style.icon}>
              <CiImageOn />
              <AiOutlineFileGif />
              <CgPoll />
              <GrEmoji />
              <AiOutlineSchedule />
              <CiLocationOn />
            </div>
            <button className={style.button2}>Tweet</button>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}