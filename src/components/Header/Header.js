import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <b>Movie App</b>
    </span>
  );
};


export default Header;
