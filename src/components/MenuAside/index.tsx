import { MenuAsideContainer } from './styled';
import { Menu } from './Menu';

export const MenuAside = () => {
    return (
        <MenuAsideContainer>
            <div className="dashboard-menuAside-logo">
                <h1>Logo</h1>
            </div>
            <Menu />
        </MenuAsideContainer>
    )
}