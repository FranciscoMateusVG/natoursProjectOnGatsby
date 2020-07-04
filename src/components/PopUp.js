import React from "react"
import Image from "./Image"

const PopUp = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <Image imagem="nat8" />
          <Image imagem="nat9" />
        </div>
        <div className="popup__right">
          <a href="/#" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-botom-small">
            Start Booking Now
          </h2>
          <h3 className="heading-tertiary u-margin-botom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ex
            sed saepe debitis. Quae, modi optio! Nulla, explicabo quod!
            Reiciendis aspernatur, odio reprehenderit beatae magni accusamus nam
            itaque ducimus commodi sed soluta dignissimos perferendis facere
            temporibus! Dolores porro dignissimos veritatis ad reprehenderit
            deserunt corporis magnam at labore enim. Dignissimos, blanditiis
            fugiat aliquid temporibus placeat porro similique. Harum fuga dolor.
          </p>
          <a href="/#" className="btn btn--green">
            Book Now
          </a>
        </div>
      </div>
    </div>
  )
}

export default PopUp
