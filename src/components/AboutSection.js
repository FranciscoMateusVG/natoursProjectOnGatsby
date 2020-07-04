import React from "react"
import Image from "./Image"

const AboutSection = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-botom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="section-about-flex-content">
        <div className="section-about-flex-content-1">
          <h3 className="heading-tertiary u-margin-botom-small">
            You are going to fall in love with nature
          </h3>

          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit
            dolorum eligendi eius rerum, omnis facere at beatae consectetur non
            eos molestiae, laudantium odio tenetur dicta id minima eaque cumque.
          </p>

          <h3 className="heading-tertiary u-margin-botom-small">
            Live adventures like you never have before
          </h3>

          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit
            dolorum eligendi eius rerum, omnis facere at beatae consectetur non
            eos molestiae, laudantium odio tenetur dicta id minima eaque cumque.
          </p>

          <a href="/#" className="btn-text">
            Learn More &rarr;
          </a>
        </div>

        <div className="section-about-flex-content-2">
          <div className="composition">
            <Image
              imagem="nat1"
              classe="composition__photo composition__photo--p1"
            />

            <Image
              imagem="nat2"
              classe="composition__photo composition__photo--p2"
            />
            <Image
              imagem="nat3"
              classe="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
