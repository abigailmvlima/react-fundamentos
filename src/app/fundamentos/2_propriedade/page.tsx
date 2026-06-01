import { Cabecalho, Acomodacao } from "@/src/components/interface";

export default function Page() {
    
    return (
        <div>
            <Cabecalho titulo= "São Roque, Brasil"
            preco= "1000"/>
            <hr />
            <Acomodacao />
            <Cabecalho titulo= "Campos do Jordão, Brasil"
            preco= "800"/>
        </div>
    )
}