import { Button, Table } from "react-bootstrap";


export default function TabelaItensVagas(props) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Cargo</th>
                        <th>Salário</th>
                        <th>Cidade</th>
                        <th>Requisitos</th>
                        <th>Qte Vagas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaItens?.vaga.map((item, indice) => {
                            return <tr key={indice}>
                                <td>{item.vag_codigo}</td>
                                <td>{item.vag_cargo}</td>
                                <td>{item.vag_salario}</td>
                                <td>{item.vag_cidade}</td>
                                <td>{item.vag_requisitos}</td>
                                <td>{item.vag_quantidade}</td>
                                <td>
                                    <Button onClick={() => {
                                        const lista = props.listaItens.vaga.filter((vag) => vag.vag_codigo !== item.vag_codigo);
                                        props.setInscricao({ ...props.dadosInscricao, vaga: lista });
                                    }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-dash" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z" />
                                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                        </svg>
                                    </Button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}