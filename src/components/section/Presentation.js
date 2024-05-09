import React, { useEffect, useState } from "react";
import styles from "./Presentation.module.css"; // Importe o arquivo de estilo CSS Modules
import ButtonA from "../elements/ButtonA";

function Presentation() {
  const toRotate = ["Gabriel Pedroso", "Atleta", "Dev Front-End"];
  const [text, setText] = useState("");
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);
  const period = 100;

  useEffect(() => {
    const ticker = setInterval(() => {
      toType();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loop, isDeleting]); // Adicione todas as dependências necessárias para o useEffect

  const toType = () => {
    const i = loop % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop + 1);
    }
  };

  return (
    <section className={styles.title}>
      <div className={`${styles.about} container-fluid`}>
        <div>
          <h4>Bem-vindo ao meu Portfólio</h4>
          <h1>Olá, eu sou {text}</h1>
        </div>
        <div>
          <p>
            Sou apaixonado por tecnologia e soluções inovadoras. Como atleta,
            tenho o hábito de enfrentar desafios de forma a resolver problemas
            complexos e entregar resultados excepcionais para os negócios. Minha
            experiência como atleta me proporcionou disciplina e compromisso
            para não desistir diante de desafios complexos. Na área da
            tecnologia, aplico essas mesmas qualidades, buscando contribuir com
            meu melhor para o avanço e sucesso tanto da empresa quanto no
            desenvolvimento pessoal.
          </p>
          <ButtonA
            link="https://github.com/XanRover"
            text="Conecte-se comigo!"
          />
        </div>
      </div>
    </section>
  );
}

export default Presentation;
