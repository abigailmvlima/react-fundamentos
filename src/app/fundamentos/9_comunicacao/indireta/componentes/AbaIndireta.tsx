interface AbaProps {
  atualizar(aba: string): void;
}
export default function AbaIndireta(props: AbaProps) {
  return (
    <div>
      <button className="botao" onClick={() => props.atualizar("Conversar")}>
        Conversar
      </button>
      <button className="botao" onClick={() => props.atualizar("Atualizações")}>
        Atualizações
      </button>
      <button className="botao" onClick={() => props.atualizar("Chamadas")}>
        Chamadas
      </button>
    </div>
  );
}
