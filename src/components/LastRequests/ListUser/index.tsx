import { MdEditCalendar, MdBorderColor } from 'react-icons/md'
import { ListUserContainer } from './styled';
import { users } from './data';

export const ListUser = () => {
    return (
        <ListUserContainer>
            <table>
                <tr className="dashboard-lastRequests-listUsers-header">
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Nº do Pedido</th>
                    <th>Método de Pagamento</th>
                    <th></th>
                </tr>   
            {users.map(({ data, email, hour, image, method, name, request }) => (
                <tr className="dashboard-lastRequests-listUsers-content">
                    <td className="dashboard-lastRequests-listUsers-content-name">
                        <div>
                            <img src={image} alt="Foto do usuário" />
                            <h4>{name}</h4>
                        </div>
                    </td>
                    <td>{email}</td>
                    <td>{data}</td>
                    <td>{hour}</td>
                    <td>{request}</td>
                    <td>{method}</td>
                    <td className="dashboard-lastRequests-listUsers-content-icons">
                        <div>
                            <MdBorderColor />
                            <MdEditCalendar />
                        </div>
                    </td>
                </tr>
            ))}
            </table>
        </ListUserContainer>
    )
}