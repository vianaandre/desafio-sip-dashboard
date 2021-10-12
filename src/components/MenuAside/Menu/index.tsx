import { useEffect, useState } from 'react';
import { MenuContainer } from './styled';
import { MdDashboardCustomize, MdAddShoppingCart, MdOutlineProductionQuantityLimits, MdPeople, MdOutlineAttachMoney } from 'react-icons/md'

export const Menu = () => {
    const [ path, setPath ] = useState<string>('/')

    useEffect(() => {
        const pathname = window.document.location.pathname;
        setPath(pathname)
    }, [])

    return (
        <MenuContainer>
            <ul>
                <li>
                    <a href="/" className={path === '/' ? 'activeLink' : ''} >
                        <MdDashboardCustomize />
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/pedidos" className={path === '/pedidos' ? 'activeLink' : ''}>
                        <MdAddShoppingCart />
                        Pedidos
                    </a>
                </li>
                <li>
                    <a href="/produtos" className={path === '/produtos' ? 'activeLink' : ''}>
                        <MdOutlineProductionQuantityLimits />
                        Produtos
                    </a>
                </li>
                <li>
                    <a href="/clientes" className={path === '/clientes' ? 'activeLink' : ''}>
                        <MdPeople />
                        Clientes
                    </a>
                </li>
                <li>
                    <a href="financeiro" className={path === '/financeiro' ? 'activeLink' : ''}>
                        <MdOutlineAttachMoney />
                        Financeiro
                    </a>
                </li>
            </ul>
        </MenuContainer>
    )
}