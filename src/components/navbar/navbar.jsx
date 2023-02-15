import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dog Gallery</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
      </div>
    </nav>
  )
}

export default Navbar
