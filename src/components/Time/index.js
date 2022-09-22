import CardColaborador from '../CardColaborador';
import './Time.css'

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {

    const styles = {
        time: {
            backgroundColor: corSecundaria
        },
        timeTitulo: {
            borderBottomColor: corPrimaria
        }
    }

    return (
        (colaboradores.length > 0) && 
        <section className='time' style={styles.time}>
            <h3 style={styles.timeTitulo}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador =>
                    <CardColaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corPrimaria={corPrimaria}
                    />
                )}
            </div>
        </section>
    )

}

export default Time;