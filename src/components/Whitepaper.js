import React from "react";
import WhitepaperCard from "../components/WhitepaperCard";

export default function Whitepaper({imgsus1}) {
  return (
    <section className="whitepaper" id="lb">
      <div className="container">
        <h1>04</h1>
        <h2>LIVRES BLANCS</h2>
        <p className="whitepaper__description">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </p>

        <div className="whitepaper__container">
          <WhitepaperCard imgsus1={imgsus1}/>
        </div>
      </div>
    </section>
  );
}
