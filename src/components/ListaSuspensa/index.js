import './ListaSuspensa.css';

export const ListaSuspensa = (props) => {
    console.log(props.itens)
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value ={props.value} onChange={evento => props.aoAlterado(evento.target.value)} required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}