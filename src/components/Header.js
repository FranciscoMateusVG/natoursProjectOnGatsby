import React from "react"
import Imagem from "./Image"
import Navigation from "../components/Navigation"

const Header = () => (
  <header className="header">
    <div className="header__logo-box">
      <Imagem imagem="logo"></Imagem>
    </div>

    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">outdoors</span>
        <span className="heading-primary--sub">is where life happens</span>
      </h1>

      <a href="/#" className="btn btn--white btn--animated">
        Discover Our Tours
      </a>
    </div>
  </header>
)

export default Header
