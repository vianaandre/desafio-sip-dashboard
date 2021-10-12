import styled from "styled-components";

export const ListUserContainer = styled.div`

    margin-top: 20px;

    table {

        width: 100%;
        border-collapse: collapse;

       .dashboard-lastRequests-listUsers-header {
           width: 100%;
           background-color: #FAFAFA;
           border-bottom: 2px solid #EDEEEF;
          
           th {
               border: none;
               padding: 20px 20px;
               text-align: left;
               font-family: 'Roboto', sans-serif;
           }
        }

        .dashboard-lastRequests-listUsers-content {
            border-bottom: 1px solid #EDEEEF;

            td {
                font-size: 14px;
                font-family: 'Roboto', sans-serif;
                padding: 20px 20px;
                color: #505050;
            
                div {
                    display: flex;
                    gap: 10px;
                    align-items: center;

                    h4 {
                        font-weight: 600;
                    }

                    img {
                    width: 30px;
                    height: 30px;
                    background-size: cover;
                    border-radius: 50%
                }   
                }
            }
        } 
    }

    

`