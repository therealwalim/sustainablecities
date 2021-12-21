import React, {useEffect, useRef} from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WhitepaperCard from "../components/WhitepaperCard";
import sustainable from "../assets/sustainable/sustainabledata";

gsap.registerPlugin(ScrollTrigger);

export default function Whitepaper({imgsus1}) {

  let tl = useRef(null);
  const num = useRef(null);
  const title = useRef(null);
  const description = useRef(null);
  const btn = useRef(null);

  // Render
  useEffect(() => {
    tl.current = gsap
      .timeline()
      .fromTo(num.current,{
        opacity: 0,
        ease: Power3.easeIn,
      }, {
        y: 25,
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
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>

        <div className="whitepaper__container">
        {sustainable.map((sus) =>
            sus.whitepaper.map((wp, index) => (
              <WhitepaperCard imgsus1={imgsus1} index={index} wp={wp} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
