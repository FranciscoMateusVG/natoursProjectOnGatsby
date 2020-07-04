import React from "react"
import Image from "./Image"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <Image imagem="logo2" />
      </div>

      <div className="footer__container">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/#" className="footer__link">
                Company
              </a>
            </li>
            <li className="footer__item">
              <a href="/#" className="footer__link">
                Contact us
              </a>
            </li>
            <li className="footer__item">
              <a href="/#" className="footer__link">
                Careers
              </a>
            </li>
            <li className="footer__item">
              <a href="/#" className="footer__link">
                Privacy Policy
              </a>
            </li>
            <li className="footer__item">
              <a href="/#" className="footer__link">
                Terms
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__copyright">
          Designed by <b> Jonas Schmedtmann </b> for his online course Advanced
          CSS and Sass. Copyright &copy; by Jonas Schmedtmann. Adapted to the
          Gatsby framework and flex box orientation by <b> Francisco Mateus</b>.
          Copyright &copy; by Francisco Mateus
        </p>
      </div>
    </footer>
  )
}

export default Footer
