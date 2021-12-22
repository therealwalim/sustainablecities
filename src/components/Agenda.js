import React, {useEffect, useRef} from "react";
import gsap, { Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import AgendaCard from "./AgendaCard";
import sustainable from "../assets/sustainable/sustainabledata";

gsap.registerPlugin(ScrollTrigger);

export default function Agenda() {

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
      .from('.line__active', {
        width: 0,
        opacity: 0,
        ease: Power3.easeOut,
      })
      .from('.plan__component', {
        y: 30,
        opacity: 0,
        ease: Power3.easeIn,
        stagger: .2
      });

    ScrollTrigger.create({
      trigger: ".planning",
      animation: tl.current,
      start: "top center+=150px",
      end: "top center+=50px",
      scrub: 2,
      toggleActions: "play complete reverse",
    });
  });

  return (
    <section className="planning" id="agenda">
      <div className="container">
        <h1 ref={num}>03</h1>
        <h2 ref={title}>PLANNING</h2>
        <h3 ref={description}>JEUDI 13 JANVIER 2022</h3>
        <div className="line__active"></div>
        <div className="plan">
          {sustainable.map((sus) =>
            sus.agenda.map((agn, index) => (
              <AgendaCard index={index} agn={agn}/>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
