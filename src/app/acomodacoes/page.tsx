import { Cabecalho, Conteudo, Rodape, Menu } from "../../components/interface";

export default function Principal() {
    return (
        <div>
            <Cabecalho
            titulo= "Airbnb" subtitulo= "Minhas acomodações"/>

           <Menu />

           <Conteudo>
               <h1>Página Acomodações</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Cum, consequuntur officiis consectetur id dolor suscipit 
                reiciendis facilis maiores earum amet minus eveniet ratione 
                molestiae itaque adipisci iste dolorum.
                </p>
           </Conteudo>

            <Rodape />
        </div>
        
    )
}