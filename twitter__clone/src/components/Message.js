import React, { useRef, useState } from "react";
import "./Message.css";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ScreenRotationAltIcon from "@mui/icons-material/ScreenRotationAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import IosShareIcon from "@mui/icons-material/IosShare";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import Moment from "react-moment";
import {useRecoilState} from "recoil";
import {modalState,postIdState} from "../recoilAtom/modalAtom";
import {useNavigate} from "react-router-dom";
import Modal from "../atoms/Modal";


function Message({ name, text,date,tweetImg,id }) {
  const [like,setLike]=useState({value:0,liked:false});
  const [isOpen,setIsOpen]=useRecoilState(modalState);
  const [postId,setPostId]=useRecoilState(postIdState);
  const [comments,setComments]=useState([]);
  const navigate=useNavigate();

    function handleLike(e){
      e.stopPropagation();
     if(like.liked){
        setLike({ ...like, value:like.value-1, liked: false });
     }else{
        
        setLike({...like,value:like.value+1,liked:true})
     }

    }
  return (
    <div
      className="message__container"
      onClick={() => {
        navigate(`/${name}-${id}`);
      }}
    >
      <div className="userImage">
        <img src="https://imgs.search.brave.com/9R-ArjBRk3aal-UDNA2FjQuL9s6z1hAx5xEMzbAji1A/rs:fit:1024:1028:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2Qw/MWRjMGI1LTZmZjAt/NDhmYy04MjUzLTJj/M2RmMDMyOTE1Ni9k/Ym12eWtzLWVhY2Zi/OTUwLTYwYjMtNDU5/OS05OGIxLTQ4NWY4/NDBlNWE1OS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2lJc0ltbHpj/eUk2SW5WeWJqcGhj/SEE2SWl3aWIySnFJ/anBiVzNzaWNHRjBh/Q0k2SWx3dlpsd3Za/REF4WkdNd1lqVXRO/bVptTUMwME9HWmpM/VGd5TlRNdE1tTXpa/R1l3TXpJNU1UVTJY/QzlrWW0xMmVXdHpM/V1ZoWTJaaU9UVXdM/VFl3WWpNdE5EVTVP/UzA1T0dJeExUUTRO/V1k0TkRCbE5XRTFP/UzV3Ym1jaWZWMWRM/Q0poZFdRaU9sc2lk/WEp1T25ObGNuWnBZ/MlU2Wm1sc1pTNWti/M2R1Ykc5aFpDSmRm/US5md1JZUHZKdkRq/S3BhaU5ZYXYxWDMt/UXZHNjJDUEN0WjNs/YjltSlpkSDNR" />
      </div>
      <div className="message__body">
        <div className="userName">
          {name} {date}
        </div>
        <div className="message__text">{text}</div>
        <div className="message__image">
          {tweetImg && <img src={tweetImg} alt={tweetImg} />}
        </div>
        <div className="message__icons">
          <div
            className="reply">
            {/* <ModeCommentOutlinedIcon title="comment"/> */}
            <Modal id={id}/>
            {comments.length > 0 ? <p>{comments.length}</p> : null}
          </div>
          <div className="retweet" title="retweet">
            <ScreenRotationAltIcon />
            <p>0</p>
          </div>
          <div className="like" title="like" onClick={handleLike}>
            {like.liked ? (
              <FavoriteIcon className="likebtnpink" />
            ) : (
              <FavoriteBorderIcon className="likebtn" />
            )}

            {like.value > 0 ? <p>{like.value}</p> : null}
          </div>
          <div className="view" title="views">
            <LeaderboardIcon />
            <p>0</p>
          </div>
          <div className="share" title="share">
            <IosShareIcon />
          </div>
          <div className="tip">
            <ChangeHistoryIcon />
            <p>Tip</p>
          </div>
        </div>
     
      </div>
  
    </div>
  );
}

export default Message;
