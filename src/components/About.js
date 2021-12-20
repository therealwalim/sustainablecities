import React from 'react'

export default function About({aboutimg}) {

    return (
        <section className="apropos" id="about">
        <div className="container">
          <div className="about__text">
            <h1>01</h1>
            <h2>La conference</h2>
            <p className="about__description">
              Lore ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam
            </p>
            <div className="btn__video">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="22"
                viewBox="0 0 28 22"
              >
                <g id="icons8_video" transform="translate(-1.654 -4)">
                  <path
                    id="Tracé_45"
                    data-name="Tracé 45"
                    d="M18.029,12.356,11.1,8.2A1.386,1.386,0,0,0,9,9.386V17.7a1.386,1.386,0,0,0,2.1,1.189l6.93-4.158a1.386,1.386,0,0,0,0-2.377Z"
                    transform="translate(2.701 1.544)"
                    fill="#abdf75"
                  />
                  <rect
                    id="Rectangle_10"
                    data-name="Rectangle 10"
                    width="28"
                    height="22"
                    rx="3"
                    transform="translate(1.654 4)"
                    fill="#abdf75"
                    opacity="0.35"
                  />
                </g>
              </svg>

              <p className="btn__label">Watch video</p>
            </div>
          </div>
          <div className="image">
            <img loading="lazy" src={aboutimg} alt="" />
          </div>
        </div>
      </section>
    )
}
