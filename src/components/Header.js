import logo from '../assets/images/logo.png'

function Header() {
  return (
    <div className="Header">
      <header>
        <img src={logo} alt='Site Logo'/>
      </header>
    </div>
  );
}

export default Header;
