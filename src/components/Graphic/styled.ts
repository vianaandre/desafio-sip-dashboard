import styled from "styled-components";

export const GraphicContainer = styled.section`

    background-color: #FFF;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 5px 7px 5px rgba(0, 0, 0, 0.10);

    .dashboard-graphic-info {
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        h2 {
            font-size: 24px;
            color: #313131;
            opacity: 0.9;
            font-weight: 600;
            font-family: 'Roboto', sans-serif;
        }

        div { 
            margin-left: auto;
            display: flex;
            gap: 20px;
            
            span {
                font-size: 14px;
                font-family: 'Roboto', sans-serif;
                color: #313131;
                opacity: 0.9;
                display: flex;
                align-items: center;
                gap: 5px;
            }

            span:before {
                content: '';
                width: 25px;
                height: 3px;
                display: block;
                background-color: #7E3F8F;
                border-radius: 10px;
            }
            span:nth-child(2)::before {
                background-color: #DCB654
            }
        }
    }

`