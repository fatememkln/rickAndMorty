import { HeartIcon } from "@heroicons/react/24/outline";

export default function Navbar({ children }) {
  return (
    <nav className="navbar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return <div className="navbar__logo">logo</div>;
}

export function Search({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      className="text-field"
      placeholder="search"
    />
  );
}

export function SearchResualt({ numOfResult }) {
  return <div className="navbar__result">found {numOfResult} characters</div>;
}

export function Favourites({numOfFavourites }) {
  return (
    <button className="heart" >
      <HeartIcon className="icon" />
      <span className="badge">{numOfFavourites}</span>
    </button>
  );
}
