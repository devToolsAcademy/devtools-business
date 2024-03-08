import Menu from "./componentes/Header/Menu";
import { Services } from "./componentes/Services/Services";
import { Welcome } from "./componentes/Welcome/Welcome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Menu />
      <Welcome />
      <div className={styles["container-page"]}>
        <Services />
      </div>
    </>
  );
}
