import React from "react"

const ToursSection = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-botom-small">
        <h2 className="heading-secondary">Most Popular Tours</h2>
      </div>

      <div className="section-tours__container">
        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__picture card__picture--1"></div>
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--1">
                The Sea Explorer
              </span>
            </h4>
            <div className="card__details">
              <ul>
                <li>3 day tour</li>
                <li>Up to 30 people</li>
                <li>2 tour guides</li>
                <li>Sleep in cozy hotels</li>
                <li>Dificulty: easy</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-1">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$297</p>
                <a href="#popup" className="btn btn--white">
                  Book Now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__picture card__picture--2"></div>
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--2">
                The Forest Hiker
              </span>
            </h4>
            <div className="card__details">
              <ul>
                <li>7 day tour</li>
                <li>Up to 40 people</li>
                <li>6 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Dificulty: medium</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-2">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$357</p>
                <a href="#popup" className="btn btn--white">
                  Book Now!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__side card__side--front">
            <div className="card__picture card__picture--3"></div>
            <h4 className="card__heading">
              <span className="card__heading-span card__heading-span--3">
                The Snow Adventurer
              </span>
            </h4>
            <div className="card__details">
              <ul>
                <li>5 day tour</li>
                <li>Up to 15 people</li>
                <li>3 tour guides</li>
                <li>Sleep in provided tents</li>
                <li>Dificulty: hard</li>
              </ul>
            </div>
          </div>
          <div className="card__side card__side--back card__side--back-3">
            <div className="card__cta">
              <div className="card__price-box">
                <p className="card__price-only">Only</p>
                <p className="card__price-value">$457</p>
                <a href="#popup" className="btn btn--white">
                  Book Now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-big">
        <a href="/#" className="btn btn--green">
          Discover all tours
        </a>
      </div>
    </section>
  )
}

export default ToursSection
