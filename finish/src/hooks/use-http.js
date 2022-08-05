import axios from "axios";
import { useEffect, useState } from "react";

const useHttp = () => {
  const [data, setData] = useState([]);
  const getData = async (url) => {
    const result = await axios(url).then(response => response.data)

    setData(result);
  };
  useEffect(() => {});
  return { data, getData };
};

export default useHttp;
