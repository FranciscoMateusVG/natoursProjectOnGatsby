import React from "react"
import Header from "../components/Header"
import AboutSection from "../components/AboutSection"
import FeaturesSection from "../components/FeaturesSection"
import ToursSection from "../components/ToursSection"
import StoriesSection from "../components/StoriesSection"
import PopUp from "../components/PopUp"
import BookSection from "../components/BookSection"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import "../sass/main.scss"
import { Helmet } from "react-helmet"

const IndexPage = () => (
  <>
    <Helmet defer={false}>
      <title>Natours Project</title>
    </Helmet>

    <Header />
    <Navigation />
    <main>
      <AboutSection />
      <FeaturesSection />
      <ToursSection />
      <StoriesSection />
      <BookSection />
      <PopUp />
    </main>
    <Footer />
  </>
)

export default IndexPage
