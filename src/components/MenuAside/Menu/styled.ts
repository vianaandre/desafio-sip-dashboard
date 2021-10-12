import styled from 'styled-components';

export const MenuContainer = styled.nav`

    height: 400px;
    margin-top: 20px;   
     
    ul { 
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 40px;

        li {
            a {
                font-size: 20px;
                color: #212121;
                display: flex;
                align-items: center;
                gap: 20px;
                font-family: 'Roboto', sans-serif;
                font-weight: 500;

                &:hover{
                    color: #DCB654;
                }
            }

            .activeLink {
                color: #DCB654
            }
        }
    }

`