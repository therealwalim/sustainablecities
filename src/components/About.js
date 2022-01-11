import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About({ aboutimg }) {
  let tl = useRef(null);
  const num = useRef(null);
  const title = useRef(null);
  const description = useRef(null);
  const btn = useRef(null);

  // Render
  useEffect(() => {
    tl.current = gsap
      .timeline()
      .fromTo(
        num.current,
        {
          opacity: 0,
          ease: Power3.easeIn,
        },
        {
          y: 20,
          opacity: 0.3,
          ease: Power3.easeIn,
        }
      )
      .from(title.current, {
        y: 30,
        opacity: 0,
        ease: Power3.easeIn,
      })
      .from(description.current, {
        y: 30,
        opacity: 0,
        ease: Power3.easeIn,
      })
      .from(btn.current, {
        y: 30,
        opacity: 0,
        ease: Power3.easeIn,
      });

    ScrollTrigger.create({
      trigger: ".apropos",
      animation: tl.current,
      start: "top center+=150px",
      end: "top center+=50px",
      scrub: 1,
      toggleActions: "play complete reverse",
    });
  });

  const handleClick = () => {
    window.open("https://youtu.be/MwnX7enMJCU");
  };

  return (
    <section className="apropos" id="about">
      <div className="container">
        <div className="about__text">
          <h1 ref={num}>01</h1>
          <h2 ref={title}>La conférence</h2>
          <p ref={description} className="about__description">
            La conférence Ville Durable aura lieu le Lundi 17 Janvier 2022 de
            14h à 15h30 dans la salle 001 (Rez-de chaussée du CESI Exia) et sera
            animée par la promotion A5 (2021-2022). <br />Pour un petit aperçu,
            nous vous invitons à visionner la vidéo de pré-lancement de l'évènement :
          </p>
          <div ref={btn} className="btn__video" onClick={handleClick}>
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

            <p className="btn__label">Regarder la vidéo</p>
          </div>
        </div>
        <div className="image">
          <img loading="lazy" src={aboutimg} alt="" />
        </div>
      </div>
    </section>
  );
}
