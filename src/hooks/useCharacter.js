import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function useCharacter(url, query) {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}=${query}`, { signal });
        setCharacters(data.results);
      } catch (err) {
        if (!axios.isCancel()) {
          setCharacters([]);
          console.log(err.response.data.error);
          toast.error(err.response.data.error);
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [query]);

  return { characters, isLoading };
}
