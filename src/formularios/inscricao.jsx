import { useState, useRef } from "react";
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import CaixaSelecao from "../componentes/caixaSelecao.jsx";
import TabelaItensVagas from "../tabelas/itensVagas.jsx";


export default function FormularioInscricao() {

    const [validado, setValidado] = useState(false);
    const [vagaSelecionada, setVagaSelecionada] = useState({});
    const [inscricao, setInscricao] = useState({
        canvag_codigo: 0,
        canvag_horario: "",
        candidato: "",
        vaga: []
    });

    const can_cpf = useRef("");
    const can_nome = useRef("");
    const can_ctps = useRef("");
    const can_datanasc = useRef("");
    const can_endereco = useRef("");
    const can_bairro = useRef("");
    const can_municipio = useRef("");
    const can_cep = useRef("");
    const can_telefone = useRef("");
    const can_email = useRef("");
    const can_escolaridade = useRef("");


    function gravarInscricao() {
        try {
            fetch('http://localhost:4000/candidatos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    can_cpf: can_cpf.current.value,
                    can_nome: can_nome.current.value,
                    can_ctps: can_ctps.current.value,
                    can_datanasc: can_datanasc.current.value,
                    can_endereco: can_endereco.current.value,
                    can_bairro: can_bairro.current.value,
                    can_municipio: can_municipio.current.value,
                    can_cep: can_cep.current.value,
                    can_telefone: can_telefone.current.value,
                    can_email: can_email.current.value,
                    can_escolaridade: can_escolaridade.current.value,
                    vaga: inscricao.vaga
                })
            })
                .then((resposta) => {
                    return resposta.json()
                }).then((dados) => {
                    alert(dados.mensagem);
                })
        }
        catch {
            alert("Não foi possível cadastrar o candidato!")
        }
    }

    const manipulaSubmissao = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity()) {
            setValidado(false);
            gravarInscricao();
        }
        else {
            setValidado(true);
        }
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Container>
            <Form noValidate validated={validado} onSubmit={manipulaSubmissao} className="mt-3">
                <Row className="mb-3 justify-content-center">
                    <h3 className="mt-3 mb-3">Candidato, informe seus dados pessoais.</h3>
                    <Form.Group as={Col} md="6" controlId="can_nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            name="can_nome"
                            ref={can_nome}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a nome.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="can_cpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            name="can_cpf"
                            ref={can_cpf}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o cpf.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="can_ctps">
                        <Form.Label>CTPS</Form.Label>
                        <Form.Control
                            type="text"
                            name="can_ctps"
                            required
                            ref={can_ctps} />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a CTPS.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="can_datanasc">
                        <Form.Label>Data Nascimento</Form.Label>
                        <Form.Control
                            type="date"
                            required
                            name="can_datanasc"
                            ref={can_datanasc}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a data de nascimento.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="can_telefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            name="can_telefone"
                            ref={can_telefone}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o telefone.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="can_email">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            name="can_email"
                            ref={can_email}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o e-mail.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="can_escolaridade">
                        <Form.Label>Escolaridade</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            name="can_escolaridade"
                            ref={can_escolaridade}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe a escolaridade.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="can_endereco">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            name="can_endereco"
                            ref={can_endereco}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o endereço.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="can_bairro">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            name="can_bairro"
                            ref={can_bairro}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o bairro.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="can_municipio">
                        <Form.Label>Municipio</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            name="can_municipio"
                            ref={can_municipio}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o municipio.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="can_cep">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control
                            type="text"
                            required
                            name="can_cep"
                            ref={can_cep}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, informe o CEP.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row>
                    <Container className="border justify-content-center">
                        <h3 className="mt-3 mb-3">Agora escolha as vagas disponíveis.</h3>
                        <Row>
                            <Col md={2}>
                                <Form.Label>Selecione as vagas pretendidas</Form.Label>
                            </Col>
                            <Col>
                                <CaixaSelecao enderecoFonteDados={"http://localhost:4000/vagas"}
                                    campoChave={"vag_codigo"}
                                    campoExibicao={"vag_cargo"}
                                    funcaoSelecao={setVagaSelecionada} />
                            </Col>
                        </Row>
                        <Row className="justify-content-center mb-4">
                            <Col md={10}>
                                <Row>
                                    <Col md={1}>
                                        <Form.Group>
                                            <Form.Label>Código</Form.Label>
                                            <Form.Control type="text" value={vagaSelecionada?.vag_codigo} disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <Form.Label>Cargo</Form.Label>
                                            <Form.Control type="text" value={vagaSelecionada?.vag_cargo} disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col md={2}>
                                        <Form.Group>
                                            <Form.Label>Remuneração</Form.Label>
                                            <Form.Control type="text" value={vagaSelecionada?.vag_salario} disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col md={5}>
                                        <Form.Group>
                                            <Form.Label>Requisitos</Form.Label>
                                            <Form.Control type="text" value={vagaSelecionada?.vag_requisitos} disabled />
                                        </Form.Group>
                                    </Col>
                                    <Col md={1}>
                                        <Form.Group>
                                            <Form.Label>Adicionar</Form.Label>
                                            <Button onClick={() => {
                                                const existe = inscricao.vaga.some(item => item.vag_codigo === vagaSelecionada?.vag_codigo);
                                                if (!existe) {
                                                    setInscricao({
                                                        ...inscricao,
                                                        vaga: [...inscricao.vaga, {
                                                            vag_codigo: vagaSelecionada?.vag_codigo,
                                                            vag_cargo: vagaSelecionada?.vag_cargo,
                                                            vag_salario: vagaSelecionada?.vag_salario,
                                                            vag_cidade: vagaSelecionada?.vag_cidade,
                                                            vag_quantidade: vagaSelecionada?.vag_quantidade,
                                                            vag_requisitos: vagaSelecionada?.vag_requisitos
                                                        }],
                                                    });
                                                }
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-bag-plus-fill"
                                                    viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z" />
                                                </svg>
                                            </Button>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <p><strong>Cargos pretendidos:</strong></p>
                            <TabelaItensVagas
                                listaItens={inscricao}
                                setInscricao={setInscricao}
                                dadosInscricao={inscricao} />
                        </Row>
                    </Container>
                </Row>
                <Button className="mt-3 mb-3" type="submit">Cadastrar</Button>
            </Form>
        </Container>
    );
}