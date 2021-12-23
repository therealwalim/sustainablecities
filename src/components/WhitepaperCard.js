import React from "react";

require('dotenv').config()

export default function WhitepaperCard(props) {
  const handleClick = () => {
    window.open(`${process.env.PUBLIC_URL}${props.wp.link}.pdf`);
  };

  return (
    <div className="whitepaper__card">
      <img src={require(`../assets/${props.wp.image}.png`).default} alt="" />
      <h4>{props.wp.title}</h4>
      <div className="btn__download" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.161"
          height="17.579"
          viewBox="0 0 16.161 17.579"
        >
          <g id="icons8_download" transform="translate(-3 -1.421)">
            <path
              id="Tracé_46"
              data-name="Tracé 46"
              d="M16.468,19.161H5.694A2.693,2.693,0,0,1,3,16.468V5.694A2.693,2.693,0,0,1,5.694,3H16.468a2.693,2.693,0,0,1,2.694,2.694V16.468A2.693,2.693,0,0,1,16.468,19.161Z"
              transform="translate(0 -0.161)"
              fill="#252422"
              opacity="0.35"
            />
            <path
              id="Tracé_47"
              data-name="Tracé 47"
              d="M13.591,12.2V3.217a1.8,1.8,0,0,0-3.591,0V12.2Z"
              transform="translate(-0.715)"
              fill="#252422"
            />
            <path
              id="Tracé_48"
              data-name="Tracé 48"
              d="M7.78,12a.779.779,0,0,0-.553,1.327l3.462,3.5a1.127,1.127,0,0,0,1.6,0l3.462-3.5A.779.779,0,0,0,15.2,12Z"
              transform="translate(-0.409 -1.081)"
              fill="#252422"
            />
          </g>
        </svg>

        <p>Télécharger le contenu</p>
      </div>
    </div>
  );
}
