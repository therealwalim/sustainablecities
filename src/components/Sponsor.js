import React, {useEffect, useRef} from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Sponsor() {

  let tl = useRef(null);
  const num = useRef(null);
  const title = useRef(null);
  const description = useRef(null);

  // Render
  useEffect(() => {
    tl.current = gsap
      .timeline()
      .fromTo(num.current,{
        opacity: 0,
        ease: Power3.easeIn,
      }, {
        y: 20,
        opacity: .3,
        ease: Power3.easeIn,
      })
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
      .from('.sponsor__card', {
        y: 30,
        opacity: 0,
        ease: Power3.easeIn,
        stagger: .2
      });

    ScrollTrigger.create({
      trigger: ".sponsors",
      animation: tl.current,
      start: "top center+=150px",
      end: "top center+=50px",
      scrub: 2,
      toggleActions: "play complete reverse",
    });
  });
  return (
    <section className="sponsors" id="sponsor">
      <div className="container">
        <h1 ref={num}>02</h1>
        <h2 ref={title}>NOS SPONSORS</h2>
        <p ref={description}>
          Un sponsor était primordial afin qu'un tel projet puisse aboutir, il pourra nous soutenir financièrement afin de garantir la tenue de l'évènement.
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
                    fillRule="evenodd"
                  />
                </g>
                <path
                  id="Tracé_32"
                  data-name="Tracé 32"
                  d="M55.4.622V9.168H74.449V28.142H83.03V.622H55.4"
                  transform="translate(-40.406)"
                  fill="#abdf75"
                  fillRule="evenodd"
                />
                <path
                  id="Tracé_33"
                  data-name="Tracé 33"
                  d="M32.875,85.047c-1.437,0-2.85-.882-2.85-3.276s1.413-3.263,2.85-3.263a2.624,2.624,0,0,1,2.1.895l-.882.858a1.485,1.485,0,0,0-1.222-.606,1.438,1.438,0,0,0-1.184.568,2.355,2.355,0,0,0-.378,1.549,2.4,2.4,0,0,0,.378,1.563,1.439,1.439,0,0,0,1.184.568A1.487,1.487,0,0,0,34.1,83.3l.882.846a2.638,2.638,0,0,1-2.1.906m7-4.662a1.315,1.315,0,0,0-1.261-.806,1.332,1.332,0,0,0-1.271.806,2.011,2.011,0,0,0-.164.87h2.873A1.983,1.983,0,0,0,39.879,80.385Zm-2.7,1.765a1.572,1.572,0,0,0,1.625,1.789,1.9,1.9,0,0,0,1.55-.656l.819.769a2.994,2.994,0,0,1-2.393.995c-1.6,0-2.872-.845-2.872-3.276,0-2.067,1.069-3.263,2.706-3.263,1.714,0,2.711,1.26,2.711,3.075v.567Zm7.913,2.9a3.515,3.515,0,0,1-2.684-.92l.846-.844a2.472,2.472,0,0,0,1.838.668c.781,0,1.4-.278,1.4-.883,0-.428-.239-.7-.854-.756l-1.023-.087c-1.195-.1-1.888-.643-1.888-1.765,0-1.248,1.07-1.953,2.407-1.953a3.5,3.5,0,0,1,2.366.718l-.8.82a2.412,2.412,0,0,0-1.575-.467c-.771,0-1.16.341-1.16.819,0,.38.2.669.884.731l1.007.089c1.2.1,1.9.667,1.9,1.8,0,1.336-1.134,2.029-2.659,2.029"
                  transform="translate(-21.897 -56.803)"
                  fill="#abdf75"
                  fillRule="evenodd"
                />
                <path
                  id="Tracé_34"
                  data-name="Tracé 34"
                  d="M101.291,85.176h1.284V78.789h-1.284Z"
                  transform="translate(-73.872 -57.008)"
                  fill="#abdf75"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
