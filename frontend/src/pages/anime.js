import React, { useEffect, useState } from "react";
import Content from "../components/Content";
import { api } from "../api";

export const Anime = (props) => {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get("/anime/details/" + props.match.params.id);
      document.getElementById("");
      setAnime(request.data);
      console.log(request.data);
    }
    fetchData();
  }, []);

  return (
    <>
      {anime && Object.keys(anime).length === 0 ? null : (
        <>
          <div className="anime__cover-conainer">
            <div className="anime__cover-left">
              <img
                className="anime__poster"
                src={anime.attributes.posterImage.original}
                alt={anime.attributes.titles.en_jp}
              />
            </div>
            <div className="anime__cover-right">
              <div className="anime__header">
                <div className="anime__header__title">
                  {anime.attributes.titles.en_jp}
                </div>
                <span className="anime__header__rate">
                  {anime.attributes.averageRating} / 100
                </span>
              </div>
              <div className="anime__body">
                <div className="anime__body__description">
                  {anime.attributes.synopsis}
                </div>
              </div>
            </div>
          </div>
          <div className="anime__rest">
            <div className="anime__left">left</div>
            <div className="anime__right">
              <div className="tabs-container">
                <div className="tabs">
                  <div className="tab">Test</div>
                  <div className="tab">Test</div>
                  <div className="tab">Test</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
