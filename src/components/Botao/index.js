import './Botao.css';

export const Botao = (props) => {

    return(
        <button class="botao">
            {props.children}
        </button>
    )
}