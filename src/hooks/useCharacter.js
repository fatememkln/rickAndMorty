import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function useCharacter(url, query) {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

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

  return { isLoading, characters };
}
