import { useState } from "react";
import ConteudoDireta from "./ConteudoDireta";

export default function AbaDireta() {
  const [aba, setAba] = useState("");

  return (
    <div>
      <button className="botao" onClick={() => setAba("Conversar")}>
        Conversar
      </button>
      <button className="botao" onClick={() => setAba("Atualizações")}>
        Atualizações
      </button>
      <button className="botao" onClick={() => setAba("Chamadas")}>
        Chamadas
      </button>
      <ConteudoDireta nome={aba} />
    </div>
  );
}
