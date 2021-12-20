import React, { useEffect, useState } from "react";
import AgendaCard from "./AgendaCard";
import sustainable from "../assets/sustainable/sustainabledata";

export default function Agenda() {
  return (
    <section className="planning" id="agenda">
      <div className="container">
        <h1>03</h1>
        <h2>PLANNING</h2>
        <h3>JEUDI 13 JANVIER 2022</h3>
        <div className="line__active"></div>
        <div className="plan">
          {sustainable.map((sus) =>
            sus.agenda.map((agn, index) => (
              <AgendaCard index={index} agn={agn} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
