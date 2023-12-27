import Cabecera from "components/Cabecera/Cabecera"
import Container from "components/Container"
import FavoritoProvider from "context/Favoritos"
import Pie from "components/Pie"
import { Outlet } from "react-router-dom"

function PaginaBase(){
    return(
        <main>
            <Cabecera/>
            <FavoritoProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritoProvider>
            <Pie/>
        </main>
    )
}

export default PaginaBase