import FormularioInscricao from "../formularios/inscricao";
import FormularioLogin from "../formularios/login";
import Cabeçalho from "../templates/cabecalho";

export default function Inscricao() {
    return (
        <div>
            <Cabeçalho />
            <FormularioLogin />
            <FormularioInscricao />
        </div>
    );
}