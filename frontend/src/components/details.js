import React, { useEffect, useState } from "react";
import {api} from "./../api";
import { useParams } from "react-router";

const Details = ({ url }) => {
  const [details, setDetails] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const request = await api.get(url + "?id=" + id);
      setDetails(request.data);
      console.log(request);
      return request;
    }
    fetchData();
  }, [url]);

  return (
    <div className="content">
      <img alt="" width="100%" src={details.image_url}></img>
      <div className="details__info"></div>
    </div>
  );
};

export default Details;
