import styled from "styled-components"
import { Link } from "react-router-dom"

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

const OpcaoContainer = styled.ul`
    display: flex;
`
const Lista = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
function OpcoesHeader() {
    return (
        <OpcaoContainer>
            { textoOpcoes.map( (texto) => (
                <Link to={`/${texto.toLowerCase()}`} ><Lista><p>{texto}</p></Lista></Link>
             ) ) }
       </OpcaoContainer>
    )
}

export default OpcoesHeader