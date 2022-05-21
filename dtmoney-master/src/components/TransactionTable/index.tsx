
import { useEffect } from "react";
import '../../styles/transiction.css';
import { api } from "../Services/api";


export function TransactionTable() {
    useEffect(() => {
        api.get('transactions')
        .then(data => console.log(data))

    }, [] );

    return (
        <div>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>R$ 12.000</td>
                    <td>Desenvolvimento</td>
                    <td>taltaltal</td>
                </tr>
</tbody>
<tbody>
                <tr>
                    <td>R$ 12.000</td>
                    <td>Desenvolvimento</td>
                    <td>taltaltal</td>
                </tr>
</tbody>

        </table>
            
        </div>
    )
}