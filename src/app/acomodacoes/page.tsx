import PaginaSite from "@/src/components/PaginaSite";
import { Cabecalho, Conteudo, Rodape, Menu } from "../../components/interface";

export default function Principal() {
    return (
        <PaginaSite titulo= "Airbnb" subtitulo= "Minhas acomodações">
               
               <h1>Página Acomodações</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Cum, consequuntur officiis consectetur id dolor suscipit 
                reiciendis facilis maiores earum amet minus eveniet ratione 
                molestiae itaque adipisci iste dolorum.
                </p>
         
         </PaginaSite>
        
    )
}