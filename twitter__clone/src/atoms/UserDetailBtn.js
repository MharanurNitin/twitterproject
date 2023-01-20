import React from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import style from './userDetailBtn.module.css'
function UserDetailBtn({userName,Name,src}) {
  return (
    <div className={style.UserDetailBtn}>
        <div className={style.userImage}>
            <img src={src} alt={Name} />
        </div>
        <div className={style.userInfo}>
        <h4>{Name}</h4>
        <p>{userName}</p>
        </div>
        <MoreHorizIcon />
    </div>
  )
}

export default UserDetailBtn