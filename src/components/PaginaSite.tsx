import { Cabecalho, Menu, Conteudo, Rodape } from "./interface";

export default function PaginaSite( props:any ){
    return (
        <div>
            <Cabecalho 
                titulo={props.titulo}
                subtitulo={props.subtitulo}
                className="bg-blue-400"
            />

            <Menu />

            <Conteudo titulo="teste">
                {props.children}
            </Conteudo>

            <Rodape />

        </div>
    )
}