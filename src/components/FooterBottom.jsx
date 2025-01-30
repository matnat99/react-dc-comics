import footerBottomLinks from "../data/footerBottomLinksData";

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="container">
        <div className="footer-bottom-flex">
          <div>
            <button>SIGN-UP NOW!</button>
          </div>
          <div className="follow-us">
            <h3>FOLLOW US</h3>
            <ul>
              {footerBottomLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>
                    <img src={link.src} alt={link.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
