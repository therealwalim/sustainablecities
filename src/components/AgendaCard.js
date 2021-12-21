import React from "react";

export default function AgendaCard(props) {
  return (
    <>
      <div className="plan__component">
        <p className="plan__hour">{props.agn.hour}</p>
        <div className="plan__description">
          <p className="description__title">{props.agn.title}</p>
          <p className="description__descript">
            {props.agn.description}
          </p>
        </div>
      </div>
      <div className="plan__line"></div>
    </>
  );
}
