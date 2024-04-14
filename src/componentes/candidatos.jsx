import TabelaCandidatos from "../tabelas/candidatos";
import Cabeçalho from "../templates/cabecalho";
import Menu from "../templates/menu";

export default function Candidatos() {
    return (
        <div>
            <Cabeçalho />
            <Menu />
            <TabelaCandidatos />
        </div>
    );
}