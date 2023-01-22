import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-main">
      <div className="nav-left">
        <h1>Task App</h1>
      </div>
      <div className="nav-right">
        <button>Menu</button>
      </div>
    </nav>
  );
}

export default NavBar;
