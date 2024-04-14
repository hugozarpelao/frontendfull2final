import Cabeçalho from "../templates/cabecalho";
import Menu from "../templates/menu";

export default function Home() {
    return (
        <div>
            <Cabeçalho />
            <Menu />
            <h1 className="mt-4">Seja bem-vindo ao sistema de recrutamento online!</h1>
        </div>
    );
}