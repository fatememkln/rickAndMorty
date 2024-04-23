import "./App.css";
import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";
import CharacterDetail from "./components/characterDetail";
import { useState } from "react";

function App() {

  const {isLoading, characters} = useCharacter(query)
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectCharater = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="app">
      <Toaster />
      <Navbar />
      <div className="main">
        <CharacterList
          selectedId={selectedId}
          characters={characters}
          isLoading={isLoading}
          onSelectCharacter={handleSelectCharater}
        />
        <CharacterDetail selectedId={selectedId} />
      </div>
    </div>
  );
}

export default App;
