import { HeartIcon } from "@heroicons/react/24/outline";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">logo</div>
      <input type="text" className="text-field" placeholder="search" />
      <div className="navbar__result">result</div>
      <button className="heart">
        <HeartIcon className="icon" />
        <span className="badge">3</span>
      </button>
    </nav>
  );
}

export default Navbar;
