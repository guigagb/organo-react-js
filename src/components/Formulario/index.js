import './Formulario.css'
import CampoTexto from "../CampoTexto"
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = ({times, submitColaborador}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState(times[0])

    function onSubmit(event) {
        event.preventDefault();
        submitColaborador({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={onSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o seu nome"
                    valor={nome}
                    onChange={setNome}
                />
                <CampoTexto
                    obrigatorio
                    label="Cargo"
                    placeholder="Digite o seu cargo"
                    valor={cargo}
                    onChange={setCargo}
                />
                <CampoTexto
                    obrigatorio
                    label="Imagem"
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    onChange={setImagem}
                />
                <ListaSuspensa
                    obrigatorio label="Time"
                    placeholder="Informe o time" 
                    itens={times} 
                    valor={time}
                    onChange={setTime}
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )

}

export default Formulario