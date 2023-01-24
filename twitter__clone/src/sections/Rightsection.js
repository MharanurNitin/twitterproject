import React from 'react'
import style from "./rightsection.module.css";
import SearchIcon from "@mui/icons-material/Search";

let data = [
  { id: 1, type: "sports", name: "suryaKumar Yadav", hashtags: [] },
  {
    id: 2,
    type: "Entertainment",
    name: "shahrukh khan",
    hashtags: ["#boycottpathan"],
  },
  { id: 3, type: "sports", name: "Ajay Devgan", hashtags: ["#BholaTeaser2"] },

  { id: 4, type: "Trending in india", name: "#Thalapathy67", hashtags: [] },

  {
    id: 5,
    type: "Entertainment",
    name: "#Thalapathy67",
    hashtags: ["#NTRGoesGlobal"],
  },

  { id: 6, type: "Trending in India", name: "#NirmalChoudhary", hashtags: ["#NirmalChoudhary"] },
];
function Rightsection() {
  return (
    <div className={style.widgets__container}>
      <div className={style.widgets__container__input}>
        <div className={style.widgets__input}>
          <SearchIcon className={style.widgets__searchIcon} />
          <input placeholder="Search Twitter" type="text" />
        </div>
      </div>
      <div className={style.trending}>
        <div className={style.heading}>
          <h3>Whats happenning</h3>
        </div>

        <div className="trending__data">
          {data.map((data) => {
            <div>
              <p>{data.type}</p>
              <h3>{data.name}</h3>
              {/* {data.hashtags && (
                <p>
                  trendingfor <a href="">{data.hashtags.join(",")}</a>
                </p>
              )} */}
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Rightsection