import React, {useEffect, useRef} from "react";
import logo from "../assets/logo.svg";
import backgroundVideo from "../assets/video.mp4";
import gsap, {Power3} from "gsap";

export default function Hero() {

    // References
    const sus = useRef(null);

    // Render
    useEffect(() => {
        
        gsap.to(sus.current, {
            y: -290,
            x: -500,
            scale: .2,
            ease: Power3.easeOut
        }, 1.5)

    })
  return (
    <div class="hero">
      <img src={logo} alt=""  ref={sus}/>
      <video autoPlay loop muted id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
}
