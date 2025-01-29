export default function Header() {
  return (
    <header className="container">
      <img src="/img/dc-logo.png" alt="Logo DC" />
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#">CHARACTERS</a>
          </li>
          <li className="active">
            <a href="#">COMICS</a>
          </li>
          <li>
            <a href="#">MOVIE</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">GAMES</a>
          </li>
          <li>
            <a href="#">COLLECTIBLES</a>
          </li>
          <li>
            <a href="#">VIDEOS</a>
          </li>
          <li>
            <a href="#">FAN</a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">SHOP</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
