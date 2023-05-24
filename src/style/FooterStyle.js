import styled from "styled-components";

const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr ;
    grid-template-rows:auto;
    margin:0px 10px 0px 10px;
    .img{
        width:100%;
        height:150px;
        img{
            width:100%;
            height:100%;
        }
    }

`

export default Container;