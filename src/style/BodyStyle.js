import styled from "styled-components";

const Container = styled.div`
    .btn-custom{    
        button{
        font-size:12pt;
        padding:5px 0px 5px 0px;
        &:hover{
            background-color:gray;
            color:white;   
            transform:scale(1.02);                                                                             
        }
       }
    }
/*Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
    display:grid;
    padding:40px;

    grid-template-columns: 1fr 1fr ;
    grid-template-rows:auto;
    grid-gap:20px;
    margin:0px 20px 0px 20px;
    margin-top: 70px;

    .btn-custom{
        margin-bottom:10px;
        margin-top:2px;
    
        width:100%;
        button{

            width:100%;
            border:none;
            background-color:#E3E4FA;
        }
    }
    .card{
        height:150px;
        background-color: #CCCCFF;
        display:flex;
        .img{
            background-color:white;
            height:150px;
            width:50%;
            display:flex;
            justify-content: center;
            align-items:center;
            img{
                height:100%;
                width:auto;
            }
        }
        .text{
            margin-left: 20px;
            width:50%;
            .title{
                font-size: 10pt;
                color:black;
                font-weight:bold;
                line-height: 10px;
            }
            .discount{
                font-size: 10pt;
                color:blue;
                font-weight:600;
                line-height: 10px;
            }
            .price{
                font-weight:600;
                font-size: 9pt;
                color:black;
                line-height: 10px;
     
            }
            .color{
                line-height: 10px;
                font-weight:bold;
                font-size: 8pt;
                display:flex;
               
                align-items:center;
                select{
                    height: 30px;
                    border:none;
                    margin-left:10px;
                    background-color: transparent;
                }
            }
            .size{
                line-height: 10px;
                font-weight:bold;
                font-size: 8pt;
                display:flex;
                align-items:center;
                select{
                    height: 30px;
                    margin-left:15px;
                    border:none;
                    background-color: transparent;
                }
            }
        }
        
    }

   }
	
/*Large devices (desktops, 992px and up)*/
@media (min-width: 992px) and (max-width: 1199.98px) {
    
     display:grid;
    padding:0px 5px 0px 5px;

    grid-template-columns: 1fr 1fr ;
    grid-template-rows:auto;
    grid-gap:20px;
    margin:0px 20px 0px 20px;
    margin-top: 70px;

    .btn-custom{
        margin-bottom:10px;
        margin-top:2px;
    
        width:100%;
        button{

            width:100%;
            border:none;
            background-color:#E3E4FA;
        }
    }
    .card{
        height:150px;
        background-color: #CCCCFF;
        display:flex;
        .img{
            background-color:white;
            height:150px;
            width:50%;
            display:flex;
            justify-content: center;
            align-items:center;
            img{
                height:100%;
                width:auto;
            }
        }
        .text{
            margin-left: 20px;
            width:50%;
            .title{
                font-size: 10pt;
                color:black;
                font-weight:bold;
                line-height: 10px;
            }
            .discount{
                font-size: 10pt;
                color:blue;
                font-weight:600;
                line-height: 10px;
            }
            .price{
                font-weight:600;
                font-size: 9pt;
                color:black;
                line-height: 10px;
     
            }
            .color{
                line-height: 10px;
                font-weight:bold;
                font-size: 8pt;
                display:flex;
               
                align-items:center;
                select{
                    height: 30px;
                    border:none;
                    margin-left:10px;
                    background-color: transparent;
                }
            }
            .size{
                line-height: 10px;
                font-weight:bold;
                font-size: 8pt;
                display:flex;
               
                align-items:center;
                select{
                    height: 30px;
                    margin-left:15px;
                    border:none;
                    background-color: transparent;
                }
            }
       
        }
    }
   
    .btn-custom{    
        button{
        font-size:12pt;
        padding:5px 0px 5px 0px;
        &:hover{
          button{
            background-color:yellow;
            color:black;
          }
        }
       }
    }
}

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) and (max-width: 991.98px) {
    display:grid;
    padding:0px 5px 0px 5px;

    grid-template-columns: 1fr 1fr ;
    grid-template-rows:auto;
    grid-gap:20px;
    margin:0px 20px 0px 20px;
    margin-top: 70px;

    .btn-custom{
        margin-bottom:10px;
        margin-top:2px;
    
        width:100%;
        button{

            width:100%;
            border:none;
            background-color:#E3E4FA;
        }
    }
    .card{
        height:100px;
        background-color: #CCCCFF;
        display:flex;
        .img{
            background-color:white;
            height:100px;
            width:40%;
            display:flex;
            justify-content: center;
            align-items:center;
            img{
                height:100%;
                width:auto;
            }
        }
        .text{
            margin-left: 20px;
            width:60%;
            .title{
                font-size: 8pt;
                color:black;
                font-weight:bold;
                line-height: 0;
            }
            .discount{
                font-size: 10pt;
                color:blue;
                font-weight:600;
                line-height: 0;
                font-size:7pt;
            }
            .price{
                font-weight:600;
                font-size: 7pt;
                color:black;
                line-height: 0;
     
            }
            .color{
                line-height: 0;
                font-weight:bold;
                font-size: 7pt;
                display:flex;
               
                align-items:center;
                select{
                    font-size: 7pt;
        
                    border:none;
                    margin-left:10px;
                    background-color: transparent;
                }
            }
            .size{
                line-height: 0;
                font-weight:bold;
                font-size: 7pt;
                display:flex;
               
                align-items:center;
                select{
                    font-size: 7pt;
                    margin-left:15px;
                    border:none;
                    background-color: transparent;
                }
            }
       
        }
    }
    .btn-custom{    
        button{
        font-size:8pt;
       }
    }
   
	

}

/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) and (max-width: 767.98px){ 
    display:grid;
    padding:0px 10px 0px 10px;

    grid-template-columns: 1fr 1fr ;
    grid-template-rows:auto;
    grid-gap:20px;
    margin:0px 20px 0px 20px;
    margin-top: 70px;

    .btn-custom{
        margin-bottom:10px;
        margin-top:2px;
    
        width:100%;
        button{

            width:100%;
            border:none;
            background-color:#E3E4FA;
        }
    }
    .card{
        height:100px;
        background-color: #CCCCFF;
        display:flex;
        .img{
            background-color:white;
            height:100px;
            width:40%;
            display:flex;
            justify-content: center;
            align-items:center;
            img{
                height:100%;
                width:auto;
            }
        }
        .text{
            margin-left: 20px;
            width:60%;
            .title{
                font-size: 8pt;
                color:black;
                font-weight:bold;
                line-height: 0;
            }
            .discount{
                font-size: 10pt;
                color:blue;
                font-weight:600;
                line-height: 0;
                font-size:7pt;
            }
            .price{
                font-weight:600;
                font-size: 7pt;
                color:black;
                line-height: 0;
     
            }
            .color{
                line-height: 0;
                font-weight:bold;
                font-size: 7pt;
                display:flex;
               
                align-items:center;
                select{
                    font-size: 7pt;
        
                    border:none;
                    margin-left:10px;
                    background-color: transparent;
                }
            }
            .size{
                line-height: 0;
                font-weight:bold;
                font-size: 7pt;
                display:flex;
               
                align-items:center;
                select{
                    font-size: 7pt;
                    margin-left:15px;
                    border:none;
                    background-color: transparent;
                }
            }
       
        }
    }
    .btn-custom{    
        button{
        font-size:8pt;
       }
    }
   
	

}
/*Extra small devices (portrait phones, less than 576px)*/
@media (max-width: 575.98px) {
    display:grid;
    padding:0px 10px 0px 10px;

    grid-template-columns: 1fr  ;
    grid-template-rows:auto;
    grid-gap:20px;
    margin:0px 20px 0px 20px;
    margin-top: 70px;

    .btn-custom{
        margin-bottom:10px;
        margin-top:2px;
    
        width:100%;
        button{

            width:100%;
            border:none;
            background-color:#E3E4FA;
        }
    }
    .card{
        height:150px;
        background-color: #CCCCFF;
        display:flex;
        .img{
            background-color:white;
            height:150px;
            width:50%;
            display:flex;
            justify-content: center;
            align-items:center;
            img{
                height:100%;
                width:auto;
            }
        }
        .text{
            margin-left: 20px;
            width:50%;
            .title{
                font-size: 10pt;
                color:black;
                font-weight:bold;
                line-height: 10px;
            }
            .discount{
                font-size: 10pt;
                color:blue;
                font-weight:600;
                line-height: 10px;
            }
            .price{
                font-weight:600;
                font-size: 9pt;
                color:black;
                line-height: 10px;
     
            }
            .color{
                line-height: 10px;
                font-weight:bold;
                font-size: 8pt;
                display:flex;
               
                align-items:center;
                select{
                    height: 30px;
                    border:none;
                    margin-left:10px;
                    background-color: transparent;
                }
            }
            .size{
                line-height: 10px;
                font-weight:bold;
                font-size: 8pt;
                display:flex;
               
                align-items:center;
                select{
                    height: 30px;
                    margin-left:15px;
                    border:none;
                    background-color: transparent;
                }
            }
       
        }
    }
   
	
}

`
export default Container