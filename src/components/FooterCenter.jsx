import footerCenterLinks from "../data/footerCenterLinksData";

export default function FooterCenter() {
  return (
    <div className="footer-center">
      <div className="container">
        <div className="footer-center-flex">
          <nav className="footer-nav">
            {footerCenterLinks.map((col) => {
              return (
                <div className="col" key={col.id}>
                  <h4>{col.title}</h4>
                  <ul>
                    {col.links.map((link) => {
                      return (
                        <li key={link.id}>
                          <a href={link.url}>{link.text}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </nav>
          <div className="img-container"></div>
        </div>
      </div>
    </div>
  );
}
