import React from "react"

const BookSection = () => {
  return (
    <section className="section-book">
      <div className="section-book__container">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-botom-medium">
                <h2 className="heading-secondary">Start Booking Now!</h2>
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full Name"
                  id="name"
                  required
                />
                <label htmlFor="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="form__group">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label for="small" className="form__radio-label">
                    <span className="form__radio-button" />
                    Small tour Group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label for="large" className="form__radio-label">
                    <span className="form__radio-button" />
                    Large tour Group
                  </label>
                </div>

                <div className="form__group ">
                  <button className="btn btn--green u-margin-top-medium">
                    Next Step &rarr;
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookSection
