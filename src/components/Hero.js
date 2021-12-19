import React, { useEffect, useRef } from "react";
import backgroundVideo from "../assets/video.mp4";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import logo from "../assets/logo.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  // References
  //const sus = useRef(null);
  let tl = useRef(null);

  // Render
  useEffect(() => {
    /*   
      tl.current = gsap.timeline()
      .to(sus.current, {
            y: -290,
            x: -500,
            scale: .2,
            ease: Power3.easeOut
        }, .9)

        ScrollTrigger.create({
          trigger: ".hero",
          animation: tl.current,
          markers: true, // reference
          start: "top",
          end: "center",
          scrub: 1,
          toggleActions:"play complete reverse reset",
          pin: true
        });
*/
  });
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="#about">À propos</a>
          </li>
          <li>
            <a href="#sponsor">Sponsors</a>
          </li>
          <li>
            <a href="#agenda">Agenda</a>
          </li>
          <li>
            <a href="#lb">Contenu</a>
          </li>
        </ul>
      </nav>
      <div class="hero">
        <div className="content">
          <h1>CONCEVONS ENSEMBLE DES VILLES INTELLIGENTES ET DURABLES</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo
          </p>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="44"
            viewBox="0 0 32 44"
          >
            <g
              id="Groupe_15"
              data-name="Groupe 15"
              transform="translate(-664 -648)"
            >
              <g
                id="Tracé_29"
                data-name="Tracé 29"
                transform="translate(664 648)"
                fill="none"
              >
                <path
                  d="M16,0A16,16,0,0,1,32,16V28A16,16,0,0,1,0,28V16A16,16,0,0,1,16,0Z"
                  stroke="none"
                />
                <path
                  d="M 16 3 C 12.5275707244873 3 9.262990951538086 4.352241516113281 6.807609558105469 6.807609558105469 C 4.352239608764648 9.262989044189453 3 12.5275707244873 3 16 L 3 28 C 3 31.47241973876953 4.352239608764648 34.73701095581055 6.807609558105469 37.19239044189453 C 9.262990951538086 39.64775848388672 12.5275707244873 41 16 41 C 19.47243118286133 41 22.73701095581055 39.64775848388672 25.19239044189453 37.19239044189453 C 27.64776039123535 34.73701095581055 29 31.47241973876953 29 28 L 29 16 C 29 12.5275707244873 27.64776039123535 9.262989044189453 25.19239044189453 6.807609558105469 C 22.73701095581055 4.352241516113281 19.47243118286133 3 16 3 M 16 0 C 24.8365592956543 0 32 7.163440704345703 32 16 L 32 28 C 32 36.83655166625977 24.8365592956543 44 16 44 C 7.163440704345703 44 0 36.83655166625977 0 28 L 0 16 C 0 7.163440704345703 7.163440704345703 0 16 0 Z"
                  stroke="none"
                  fill="#f4f4f4"
                />
              </g>
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="3"
                cy="3"
                r="3"
                transform="translate(677 659)"
                fill="#fff"
              />
            </g>
          </svg>
        <video autoPlay loop muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
}
