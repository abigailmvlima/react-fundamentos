import { Cabecalho, Conteudo, Rodape } from "../../components/interface";

export default function Principal() {
    return (
        <div>
            <Cabecalho
            titulo= "Airbnb" subtitulo= "Início"/>

           <Conteudo>
               <h1>Página início</h1>
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