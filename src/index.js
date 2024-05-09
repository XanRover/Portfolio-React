import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Importe o arquivo CSS corretamente
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Renderize o componente dentro do elemento com ID 'root'
);

// Se desejar medir o desempenho de sua aplicação, utilize a função reportWebVitals
reportWebVitals();
