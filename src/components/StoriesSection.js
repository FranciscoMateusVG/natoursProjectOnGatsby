import React from "react"
import Image from "./Image"
require("../images/video.mp4")
require("../images/video.webm")

const StoriesSection = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={require("../images/video.mp4")} type="video/mp4" />
          <source src={require("../images/video.webm")} type="video/webm" />
          Your Browser Is Not Supported!
        </video>
      </div>

      <div className="u-center-text u-margin-botom-small">
        <h2 className="heading-secondary">We make people genuinely happy!</h2>
      </div>
      <div className="section-stories__container">
        <div className="story u-margin-botom-big">
          <figure className="story__shape">
            <Image imagem="nat8" classe="story__img" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-botom-small">
              I had the best week!
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur iusto ab aperiam sequi quidem animi! Temporibus quis
              repellendus incidunt molestiae.
            </p>
          </div>
        </div>
        <div className="story">
          <figure className="story__shape">
            <Image imagem="nat9" classe="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-botom-small">
              WOW! So great, much stuff, much fun!
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur iusto ab aperiam sequi quidem animi! Temporibus quis
              repellendus incidunt molestiae.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text ">
        <a href="/#" className="btn-text">
          Discover all tours &rarr;
        </a>
      </div>
    </section>
  )
}

export default StoriesSection
