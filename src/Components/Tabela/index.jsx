import styles from './Tabela.module.css'

function Tabela() {
    return (
        <div className="container d-flex justify-content-center">
            <table className='mt-4'>
                <thead>
                    <tr>
                        <td className={styles.tableHeader}>Valor IMC</td>
                        <td className={styles.tableHeader}>Classificação</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Menor que 18,5</td>
                        <td>Baixo peso</td>
                    </tr>
                    <tr>
                        <td>De 18,5 a 24,99</td>
                        <td>Normal</td>
                    </tr>
                    <tr>
                        <td>De 25 a 29,99</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td>De 30 a 34,99</td>
                        <td>Obesidade classe 1</td>
                    </tr>
                    <tr>
                        <td>De 35 a 39,99</td>
                        <td>Obesidade classe 2</td>
                    </tr>
                    <tr>
                        <td>Maior ou igual a 40</td>
                        <td>Obesidade classe 3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Tabela;