import Hero from "./components/Hero";
import "./style/style.scss";
import aboutimg from "./assets/aboutimg.svg";
import imgsus1 from "./assets/imgsus1.svg";

function App() {
  return (
    <>
      <Hero />

      <section className="about" id="about">
        <div className="container">
          <div className="about__text">
            <h1>01</h1>
            <h2>La conference</h2>
            <p className="about__description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
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
            <img src={aboutimg} alt="" />
          </div>
        </div>
      </section>

      <section className="sponsor" id="sponsor">
        <div className="container">
          <h1>02</h1>
          <h2>NOS SPONSORS</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
          </p>
          <div className="sponsor__container">
            <div className="sponsor__card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42.624"
                height="42.601"
                viewBox="0 0 42.624 42.601"
              >
                <g
                  id="_0511b019ad0b448"
                  data-name="0511b019ad0b448"
                  transform="translate(0 -0.622)"
                >
                  <g
                    id="Groupe_16"
                    data-name="Groupe 16"
                    transform="translate(0 9.172)"
                  >
                    <path
                      id="Tracé_31"
                      data-name="Tracé 31"
                      d="M3.2.206H0V34.258H34.041v-3.2H3.2V.206"
                      transform="translate(0 -0.206)"
                      fill="#abdf75"
                      fill-rule="evenodd"
                    />
                  </g>
                  <path
                    id="Tracé_32"
                    data-name="Tracé 32"
                    d="M55.4.622V9.168H74.449V28.142H83.03V.622H55.4"
                    transform="translate(-40.406)"
                    fill="#abdf75"
                    fill-rule="evenodd"
                  />
                  <path
                    id="Tracé_33"
                    data-name="Tracé 33"
                    d="M32.875,85.047c-1.437,0-2.85-.882-2.85-3.276s1.413-3.263,2.85-3.263a2.624,2.624,0,0,1,2.1.895l-.882.858a1.485,1.485,0,0,0-1.222-.606,1.438,1.438,0,0,0-1.184.568,2.355,2.355,0,0,0-.378,1.549,2.4,2.4,0,0,0,.378,1.563,1.439,1.439,0,0,0,1.184.568A1.487,1.487,0,0,0,34.1,83.3l.882.846a2.638,2.638,0,0,1-2.1.906m7-4.662a1.315,1.315,0,0,0-1.261-.806,1.332,1.332,0,0,0-1.271.806,2.011,2.011,0,0,0-.164.87h2.873A1.983,1.983,0,0,0,39.879,80.385Zm-2.7,1.765a1.572,1.572,0,0,0,1.625,1.789,1.9,1.9,0,0,0,1.55-.656l.819.769a2.994,2.994,0,0,1-2.393.995c-1.6,0-2.872-.845-2.872-3.276,0-2.067,1.069-3.263,2.706-3.263,1.714,0,2.711,1.26,2.711,3.075v.567Zm7.913,2.9a3.515,3.515,0,0,1-2.684-.92l.846-.844a2.472,2.472,0,0,0,1.838.668c.781,0,1.4-.278,1.4-.883,0-.428-.239-.7-.854-.756l-1.023-.087c-1.195-.1-1.888-.643-1.888-1.765,0-1.248,1.07-1.953,2.407-1.953a3.5,3.5,0,0,1,2.366.718l-.8.82a2.412,2.412,0,0,0-1.575-.467c-.771,0-1.16.341-1.16.819,0,.38.2.669.884.731l1.007.089c1.2.1,1.9.667,1.9,1.8,0,1.336-1.134,2.029-2.659,2.029"
                    transform="translate(-21.897 -56.803)"
                    fill="#abdf75"
                    fill-rule="evenodd"
                  />
                  <path
                    id="Tracé_34"
                    data-name="Tracé 34"
                    d="M101.291,85.176h1.284V78.789h-1.284Z"
                    transform="translate(-73.872 -57.008)"
                    fill="#abdf75"
                    fill-rule="evenodd"
                  />
                </g>
              </svg>
            </div>

            <div className="sponsor__card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42.624"
                height="42.601"
                viewBox="0 0 42.624 42.601"
              >
                <g
                  id="_0511b019ad0b448"
                  data-name="0511b019ad0b448"
                  transform="translate(0 -0.622)"
                >
                  <g
                    id="Groupe_16"
                    data-name="Groupe 16"
                    transform="translate(0 9.172)"
                  >
                    <path
                      id="Tracé_31"
                      data-name="Tracé 31"
                      d="M3.2.206H0V34.258H34.041v-3.2H3.2V.206"
                      transform="translate(0 -0.206)"
                      fill="#abdf75"
                      fill-rule="evenodd"
                    />
                  </g>
                  <path
                    id="Tracé_32"
                    data-name="Tracé 32"
                    d="M55.4.622V9.168H74.449V28.142H83.03V.622H55.4"
                    transform="translate(-40.406)"
                    fill="#abdf75"
                    fill-rule="evenodd"
                  />
                  <path
                    id="Tracé_33"
                    data-name="Tracé 33"
                    d="M32.875,85.047c-1.437,0-2.85-.882-2.85-3.276s1.413-3.263,2.85-3.263a2.624,2.624,0,0,1,2.1.895l-.882.858a1.485,1.485,0,0,0-1.222-.606,1.438,1.438,0,0,0-1.184.568,2.355,2.355,0,0,0-.378,1.549,2.4,2.4,0,0,0,.378,1.563,1.439,1.439,0,0,0,1.184.568A1.487,1.487,0,0,0,34.1,83.3l.882.846a2.638,2.638,0,0,1-2.1.906m7-4.662a1.315,1.315,0,0,0-1.261-.806,1.332,1.332,0,0,0-1.271.806,2.011,2.011,0,0,0-.164.87h2.873A1.983,1.983,0,0,0,39.879,80.385Zm-2.7,1.765a1.572,1.572,0,0,0,1.625,1.789,1.9,1.9,0,0,0,1.55-.656l.819.769a2.994,2.994,0,0,1-2.393.995c-1.6,0-2.872-.845-2.872-3.276,0-2.067,1.069-3.263,2.706-3.263,1.714,0,2.711,1.26,2.711,3.075v.567Zm7.913,2.9a3.515,3.515,0,0,1-2.684-.92l.846-.844a2.472,2.472,0,0,0,1.838.668c.781,0,1.4-.278,1.4-.883,0-.428-.239-.7-.854-.756l-1.023-.087c-1.195-.1-1.888-.643-1.888-1.765,0-1.248,1.07-1.953,2.407-1.953a3.5,3.5,0,0,1,2.366.718l-.8.82a2.412,2.412,0,0,0-1.575-.467c-.771,0-1.16.341-1.16.819,0,.38.2.669.884.731l1.007.089c1.2.1,1.9.667,1.9,1.8,0,1.336-1.134,2.029-2.659,2.029"
                    transform="translate(-21.897 -56.803)"
                    fill="#abdf75"
                    fill-rule="evenodd"
                  />
                  <path
                    id="Tracé_34"
                    data-name="Tracé 34"
                    d="M101.291,85.176h1.284V78.789h-1.284Z"
                    transform="translate(-73.872 -57.008)"
                    fill="#abdf75"
                    fill-rule="evenodd"
                  />
                </g>
              </svg>
            </div>

            <div className="sponsor__card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42.624"
                height="42.601"
                viewBox="0 0 42.624 42.601"
              >
                <g
                  id="_0511b019ad0b448"
                  data-name="0511b019ad0b448"
                  transform="translate(0 -0.622)"
                >
                  <g
                    id="Groupe_16"
                    data-name="Groupe 16"
                    transform="translate(0 9.172)"
                  >
                    <path
                      id="Tracé_31"
                      data-name="Tracé 31"
                      d="M3.2.206H0V34.258H34.041v-3.2H3.2V.206"
                      transform="translate(0 -0.206)"
                      fill="#abdf75"
                      fill-rule="evenodd"
                    />
                  </g>
                  <path
                    id="Tracé_32"
                    data-name="Tracé 32"
                    d="M55.4.622V9.168H74.449V28.142H83.03V.622H55.4"
                    transform="translate(-40.406)"
                    fill="#abdf75"
                    fill-rule="evenodd"
                  />
                  <path
                    id="Tracé_33"
                    data-name="Tracé 33"
                    d="M32.875,85.047c-1.437,0-2.85-.882-2.85-3.276s1.413-3.263,2.85-3.263a2.624,2.624,0,0,1,2.1.895l-.882.858a1.485,1.485,0,0,0-1.222-.606,1.438,1.438,0,0,0-1.184.568,2.355,2.355,0,0,0-.378,1.549,2.4,2.4,0,0,0,.378,1.563,1.439,1.439,0,0,0,1.184.568A1.487,1.487,0,0,0,34.1,83.3l.882.846a2.638,2.638,0,0,1-2.1.906m7-4.662a1.315,1.315,0,0,0-1.261-.806,1.332,1.332,0,0,0-1.271.806,2.011,2.011,0,0,0-.164.87h2.873A1.983,1.983,0,0,0,39.879,80.385Zm-2.7,1.765a1.572,1.572,0,0,0,1.625,1.789,1.9,1.9,0,0,0,1.55-.656l.819.769a2.994,2.994,0,0,1-2.393.995c-1.6,0-2.872-.845-2.872-3.276,0-2.067,1.069-3.263,2.706-3.263,1.714,0,2.711,1.26,2.711,3.075v.567Zm7.913,2.9a3.515,3.515,0,0,1-2.684-.92l.846-.844a2.472,2.472,0,0,0,1.838.668c.781,0,1.4-.278,1.4-.883,0-.428-.239-.7-.854-.756l-1.023-.087c-1.195-.1-1.888-.643-1.888-1.765,0-1.248,1.07-1.953,2.407-1.953a3.5,3.5,0,0,1,2.366.718l-.8.82a2.412,2.412,0,0,0-1.575-.467c-.771,0-1.16.341-1.16.819,0,.38.2.669.884.731l1.007.089c1.2.1,1.9.667,1.9,1.8,0,1.336-1.134,2.029-2.659,2.029"
                    transform="translate(-21.897 -56.803)"
                    fill="#abdf75"
                    fill-rule="evenodd"
                  />
                  <path
                    id="Tracé_34"
                    data-name="Tracé 34"
                    d="M101.291,85.176h1.284V78.789h-1.284Z"
                    transform="translate(-73.872 -57.008)"
                    fill="#abdf75"
                    fill-rule="evenodd"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="agenda"  id="agenda">
        <div className="container">
          <h1>03</h1>
          <h2>PLANNING</h2>
          <h3>JEUDI 13 JANVIER 2022</h3>
          <div className="line__active"></div>
          <div className="plan">
            <div className="plan__component">
              <p className="plan__hour">14:30 — 14:45</p>
              <div className="plan__description">
                <p className="description__title">Accueil des invités</p>
                <p className="description__descript">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet
                </p>
              </div>
            </div>
            <div className="plan__line"></div>

            <div className="plan__component">
              <p className="plan__hour">14:30 — 14:45</p>
              <div className="plan__description">
                <p className="description__title">Accueil des invités</p>
                <p className="description__descript">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet
                </p>
              </div>
            </div>
            <div className="plan__line"></div>
          </div>
        </div>
      </section>

      <section className="whitepaper"  id="lb">
        <div className="container">
          <h1>04</h1>
          <h2>LIVRES BLANCS</h2>
          <p className="whitepaper__description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
          </p>

          <div className="whitepaper__container">
            <div className="whitepaper__card">
              <img src={imgsus1} alt="" />
              <h4>Title</h4>
              <div className="btn__download">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.161"
                  height="17.579"
                  viewBox="0 0 16.161 17.579"
                >
                  <g id="icons8_download" transform="translate(-3 -1.421)">
                    <path
                      id="Tracé_46"
                      data-name="Tracé 46"
                      d="M16.468,19.161H5.694A2.693,2.693,0,0,1,3,16.468V5.694A2.693,2.693,0,0,1,5.694,3H16.468a2.693,2.693,0,0,1,2.694,2.694V16.468A2.693,2.693,0,0,1,16.468,19.161Z"
                      transform="translate(0 -0.161)"
                      fill="#252422"
                      opacity="0.35"
                    />
                    <path
                      id="Tracé_47"
                      data-name="Tracé 47"
                      d="M13.591,12.2V3.217a1.8,1.8,0,0,0-3.591,0V12.2Z"
                      transform="translate(-0.715)"
                      fill="#252422"
                    />
                    <path
                      id="Tracé_48"
                      data-name="Tracé 48"
                      d="M7.78,12a.779.779,0,0,0-.553,1.327l3.462,3.5a1.127,1.127,0,0,0,1.6,0l3.462-3.5A.779.779,0,0,0,15.2,12Z"
                      transform="translate(-0.409 -1.081)"
                      fill="#252422"
                    />
                  </g>
                </svg>

                <p>Télécharger le contenu</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="content">
          <p>Design and code by <a href="https://www.walimechaib.pro/">@therealwalim</a></p>
        </div>
      </footer>
    </>
  );
}

export default App;
