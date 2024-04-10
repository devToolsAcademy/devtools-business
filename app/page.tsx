import { About } from "./componentes/About/About";
import { Slogan } from "./componentes/Slogan/Slogan";
import { Footer } from "./componentes/Footer/Footer";
import Menu from "./componentes/Header/Menu";
import { Portfolio } from "./componentes/Portfolio/Profolio";
import { Services } from "./componentes/Services/Services";
import { Team } from "./componentes/Team/Team";
import { Welcome } from "./componentes/Welcome/Welcome";
import styles from "./page.module.css";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';



export default function Home() {
  return (
    <>
      <Menu />
      <Welcome />
      <div className={styles["container-page"]}>
        <Services />
        <About />
        {/* <Portfolio /> */}
        <Team />  
        <Slogan/>      
        <Footer/>  
      </div>
    </>
  );
}
