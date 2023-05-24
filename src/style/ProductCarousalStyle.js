import styled from "styled-components";

const Container = styled.div`
    grid-template-columns:1fr;
    grid-template-rows:auto;
   
    .slide-section{
        margin: 10px 50px 10px 50px;
        .img{

            width: 100%;
            height: 70vh;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
`

export default Container