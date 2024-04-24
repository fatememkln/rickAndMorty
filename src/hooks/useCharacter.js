import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

export default function useCharacter(url, query) {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}=${query}`);
        setCharacters(data.results);
      } catch (err) {
        setCharacters([]);
        // console.log(err.response.data.error);
        toast.error(err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return { isLoading, characters };
}
