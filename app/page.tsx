import { About } from "./componentes/About/About";
import Menu from "./componentes/Header/Menu";
import { Portfolio } from "./componentes/Portfolio/Profolio";
import { Services } from "./componentes/Services/Services";
import { Welcome } from "./componentes/Welcome/Welcome";
import {Team} from './componentes/Team/Team';

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Menu />
      <Welcome />
      <div className={styles["container-page"]}>
        <Services />
        <About />
        <Portfolio />
        <Team />
      </div>
    </>
  );
}
