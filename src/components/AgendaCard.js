import React from "react";

export default function AgendaCard({agn}) {
  return (
    <>
      <div className="plan__component">
        <p className="plan__hour">14:30 — 14:45</p>
        <div className="plan__description">
          <p className="description__title">{agn.title}</p>
          <p className="description__descript">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet
          </p>
        </div>
      </div>
      <div className="plan__line"></div>
    </>
  );
}
