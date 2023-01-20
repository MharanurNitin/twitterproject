import React from 'react'
import style from "./rightsection.module.css";
import SearchIcon from "@mui/icons-material/Search";
function Rightsection() {
  return (
    <div className={style.widgets__container}>
      <div className={style.widgets__input}>
        <SearchIcon className={style.widgets__searchIcon} />
        <input placeholder="Search Twitter" type="text" />
      </div>
    </div>
  );
}

export default Rightsection