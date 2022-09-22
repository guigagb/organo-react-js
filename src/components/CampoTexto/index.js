import './CampoTexto.css'

const CampoTexto = ({label, placeholder, obrigatorio, valor, onChange}) => {

    const onChangeValue = (event)=>{
        onChange(event.target.value);
    }

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input value={valor} onChange={onChangeValue} placeholder={placeholder} required={obrigatorio} />
        </div>
    )
}

export default CampoTexto