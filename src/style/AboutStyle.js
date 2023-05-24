import styled from "styled-components";

const Container = styled.div`
    padding:10px 50px 10px 50px;
    .title-about-us{
        text-align:center;
        margin-bottom:20px;
        border-bottom:5px solid black;
        span{
            font-size:20pt;
            font-weight:bold;
     
        }
    }
    .about{
        margin:20px 0px 20px 0px;
        .img{
            position:relative;
            height:50vh;
            width:100%;
            img{
                height:100%;
                width:100%;
            }
            .text{
                position:absolute;
                bottom:0;
                left:0;
                span{
                    font-weight:bold;
                    color:white;
                }
                p{
                    font-weight:bold;
                    color:white;
                    padding:20px 20px 20px 20px;
                    background-color: #2F4F4F;
                }
            }
            .text1{
                position:absolute;
                top:0;
                left:0;
                span{
                    font-weight:bold;
                    color:white;
                    font-size:20pt;
                }
          
            }
        }
    }
`
export default Container