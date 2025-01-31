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
                  {col.lists.map((list) => (
                    <div key={list.id}>
                      {list.title && <h4>{list.title}</h4>}
                      <ul>
                        {list.links.map((link) => (
                          <li key={link.id}>
                            <a href={link.url}>{link.text}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
