import React from 'react' 
import style from './leftsection.module.css' 
// import { Button } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import CustomButton from '../atoms/CustomButton';
import UserDetailBtn from '../atoms/UserDetailBtn';
import Tweet from '../components/Tweet';
 let sidebarData = [
  {
    title: "Home",
    Icon: <HomeIcon />,
  },
  {
    title: "Explore",
    Icon: <TagIcon />,
  },
  {
    title: "Notifications",
    Icon: <NotificationsNoneIcon />,
  },
  {
    title: "Messages",
    Icon: <MailOutlineIcon />,
  },
  {
    title: "Bookmarks",
    Icon: <BookmarkBorderIcon />,
  },
  {
    title: "Lists",
    Icon: <ListAltIcon />,
  },
  {
    title: "Identity",
    Icon: <PermIdentityIcon />,
  },
  {
    title: "More",
    Icon: <MoreHorizIcon />,
  },
];



function Leftsection() {
  return (
    <div className={style.sidebar}>
      <TwitterIcon className={style.twitterIcon} />
      {sidebarData.map((el, index) => {
        return (
          <div className={style.sidebarOption}>
            {el.Icon}
            <h4>{el.title}</h4>
          </div>
        );
      })}
      {/* <CustomButton title="Tweet" classname={style.tweetBtn} /> */}
      <Tweet/>
      <UserDetailBtn style={{color:"red"}}
        Name="Nitin Mharanur"
        userName="@IamNitin"
        src="https://imgs.search.brave.com/F1jG4f5hyN3hn_Q1t-BCS6YOzBwCel29npXrBHOUIyc/rs:fit:855:935:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/bWN1ZmYvaW1hZ2Vz/LzkvOWMvUm9tYW5f/cmVpZ25zX3BuZ193/d2VfMjAyMF9ieV92/X21venpfZGU3ZDhw/ay1wcmUucG5nL3Jl/dmlzaW9uL2xhdGVz/dD9jYj0yMDIwMTAy/NTE3MTgzNA"
      />
    </div>
  );
}

export default Leftsection