import React, { useState, useRef } from "react";

require("dotenv").config();

export default function Coming() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const field = useRef(null);
  let str2 = "";
  let str1 = "";

  const registerEmail = () => {
    fetch("https://sc-api.vercel.app/api/users", {
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        res.text().then((suc) => {
          setError("");
          setSuccess(suc);
        });
      } else {
        setSuccess("");
        res.text().then((text) => {
          str1 = text.replaceAll('"', "").replaceAll("\\", "");
          str2 = str1.charAt(0).toUpperCase() + str1.slice(1);
          setError(str2);
        });
      }
    });
  };

  return (
    <section className="coming" id="register">
      <div className="container">
        <h1>M'inscrire à l'évènement</h1>
        <p className="coming__description">
        Veuillez renseigner votre adresse e-mail pour participer à notre conférence et ne rater aucune nouvelle de celle-ci
        </p>
        <div className="wrapper">
          <div className="display"></div>
          <div className="input__register">
            <div ref={field} className="input__group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="16"
                viewBox="0 0 20 16"
              >
                <g id="icons8_mail" transform="translate(-2 -4)">
                  <path
                    id="Tracé_49"
                    data-name="Tracé 49"
                    d="M2,17V7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V17a3,3,0,0,1-3,3H5A3,3,0,0,1,2,17Z"
                    fill="#b8b8b8"
                    opacity="0.35"
                  />
                  <path
                    id="Tracé_50"
                    data-name="Tracé 50"
                    d="M22,7a2.968,2.968,0,0,0-.321-1.325l-8.187,4.912a2.894,2.894,0,0,1-2.983,0L2.321,5.675A2.968,2.968,0,0,0,2,7V8.981L8.964,13.16a5.887,5.887,0,0,0,6.071,0L22,8.981Z"
                    fill="#b8b8b8"
                  />
                </g>
              </svg>
              <input
                placeholder="Adresse e-mail"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error ? <p className="error">{error}</p> : ""}
            {success ? (
              <p className="success">
                {success.replaceAll('"', "").replaceAll("\\", "")}
              </p>
            ) : (
              ""
            )}
            <div className="btn__submit" onClick={registerEmail}>
              <p>S'inscrire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
