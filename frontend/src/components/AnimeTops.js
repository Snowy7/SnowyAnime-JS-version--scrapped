import React, { useState, useEffect } from "react";
import { api } from "./../api/";

export const AnimeTops = ({ url }) => {
  const [animes, setAnimes] = useState([]);
  const [genras, setGenras] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await api.get("/top/"+url);
      setAnimes(request.data);
      return request;
    }
    fetchData();
  }, [url]);

  useEffect(() => {
    let gen = [];
    async function fetchCategories(id) {
      const request = await api.get("/anime/categories/"+id);
      gen[id] = request.data.slice(0, 2);
    }
    Promise.all(animes.map(anime => fetchCategories(anime.id))).then(()=> {
      console.log(gen);
      setGenras(gen);
    })
  }, [animes]);


  return (
    <div className="sm:grid sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-6 3xl:flex flex-warp flex-row justify-center p-3 pt-7 ml-10">
      {animes.map((anime) => (

        <a href={"anime/" + anime.id} className="anime-card mr-2 mb-5">
          <div className="cover-container">
{/*             <div className="overlay genre rank">#{anime.rank}</div>
 */}            <img alt="" width="100%" src={anime.attributes.posterImage.original}></img>
          </div>

          <div className="info-container">
            <div className="title">{anime.attributes.titles.en_jp}</div>
            <div className="genras-contianer">
              {genras.length > 0 ? 
              (genras[anime.id].map((genra) =>(
                <div className="genre">{genra.attributes.title}</div>
              ))) : null}
              
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
