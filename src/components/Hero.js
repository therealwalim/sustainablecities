import React, { useEffect, useRef } from "react";
import backgroundVideo from "../assets/video.mp4";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
    <div class="hero">
      <h1>CONCEVONS ENSEMBLE DES VILLES INTELLIGENTES ET DURABLES</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem
      </p>
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}
