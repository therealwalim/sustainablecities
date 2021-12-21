import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.svg";

export default function Nav(props) {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li");
    window.onscroll = () => {
      var current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active")
        if (li.classList.contains(current)) {
          li.classList.add("active")
        }
      });
    };
  });

  return (
    <nav>
      <div className="logo">
        <img ref={props.log} src={logo} alt="" />
      </div>
      <ul>
        <li className="about">
          <a href="#about">À propos</a>
        </li>
        <li className="sponsor">
          <a href="#sponsor">Sponsors</a>
        </li>
        <li className="agenda">
          <a href="#agenda">Agenda</a>
        </li>
        <li className="lb">
          <a href="#lb">Contenu</a>
        </li>
      </ul>
    </nav>
  );
}
