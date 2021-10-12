import styled from "styled-components";

export const CardInfoContainer = styled.section`
    margin-bottom: 30px;

    ul { 
        display: flex;
        justify-content: space-between;

        li {
            padding: 20px 20px;
            background-color: #FFF;
            display: flex;
            align-items: center;
            border-radius: 10px;
            width: 250px;
            justify-content: space-between;

            svg {
                width: 60px;
                height: 60px;
            }

            div {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                h4 {
                    font-size: 14px;
                    font-weight: bold;
                    font-family: 'Roboto', sans-serif;
                }
                span {
                    font-family: 'Roboto', sans-serif;
                }
            }
        }
    }
`