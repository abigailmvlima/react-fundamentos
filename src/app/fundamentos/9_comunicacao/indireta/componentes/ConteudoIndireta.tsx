import { useState } from "react";
import AbaIndireta from "./AbaIndireta";

export default function ConteudoIndireta() {
  const [aba, setAba] = useState("");
  function selecionarAba(aba: string) {
    setAba(aba);
  }
  return (
    <div>
      <span>{aba}</span>
      <hr />
      <AbaIndireta atualizar={selecionarAba} />
    </div>
  );
}
