import footerTopLinks from "../data/footerTopLinksData";

export default function FooterTop() {
  return (
    <div className="footer-top">
      <div className="container">
        <ul>
          {footerTopLinks.map((link) => (
            <li key={link.id}>
              <img src={link.imgSrc} alt={link.text} />
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
