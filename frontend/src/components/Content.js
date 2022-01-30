import axios from "axios";
import React, { useEffect, useState } from "react";
import {api} from "./../api/";
import { AnimeTops } from "./AnimeTops";

const Content = ({ url }) => {
  const [animes, setAnimes] = useState([]);

  return (
    <div className="content">
      <div className="section_title ml-10">Trending This Week:</div>
      <AnimeTops url={"trending"}/>
{/*       <div className="section_title ml-10">Top 10 Popular Animes:</div>
      <AnimeTops url={"top_anime"}/>
      <div className="section_title ml-10">Top 10 Movies Animes:</div>
      <AnimeTops url={"top_movies"}/> */}
    </div>
  );
};

export default Content;
