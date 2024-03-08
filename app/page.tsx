import { Header } from "./componentes/Header/Header";
import { Services } from "./componentes/Services/Services";
import { Welcome } from "./componentes/Welcome/Welcome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Welcome />
      <div className={styles["container-page"]}>
        <Services />
      </div>
    </>
  );
}
