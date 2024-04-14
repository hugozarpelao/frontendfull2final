import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import VAGA from '../estados/useVagas.js';

export default function FormularioVagas(props) {

    const [formValidado, setFormValidado] = useState(false);
    const dadosAtualização = props.dados

    useEffect(() => {
        if (props.dados) {
            vag_cargo.current.value = props.dados.vag_cargo
            vag_salario.current.value = props.dados.vag_salario
            vag_cidade.current.value = props.dados.vag_cidade
            vag_quantidade.current.value = props.dados.vag_quantidade
            vag_requisitos.current.value = props.dados.vag_requisitos
        }
    }, []);

    const vag_cargo = useRef("");
    const vag_salario = useRef("");
    const vag_cidade = useRef("");
    const vag_quantidade = useRef("");
    const vag_requisitos = useRef("");

    function preparaJSON() {
        if (dadosAtualização) {
            const vaga = {
                vag_codigo: props.dados.vag_codigo,
                vag_cargo: vag_cargo.current.value,
                vag_salario: vag_salario.current.value,
                vag_cidade: vag_cidade.current.value,
                vag_quantidade: vag_quantidade.current.value,
                vag_requisitos: vag_requisitos.current.value
            }
            return vaga
        }
        else {
            const vaga = {
                vag_cargo: vag_cargo.current.value,
                vag_salario: vag_salario.current.value,
                vag_cidade: vag_cidade.current.value,
                vag_quantidade: vag_quantidade.current.value,
                vag_requisitos: vag_requisitos.current.value
            }
            return vaga
        }
    }


    function manipularSubmissao(evento) {
        const formulario = evento.currentTarget;
        if (formulario.checkValidity()) {
            if (dadosAtualização) {
                const dados = preparaJSON();
                props.atualizaVaga(dados);
            }
            else {
                const dados = preparaJSON();
                props.cadastraVaga(dados);
            }
        }
        evento.preventDefault();
        evento.stopPropagation();
        setFormValidado(true);
    };

    return (
        <Container className="mb-3 mt-3 text-center">
            <h3>Cadastro de Vaga</h3>
            <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                <Row className='mt-2 mb-2  justify-content-center'>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Nome Cargo</Form.Label>
                            <Form.Control
                                id="vag_cargo"
                                name="vag_cargo"
                                required
                                type="text"
                                ref={vag_cargo}
                            />
                            <Form.Control.Feedback type="invalid">
                                Informe o nome do cargo.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group>
                            <Form.Label>Salário</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    id='vag_salario'
                                    name='vag_salario'
                                    type="text"
                                    required
                                    ref={vag_salario}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Informe o salário da vaga.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Cidade</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    id='vag_cidade'
                                    name='vag_cidade'
                                    type="text"
                                    required
                                    ref={vag_cidade}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Informe a cidade da vaga.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Quantidade</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    id='vag_quantidade'
                                    name='vag_quantidade'
                                    type="number"
                                    required
                                    ref={vag_quantidade}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Informe a quantidade.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className='mt-2 justify-content-center'>
                    <Col md={8}>
                        <Form.Group>
                            <Form.Label>Requisitos</Form.Label>
                            <InputGroup hasValidation>
                                <Form.Control
                                    id='vag_requisitos'
                                    name='vag_requisitos'
                                    type="text"
                                    required
                                    ref={vag_requisitos}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Informe o endereço
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Button type="submit" className='mt-3 me-2' variant='outline-primary'>Cadastrar</Button>
                <Button variant="outline-secondary" className='mt-3' onClick={() => { props.mudaTela(VAGA.listagem) }} >Voltar</Button>
            </Form>
        </Container>
    );
}
