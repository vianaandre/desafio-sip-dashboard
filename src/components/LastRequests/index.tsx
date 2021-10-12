import { LastRequestsContainer } from './styled';
import { ListUser } from './ListUser';

export const LastRequests = () => {
    return (
        <LastRequestsContainer>
            <h2>Ultimos pedidos realizados</h2>
            <ListUser />
        </LastRequestsContainer>
    )
}