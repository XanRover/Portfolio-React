import styles from "./Navbar.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

function Navbarex() {
  return (
    <div className={styles.Text}>
       <nav class="container-fluid m-2 navbar navbar-expand-sm justify-content-around p-2">
       <div class="navbar-brand">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a class="nav-link link" href="#title">Apresentação</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link" href="#skillhit">Habilidades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link link" href="#props">Projetos</a>
                    </li>
                </ul>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon justify-content-end"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link fs-2" href="https://instagram.com/gabrielalmeida_wushu" target="_blank"><FaInstagram/></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fs-2" href="https://github.com/XanRover"><FaGithub/></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fs-2" href="#"><FaLinkedin/></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
}

export default Navbarex;
