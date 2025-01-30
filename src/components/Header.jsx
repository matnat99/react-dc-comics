import navHeaderLinks from "../data/navHeaderLinksData";

export default function Header() {
  return (
    <header className="container">
      <img src="/img/dc-logo.png" alt="Logo DC" />
      <nav className="header-nav">
        <ul>
          {navHeaderLinks.map((link) => (
            <li key={link.id} className={link.current ? "active" : ""}>
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
