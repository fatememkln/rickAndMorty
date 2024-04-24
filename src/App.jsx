import "./App.css";
import Navbar, { Search, SearchResualt, Favourites } from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import useCharacter from "./hooks/useCharacter";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const { isLoading, characters } = useCharacter(
    "https://rickandmortyapi.com/api/character/?name",
    query
  );
  const [selectedId, setSelectedId] = useState(null);
  const [favourites, setFavourites] = useState([]);

  const handleSelectCharater = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  const handleAddFavourites = (char) => {
    setFavourites((prevFav) => [...prevFav, char]);
  };

  const isAddToFavourites = favourites
    .map((fav) => fav.id)
    .includes(selectedId);

  return (
    <div className="app">
      <Toaster />
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <SearchResualt numOfResult={characters.length} />
        <Favourites numOfFavourites={favourites.length} />
      </Navbar>
      <div className="main">
        <CharacterList
          selectedId={selectedId}
          characters={characters}
          isLoading={isLoading}
          onSelectCharacter={handleSelectCharater}
        />
        <CharacterDetail
          selectedId={selectedId}
          onAddFavourites={handleAddFavourites}
          isAddToFavourites={isAddToFavourites}
        />
      </div>
    </div>
  );
}

export default App;
