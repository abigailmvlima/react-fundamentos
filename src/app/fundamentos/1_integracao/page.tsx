export default function Page() {

    const regra = <h1>Maior idade</h1>;
    const nome = "João";

    const lista = [
        <h1>Maria</h1>,
        <h1>João</h1>,
        <h1>Pedro</h1>,
        <h1>Ana</h1>,
    ]

    let salario = 1000;
    let bonus = 100;

    const usuario = {
        nome: "João",
        idade: 20,

    }

        function MeuBotao() {
            return(
                <button>Clique aqui</button>
            )
        }
    
    return (
        <div>
            Olá,{lista[0]}
            O salário é: {salario + bonus}
            <br />
            O usuário é: {usuario.nome} idade: {usuario.idade}
            <br />
            {MeuBotao()}
        </div>
    );
}