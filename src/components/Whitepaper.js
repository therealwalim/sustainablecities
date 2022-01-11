import React, {useEffect, useRef} from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WhitepaperCard from "../components/WhitepaperCard";
import sustainable from "../assets/sustainable/sustainabledata";

gsap.registerPlugin(ScrollTrigger);

export default function Whitepaper() {

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
      .from('.whitepaper__card', {
        y: 30,
        opacity: 0,
        ease: Power3.easeIn,
        stagger: .2
      });

    ScrollTrigger.create({
      trigger: ".whitepaper",
      animation: tl.current,
      start: "top center+=150px",
      end: "top center+=50px",
      scrub: 2,
      toggleActions: "play complete reverse",
    });
  });

  return (
    <section className="whitepaper" id="lb">
      <div className="container">
        <h1 ref={num}>04</h1>
        <h2 ref={title}>LIVRES BLANCS</h2>
        <p ref={description} className="whitepaper__description">
          Afin d'avoir un aperçu sur ce qui va être présenté le jour de la conférence, nous avons pris soin de vous partager nos livres blancs:
        </p>

        <div className="whitepaper__container">
        {sustainable.map((sus) =>
            sus.whitepaper.map((wp, index) => (
              <WhitepaperCard index={index} wp={wp} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
