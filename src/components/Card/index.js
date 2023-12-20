import styles from "./Card.module.css"
import iconFavorito from "./iconFavorito.png"
function Card({id, capa, titulo}){
    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa}/>
        <h2>{titulo}</h2>
        <img src={iconFavorito} alt="Icono favorito" className={styles.favorito}/>
        </div>
    )
}
export default Card