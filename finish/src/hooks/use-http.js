import { useEffect, useState } from "react";

const useHttp = () => {
  const [data, setData] = useState({});
  const getData = async (url) => {
    const result = await fetch(url);

    setData(result);
  };
  useEffect(() => {});
  return { data, getData };
};

export default useHttp;
