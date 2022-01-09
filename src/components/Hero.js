import React, { useEffect, useRef } from "react";
import backgroundVideo from "../assets/video1.mp4";
import gsap, { Power3 } from "gsap";
import Nav from "../components/Nav";

export default function Hero() {
  // References
  //const sus = useRef(null);
  let tl = useRef(null);
  const log = useRef(null);
  const title = useRef(null);
  const para = useRef(null);
  const curs = useRef(null);

  // Render
  useEffect(() => {
    tl.current = gsap
      .timeline()
      .from(title.current, {
        opacity: 0,
        y: 50,
        ease: Power3.easeOut,
      })
      .from(para.current, {
        opacity: 0,
        y: 50,
        ease: Power3.easeOut,
      })
      .from(curs.current, {
        y: 50,
        opacity: 0,
        ease: Power3.easeOut,
      })
      .from(
        "nav ul li",
        {
          y: 20,
          opacity: 0,
          stagger: 0.2,
          ease: Power3.easeOut,
        },
        1.3
      )
      .from(
        log.current,
        {
          y: 20,
          opacity: 0,
          stagger: 0.2,
          ease: Power3.easeOut,
        },
        1.3
      );
  });
  return (
    <>
      <Nav log={log} />
      <div className="hero" id="home">
        <div className="content">
          <h1 ref={title}>
            CONCEVONS ENSEMBLE DES VILLES INTELLIGENTES ET DURABLES
          </h1>
          <p ref={para}>
          Réfléchissons ensemble à ces sujets, changeons de paradigme et parvenons à la réalisation des objectifs de Développement Durable de l'Agenda 2030, pour les populations, pour la planète, pour la prospérité, pour la paix.
          </p>
        </div>
        <svg
          ref={curs}
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
              fill="#fff"
            />
          </g>
        </svg>
        <video autoPlay loop muted id="video" src={backgroundVideo} />
      </div>
    </>
  );
}
