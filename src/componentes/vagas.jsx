import Cabeçalho from "../templates/cabecalho";
import Menu from "../templates/menu";
import VAGA from "../estados/useVagas.js";
import TabelaVagas from "../tabelas/vagas";
import { useState } from "react";
import FormularioVagas from "../formularios/vagas.jsx";

export default function Vagas() {

    const [controleTela, setControleTela] = useState(VAGA.listagem);
    const [dadosVagas, setDadosVagas] = useState([]);

    function gravarVaga(dados) {
        fetch("http://localhost:4000/vagas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        }).then((resposta) => {
            return resposta.json();
        }).then((dados) => {
            alert(dados.mensagem);
            setControleTela(VAGA.listagem);
        }).catch((erro) => {
            alert(erro)
            setControleTela(VAGA.listagem);
        });
    }

    function prepararAtualizacao(vaga) {
        setDadosVagas(vaga);
        setControleTela(VAGA.atualizar);
    }

    function atualizarVaga(vaga) {
        fetch("http://localhost:4000/vagas", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(vaga)
        }).then((resposta) => {
            return resposta.json();
        }).then((dados) => {
            alert(dados.mensagem);
            setControleTela(VAGA.listagem);
        }).catch((erro) => {
            alert(erro)
            setControleTela(VAGA.listagem);
        });
    }


    if (controleTela === VAGA.listagem) {
        return (
            <div>
                <Cabeçalho />
                <Menu />
                <TabelaVagas mudaTela={setControleTela}
                             prepararAtualizacao={prepararAtualizacao}/>
            </div>
        );
    }

    else if (controleTela === VAGA.cadastro) {
        return (
            <div>
                <Cabeçalho />
                <Menu />
                <FormularioVagas mudaTela={setControleTela}
                                 cadastraVaga={gravarVaga}/>
            </div>
        );
    }

    else if (controleTela === VAGA.atualizar) {
        return (
            <div>
                <Cabeçalho />
                <Menu />
                <FormularioVagas mudaTela={setControleTela}
                                 atualizaVaga={atualizarVaga}
                                 dados={dadosVagas}/>
            </div>
        );
    }
}