import styles from "./Titulo.module.css"

function Titulo ({children}){
    return(
        <div className={styles.texto}>

            {children}
        </div>
    )
}

export default Titulo