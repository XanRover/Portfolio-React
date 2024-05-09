import React from "react";
import styles from "./Projects.module.css";
import ButtonB from "../elements/ButtonB";
import Cards from "../elements/Cards";

function Projects() {
  return (
    <section className={styles.projects} id="props">
      <h1>Projetos</h1>
      <Cards/>
      <ButtonB link="https://github.com/XanRover?tab=repositories" text="Meu repositório" />
    </section>
  );
}

export default Projects;
