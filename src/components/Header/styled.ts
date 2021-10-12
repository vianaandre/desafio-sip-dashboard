import styled from "styled-components";

export const HeaderContainer = styled.header`

    display: flex;
    margin-bottom: 30px;

    .dashboard-header-search {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        background-color: #FFF;
        width: 400px;
        height: 40px;
        border-radius: 20px;

        input {
            height: 100%;
            width: 100%;
            font-size: 16px;
            margin-left: 10px;
            border: none;
            font-family: 'Roboto', sans-serif;

            &:focus {
                outline: none;
                box-shadow: none;
            }
        }
    }

    .dashboard-header-notifications {
        margin-left: auto;
        display: flex;

        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-left: 10px;
        }

       div {
           position: relative;
            svg {
                width: 30px;
                height: 30px;
                path {
                    opacity: 0.8;
                }
            }
            div {
                position: absolute;
                right: 1px;
                top: 0px;
                width: 13px;
                height: 13px;
                border-radius: 50%;
                background-color: #DCB654
            }
       }
    }

`