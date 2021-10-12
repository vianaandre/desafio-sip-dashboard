import styled from 'styled-components';

export const MenuAsideContainer = styled.aside`

    position: fixed;
    left: 0;
    height: 100vh;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 7px 0px 10px 3px rgba(0, 0, 0, 0.10);

    .dashboard-menuAside-logo {
        padding: 50px 0;
        h1 {
            font-size: 48px;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
            color: #DCB654
        }
    }

`