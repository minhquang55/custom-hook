import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(url).then((res) => {
      return res.json();
    });
    setData(response);
    setIsLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading };
};
