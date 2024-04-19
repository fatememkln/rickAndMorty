import "./App.css";
import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(data.results);
      } catch (err) {
        toast.error(err.response.data.error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="app">
      <Toaster />
      <Navbar />
      <div className="main">
        <CharacterList characters={characters} isLoading={isLoading} />
        <CharacterDetail />
      </div>
    </div>
  );
}

export default App;
