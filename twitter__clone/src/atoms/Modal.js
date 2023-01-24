import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import style from "./modal.module.css";
import { CiImageOn, CiLocationOn } from "react-icons/ci";
import { AiOutlineFileGif, AiOutlineSchedule } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { CgPoll } from "react-icons/cg";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../recoilAtom/modalAtom";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function Modal() {
   const [isOpen, setIsOpen] = useRecoilState(modalState);
   const [postId, setPostId] = useRecoilState(postIdState);
   const [comments, setComments] = React.useState([]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* add here comment Icon */}
      <ModeCommentOutlinedIcon
      
      />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        ></BootstrapDialogTitle>
        <DialogContent dividers></DialogContent>
        <DialogActions>
          <div className={style.footerIcon}>
            <div className={style.icon}>
              <CiImageOn />

              <AiOutlineFileGif />
              <CgPoll />

              <GrEmoji />
              <AiOutlineSchedule />
              <CiLocationOn />
            </div>
            <button className={style.button2} onClick={handleClose}>
              Tweet
            </button>
          </div>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
