import './ListaSuspensa.css';

const ListaSuspensa = ({label, placeholder, itens, obrigatorio, valor, onChange}) => {

    const itensMapeados = itens.map(item => {
        return <option key={item.nome}>{item.nome}</option>
    })

    const onChangeLista = (event)=>{
        onChange(event.target.value)
    }

    return(
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select value={valor} placeholder={placeholder} onChange={onChangeLista} required={obrigatorio}>
                <option value=""></option>
                {itensMapeados}
            </select>
        </div>
    )
}

export default ListaSuspensa