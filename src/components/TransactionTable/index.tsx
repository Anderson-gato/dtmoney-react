import { Container } from './styles'

export function TransactionTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de site</td>
                        <td className="deposit">R$12.000</td>
                        <td>Venda</td>
                        <td>24/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel do apartamento</td>
                        <td className="withdraw">-R$1.000</td>
                        <td>Casa</td>
                        <td>14/02/2022</td>
                    </tr>
                    <tr>
                        <td>Computador</td>
                        <td className="deposit">R$5.000</td>
                        <td>Venda</td>
                        <td>17/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
