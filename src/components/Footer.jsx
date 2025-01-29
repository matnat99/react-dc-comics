import FooterTop from "./FooterTop";

export default function Footer() {
  return (
    <footer>
      <FooterTop />
      {/* Footer Center */}
      <div className="footer-center">
        <div className="container">
          <div className="footer-center-container">
            <nav className="footer-nav">
              <div>
                <h4>DC COMICS</h4>
                <ul>
                  <li>
                    <a href="#">Characters</a>
                  </li>
                  <li>
                    <a href="#">Comics</a>
                  </li>
                  <li>
                    <a href="#">Movies</a>
                  </li>
                  <li>
                    <a href="#">TV</a>
                  </li>
                  <li>
                    <a href="#">Games</a>
                  </li>
                  <li>
                    <a href="#">Videos</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                </ul>
                <h4>SHOP</h4>
                <ul>
                  <li>
                    <a href="#">Shop DC</a>
                  </li>
                  <li>
                    <a href="#">Shop DC Collectibles</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>DC</h4>
                <ul>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy (New)</a>
                  </li>
                  <li>
                    <a href="#">Add Choices</a>
                  </li>
                  <li>
                    <a href="#">Advertising</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Subscriptions</a>
                  </li>
                  <li>
                    <a href="#">Talent Workshops</a>
                  </li>
                  <li>
                    <a href="#">CPSC Certificates</a>
                  </li>
                  <li>
                    <a href="#">Ratings</a>
                  </li>
                  <li>
                    <a href="#">Shop Help</a>
                  </li>
                  <li>
                    <a href="#">Contact Use</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4>SITES</h4>
                <ul>
                  <li>
                    <a href="#">DC</a>
                  </li>
                  <li>
                    <a href="#">MAD Magazine</a>
                  </li>
                  <li>
                    <a href="#">DC Kids</a>
                  </li>
                  <li>
                    <a href="#">DC Universe</a>
                  </li>
                  <li>
                    <a href="#">DC Power Visa</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="img-container"></div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-container">
            <div>
              <button>SIGN-UP NOW!</button>
            </div>
            <div className="follow-us">
              <h3>FOLLOW US</h3>
              <ul>
                <li>
                  <a href="#">
                    <img src="/img/footer-facebook.png" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/footer-twitter.png" alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/footer-youtube.png" alt="You Tube" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/footer-pinterest.png" alt="Pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/footer-periscope.png" alt="Periscope" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
