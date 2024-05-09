import React from "react";
import styles from "./Skills.module.css"; // Importe os estilos CSS do módulo
import javascript from "../../image/skills/javascript.svg";
import html from "../../image/skills/html.svg";
import css from "../../image/skills/css.svg";
import react from "../../image/skills/react.svg";
import typescript from "../../image/skills/typescript.svg";

function Skills() {
  return (
    <section id="skillhit">
      <div className={`${styles.cont} container h-100 pb-4`}>
        <div>
          <h1>Habilidades</h1>
          <p>
            Conheça um pouco das minhas principais habilidades e conhecimentos.
          </p>
          <div className="row col-12 justify-content-center gap-4">
            <div className="col-sm-auto ">
              <img src={javascript} alt="JavaScript" />
            </div>
            <div className="col-sm-auto ">
              <img src={html} alt="HTML" />
            </div>
            <div className="col-sm-auto ">
              <img src={css} alt="CSS" />
            </div>
            <div className="col-sm-auto ">
              <img src={react} alt="React" />
            </div>
            <div className="col-sm-auto ">
              <img src={typescript} alt="TypeScript" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
