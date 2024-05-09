import React, { useState } from "react";
import styles from "./Cards.module.css";
import ButtonB from "./ButtonB";
import Apiconsumo from "../../image/projects/ConsumoAPI.png";
import Mario from "../../image/projects/ProjetoMARIO.png";
import Portatleta from "../../image/projects/PortfolioAtleta.png";

function Cards() {
  // Gerenciamento de estado para mostrar os detalhes de cada card
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);

  return (
    <div className={`${styles.cards} container align-items-center`}>
      {/* Card 1 */}
      <div
        className="row justify-content-center gap-4"
        onMouseEnter={() => setShowDetails1(true)}
        onMouseLeave={() => setShowDetails1(false)}
      >
        <div className="col-sm-auto">
          <img
            src={Apiconsumo}
            alt="Projeto Mario"
            className={`${styles.cardImage} rounded-4`}
          />
        </div>
        {showDetails1 && (
          <div className={`${styles.cardContent} col-sm-auto text-start`}>
            <h3>Desafio de Consumo de API</h3>
            <p>
              <strong>Tecnologias:</strong> HTML, CSS (Bootstrap), JavaScript
              (Fetch API)
            </p>
            <p>
              Desenvolvimento de aplicação para consumo de API de CEP e clima
              meteorológico, utilizando HTML, CSS e JavaScript. Projeto
              integrado ao curso "Formação em Tecnologia" da DNC, com
              funcionalidades de consulta de CEP e previsão do tempo.
            </p>
            <ButtonB
              link="https://github.com/XanRover/Desafio2_DncWeather?tab=readme-ov-file"
              text="Acesse o repositório"
            />
          </div>
        )}
      </div>

      {/* Card 2 */}
      <div
        className="row justify-content-center mt-5 gap-4"
        onMouseEnter={() => setShowDetails2(true)}
        onMouseLeave={() => setShowDetails2(false)}
      >
        <div className="col-sm-auto ">
          <img
            src={Mario}
            alt="Projeto Mario"
            className={`${styles.cardImage} rounded-4`}
          />
        </div>
        {showDetails2 && (
          <div className={`${styles.cardContent} col-sm-auto text-start`}>
            <h3>Projeto Super Mario Bros</h3>
            <p>
              <strong>Tecnologias:</strong> HTML, CSS (Bootstrap) e JavaScript
            </p>
            <p>
              Desenvolvimento de uma página inspirada no Super Mario Bros em
              formato de card de stream com trailer e botões interativos.
            </p>
            <ButtonB
              link="https://xanrover.github.io/Projeto-Super-Mario-Bros"
              text="Acesse o repositório"
            />
          </div>
        )}
      </div>

      {/* Card 3 */}
      <div
        className="row justify-content-md-center mt-5 gap-4"
        onMouseEnter={() => setShowDetails3(true)}
        onMouseLeave={() => setShowDetails3(false)}
      >
        <div className="col-sm-auto">
          <img
            src={Portatleta}
            alt="Projeto PortfoliATLETA"
            className={`${styles.cardImage} rounded-4`}
          />
        </div>
        {showDetails3 && (
          <div className={`${styles.cardContent} col-sm-auto text-start`}>
            <h3>Projeto Portfolio Atleta</h3>
            <p>
              <strong>Tecnologias:</strong> HTML, CSS e JavaScript
            </p>
            <p>
              O Projeto PortfoliATLETA é um portfólio online desenvolvido com
              HTML, CSS e JavaScript para destacar a carreira e conquistas de um
              atleta de Wushu Sanda. Este projeto inclui uma estrutura básica de
              página, estilização visual e interações dinâmicas para apresentar
              de forma atrativa a trajetória esportiva do atleta.
            </p>
            <ButtonB
              link="https://github.com/XanRover/Portif-lio-Front-End---ATLETA/tree/master"
              text="Acesse o repositório"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
