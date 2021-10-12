import { MdOutlineSearch, MdOutlineNotificationsNone } from 'react-icons/md';
import { HeaderContainer } from './styled';

export const Header = () => {
    return (
        <HeaderContainer>
            <div className="dashboard-header-search">
                <MdOutlineSearch />
                <input type="text" placeholder="Pesquisar..." />
            </div>
            <div className="dashboard-header-notifications">
                <div>
                    <div />
                    <MdOutlineNotificationsNone />
                </div>
                <img src="https://avatars.githubusercontent.com/u/67127843?v=4" alt="Foto do usuárip"  />
            </div>
        </HeaderContainer>
    )
}