import { useState } from "react";
import styles from "./Formulario.module.css"

function Formulario() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const soma = peso / (altura * altura);

    const retornaImc = () => {
        if(peso === 0 || isNaN(peso) || altura === 0 || isNaN(altura))  {
            return ''
        } else {
            return soma.toFixed(2);
        }
    }
    
    const retornaClassificacao = () => {
        if (soma <= 18.5) {
            return 'Baixo peso'
        } if (soma <= 24.99) {
            return 'Normal'
        } if (soma <= 29.99) {
            return 'Sobrepeso'
        } if (soma <= 34.99) {
            return 'Obesidade classe 1'
        } if (soma <= 39.99) {
            return 'Obesidade classe 2'
        } if(soma >= 40) {
            return 'Obesidade classe 3'
        }
    }

    const previniDefault = (evento) => {
        evento.preventDefault();
        retornaImc()
    }

    return (
        <div className="container">
            <h1 className="d-flex justify-content-center">Calculo de IMC</h1>
            <form onSubmit={previniDefault} className="d-flex flex-column">
                <label>
                    Peso (em kg):
                    <input required className="mb-4 form-control" type="number" onBlur={evento => setPeso(evento.target.value)} />
                </label>
                <label>
                    Altura (em Metros):
                    <input required step='0.01' className="mb-4 form-control" type="number" onBlur={evento => setAltura(parseFloat(evento.target.value))} />
                </label>
                <button type="submit" className={styles.btnCalcular} >Calcular</button>
                <span>Resultado: {retornaImc()}</span>
                <span>Classificação: {retornaClassificacao()}</span>
            </form>
        </div>
    )
}

export default Formulario;