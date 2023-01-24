import React, { useEffect, useState, useRef } from "react";
import { CiImageOn, CiLocationOn } from "react-icons/ci";
import { AiOutlineFileGif, AiOutlineSchedule } from "react-icons/ai";
import { CgPoll } from "react-icons/cg";
import { GrEmoji } from "react-icons/gr";
import style from "./middlesection.module.css";
import Message from "../components/Message";
import { nanoid } from "nanoid";

function Middlesection() {
  const [users, setUsers] = useState([]);
  const [tweetText, setTweetText] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const filePickerRef = useRef("");

  const Months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  useEffect(() => {
    let tweets = JSON.parse(localStorage.getItem("users"));

    if (!tweets) {
      localStorage.setItem("users", JSON.stringify([]));
      setUsers([]);
    } else {
      setUsers(tweets);
    }
  }, []);
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  function handleTweet() {
    let newTweet = {
      postId: nanoid(),
      userName: "Nitin Mharanur",
      tweetText: tweetText,
      like: 0,
      date: `${Months[new Date().getMonth()]} ${new Date().getDate()}`,
      comments: [],
      tweetImg: selectedFile,
      userimage:
        "https://imgs.search.brave.com/9R-ArjBRk3aal-UDNA2FjQuL9s6z1hAx5xEMzbAji1A/rs:fit:1024:1028:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMtd2l4bXAtZWQz/MGE4NmI4YzRjYTg4/Nzc3MzU5NGMyLndp/eG1wLmNvbS9mL2Qw/MWRjMGI1LTZmZjAt/NDhmYy04MjUzLTJj/M2RmMDMyOTE1Ni9k/Ym12eWtzLWVhY2Zi/OTUwLTYwYjMtNDU5/OS05OGIxLTQ4NWY4/NDBlNWE1OS5wbmc_/dG9rZW49ZXlKMGVY/QWlPaUpLVjFRaUxD/SmhiR2NpT2lKSVV6/STFOaUo5LmV5Snpk/V0lpT2lKMWNtNDZZ/WEJ3T2lJc0ltbHpj/eUk2SW5WeWJqcGhj/SEE2SWl3aWIySnFJ/anBiVzNzaWNHRjBh/Q0k2SWx3dlpsd3Za/REF4WkdNd1lqVXRO/bVptTUMwME9HWmpM/VGd5TlRNdE1tTXpa/R1l3TXpJNU1UVTJY/QzlrWW0xMmVXdHpM/V1ZoWTJaaU9UVXdM/VFl3WWpNdE5EVTVP/UzA1T0dJeExUUTRO/V1k0TkRCbE5XRTFP/UzV3Ym1jaWZWMWRM/Q0poZFdRaU9sc2lk/WEp1T25ObGNuWnBZ/MlU2Wm1sc1pTNWti/M2R1Ykc5aFpDSmRm/US5md1JZUHZKdkRq/S3BhaU5ZYXYxWDMt/UXZHNjJDUEN0WjNs/YjltSlpkSDNR",
    };
    let tweets = JSON.parse(localStorage.getItem("users"));
    tweets.unshift(newTweet);
    localStorage.setItem("users", JSON.stringify(tweets));
    setUsers(tweets);
    setTweetText("");
    setSelectedFile(null);
  }
  return (
    <div className={style.midddleSection}>
      <div className={style.navbar}>
        <h3>Home</h3>
        <div className={style.tabs}>
          <button className={style.tab}>for you</button>
          <button className={style.tab}>following</button>
        </div>
      </div>
      {/* navbar section ends */}
      <div className={style.subcontainer}>
        <div className={style.Container1}>
          <img
            src="https://imgs.search.brave.com/F1jG4f5hyN3hn_Q1t-BCS6YOzBwCel29npXrBHOUIyc/rs:fit:855:935:1/g:ce/aHR0cHM6Ly92aWdu/ZXR0ZS53aWtpYS5u/b2Nvb2tpZS5uZXQv/bWN1ZmYvaW1hZ2Vz/LzkvOWMvUm9tYW5f/cmVpZ25zX3BuZ193/d2VfMjAyMF9ieV92/X21venpfZGU3ZDhw/ay1wcmUucG5nL3Jl/dmlzaW9uL2xhdGVz/dD9jYj0yMDIwMTAy/NTE3MTgzNA"
            width={50}
            height={50}
          />

          <div className={style.Container2}>
            <textarea
              className={style.textarea}
              type="text"
              placeholder="What'happening?"
              rows="3"
              cols="65"
              value={tweetText}
              onChange={(e) => setTweetText(e.target.value)}
            ></textarea>
            {selectedFile && (
              <div className={style.selectImage}>
                <div onClick={() => setSelectedFile(null)}>
                  <div className={style.cancelSelectImg}>X</div>
                </div>
                <img src={selectedFile} />
              </div>
            )}
          </div>
        </div>
        <div className={style.footerIcon}>
          <div className={style.icon}>
            <div
              className="imgfile"
              onClick={() => filePickerRef.current.click()}
            >
              <CiImageOn />
              <input
                type="file"
                hidden
                onChange={addImageToPost}
                ref={filePickerRef}
              />
            </div>
            <CgPoll />
            <div className="emoji" onClick={() => setShowEmojis(!showEmojis)}>
              <GrEmoji />
            </div>
            <AiOutlineSchedule />
            <CiLocationOn />
          </div>
          <button
            className={style.button2}
            onClick={handleTweet}
            disabled={!tweetText.trim()&&!selectedFile}
          >
            Tweet
          </button>
        </div>
      </div>
      {/* Tweet section starts here */}
      <div className={style.tweetSection}>
        {users.map((user, index) => {
          return (
            <Message
              name={user.userName}
              text={user.tweetText}
              date={user.date}
              tweetImg={user.tweetImg}
              id={user.postId}
            />
          );
        })}
      </div>
      {/* {showEmojis && <Picker/>} */}
    </div>
  );
}

export default Middlesection;
