import styled from "styled-components";

const Container = styled.div`
    grid-template-columns:1 fr;
    grid-template-rows:auto;
    margin:10px 40px 10px 40px;
    grid-gap:20px;
    .service-title{
        font-size:20pt;
        font-weight:bold;
        text-align:center;
        background-color:gray;

        span{
            
        }
    }

    .service{
        margin-top:20px;
        .text{
            font-weight:bold;
            text-align:center;
            font-size:15pt;
            margin-bottom:10px;
            border-top:5px solid #DCDCDC;
            span{
                @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
                border-bottom:5px solid brown;
                font-family: 'Nunito', sans-serif;
            }

        }
        .img{
            
            height:50vh;
            width: 100%;
            img{
                height:100%;
                width:100%;
            }
        }
    }

    
`
export default Container;