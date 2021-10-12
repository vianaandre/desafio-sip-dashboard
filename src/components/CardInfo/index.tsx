import { MdOtherHouses, MdPeople, MdTopic, MdMuseum } from 'react-icons/md'
import { CardInfoContainer } from './styled';


export const CardInfo = () => {
    return (
        <CardInfoContainer>
            <ul>
                <li>
                    <MdOtherHouses
                    color={"#DCB654"} />
                    <div>
                        <h4>Unidades Registradas</h4>
                        <span>1</span>
                    </div>
                </li>
                <li>
                    <MdPeople  color={"#DCB654"}/>
                    <div>
                        <h4>Novos Clientes</h4>
                        <span>104</span>
                    </div>
                </li>
                <li>
                    <MdTopic  color={"#DCB654"}/>
                    <div>
                        <h4>Vendas realizadas</h4>
                        <span>7270</span>
                    </div>
                </li>
                <li>
                    <MdMuseum  color={"#DCB654"} />
                    <div>
                        <h4>Lucro Liquido(Geral)</h4>
                        <span>R$ 427.300,50</span>
                    </div>
                </li>
            </ul>
        </CardInfoContainer>
    )
}