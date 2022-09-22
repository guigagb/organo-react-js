import './CardColaborador.css'

const CardColaborador = ({nome, cargo, imagem, corPrimaria}) => {

    const styles = {
        cabecalho: {
            backgroundColor: corPrimaria
        }
    }

    return (
        <div className='colaborador'>
            <div className='cabecalho' style={styles.cabecalho}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default CardColaborador;