import { Container, Table, Button, Accordion } from "react-bootstrap";
import { Form, Navbar } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

export default function TabelaCandidatos() {

    const [candidatos, setCandidatos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/candidatos",
            {
                method: "GET"
            }).then((resposta) => {
                return resposta.json()
            }).then((dados) => {
                setCandidatos(dados.listaCandidatos)
            });
    }, [])

    function buscarNome(nome) {
        fetch("http://localhost:4000/candidatos/" + nome,
            {
                method: "GET"
            }).then((resposta) => {
                return resposta.json()
            }).then((dados) => {
                setCandidatos(dados.listaCandidatos)
            });
    }

    function passaNome() {
        const dadosnome = pesquisa.current.value
        buscarNome(dadosnome)
    }

    const pesquisa = useRef("")

    return (
        <Container className='mb-5'>
            <Navbar expand="lg" className="mt-2 mb-2">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Busca por nome"
                            className="me-2"
                            aria-label="Search"
                            name="pesquisa"
                            id="pesquisa"
                            ref={pesquisa}
                        />
                        <Button variant="outline-dark" onClick={passaNome}>Pesquisar</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Table className="text-center">
                <thead>
                    <tr>
                        <th>Candidatos registrados</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        candidatos.map((candidato) => {
                            let datanasc = new Date(candidato.can_datanasc)
                            return (
                                <tr key={candidato.can_cpf}>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>
                                                <p>
                                                    <strong>CPF</strong> {candidato.can_cpf}  |
                                                    <strong>  NOME:</strong> {candidato.can_nome}   |
                                                    <strong>  DATA NASC:</strong> {datanasc.toLocaleDateString()} |
                                                    <strong>  ENDEREÇO:</strong> {candidato.can_endereco} |
                                                    <strong>  CIDADE:</strong> {candidato.can_municipio}  |
                                                    <strong>  TELEFONE:</strong> {candidato.can_telefone}  |
                                                    <strong>  E-MAIL:</strong> {candidato.can_email}  |
                                                </p>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Table>
                                                    <thead>
                                                        <tr>
                                                            <th>CODIGO</th>
                                                            <th>CARGO</th>
                                                            <th>SALARIO</th>
                                                            <th>CIDADE</th>
                                                            <th>QUANTIDADE VAGAS</th>
                                                            <th>REQUISITOS</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {candidato.vaga.map((linha, index) => {
                                                            return (
                                                                <tr key={index}>
                                                                    <td>{linha.vaga.vag_codigo}</td>
                                                                    <td>{linha.vaga.vag_cargo}</td>
                                                                    <td>{linha.vaga.vag_salario}</td>
                                                                    <td>{linha.vaga.vag_cidade}</td>
                                                                    <td>{linha.vaga.vag_quantidade}</td>
                                                                    <td>{linha.vaga.vag_requisitos}</td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </tbody>
                                                </Table>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}