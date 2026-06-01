import { Acomodacao, Cabecalho } from "../../components/interface";

export default function Principal() {
    return (
        <div>
            {Cabecalho()}
            <hr />
            {Acomodacao()}
            <hr />
        </div>
    )
}