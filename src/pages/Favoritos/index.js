import Banner from "components/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "components/Titulo";
import Card from "components/Card";

function Favoritos() {
  return <>
  <Banner img="favorite" color="#AF7EAA" />
  <Titulo>
    <h1>Mis favoritos</h1>
  </Titulo>
  <section className={styles.container}>
    <Card id="1" titulo="Gato" capa="https://api.thecatapi.com/api/images/get?format=src&ype=png"/>
  </section>
  </>;
}

export default Favoritos;
