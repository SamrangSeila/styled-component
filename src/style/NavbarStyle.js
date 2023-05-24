
import styled from 'styled-components'

const Container = styled.div`



    /*Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
    background-color: #CCCCFF;
    display:flex;
    justify-content: space-between;
    align-items: center;
    /* position:sticky;
    top:0;
    left:0; */
    .logo{
        display:flex;
        justify-content: center;
        align-items: center;
        .img{

            height:80px;
            width:60px;
            margin-left:15px;
            margin-right:15px;
            margin-bottom:10px;
            img{
                border-radius:100%  ;
                height: 100%;
                width:100%;
            }
        }
        .text{
            span{
                font-weight:bold;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            }
        }
    }
    .menu{
       
        ul{
            display:flex;
            justify-content:center;
            align-items:center;
            li{
                list-style-type: none;
                width:100px;
                line-height:30px;
                text-align:center;
                margin:0px 10px 0px;


                
                a{
                    text-decoration:none;
                    font-weight:600;
                    &:hover{
                        color:white;
                    }
                }
                &:hover{
                    background-color: blue;
                    color:white;
                }
            }
        }
    }
    .account{
        display:flex;
        justify-content:center;
        align-items:center;
      ul{
        display:flex;
        justify-content: center;
        align-items:center;
        li{
            width: 100px;
            list-style-type: none;
            .btn-account{

                background: blue;
                border-radius:5px;
                color:white;
                padding-right:10px;
                padding-left:10px;
                &:hover{
                    background-color:#6495ED;
                    transform:scale(1.1);
                }
            }
            .btn-menu{
                display:none;
            }
        }
      }
    }
	
}
/*Large devices (desktops, 992px and up)*/
@media (min-width: 992px) and (max-width: 1199.98px) {
    background-color: #CCCCFF;
    display:flex;
    justify-content: space-between;
    align-items: center;
    /* position:sticky;
    top:0;
    left:0; */
    .logo{
        display:flex;
        justify-content: center;
        align-items: center;
        .img{

            height:50px;
            width:60px;
            margin-left:15px;
            margin-right:15px;
            margin-bottom:10px;
            img{
                border-radius:100%  ;
                height: 100%;
                width:100%;
            }
        }
        .text{
            span{
                font-weight:bold;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            }
        }
    }
    .menu{

        ul{
            display:flex;
            justify-content:center;
            align-items:center;
            li{
                list-style-type: none;
                width:80px;
                line-height:30px;
                text-align:center;
                margin:0px 10px 0px;


                
                a{
                    text-decoration:none;
                    font-weight:600;
                    font-size:10pt;
                    &:hover{
                        color:white;
                    }
                }
                &:hover{
                    background-color: blue;
                    color:white;
                }
            }
        }
    }
    .account{
        display:flex;
        justify-content:center;
        align-items:center;
      ul{
        display:flex;
        justify-content: center;
        align-items:center;
        li{
            width: 100px;
            list-style-type: none;
            .btn-account{
                display:block;
                background: blue;
                border-radius:5px;
                color:white;
                padding-right:10px;
                padding-left:10px;
                &:hover{
                    background-color:#6495ED;
                    transform:scale(1.1);
                }
            }
            .btn-menu{
                display:none;
            }
        }
      }
    }
	
}
	

/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) and (max-width: 991.98px) {
    background-color: #CCCCFF;
    display:flex;
    justify-content: space-between;
    align-items: center;
    /* position:sticky;
    top:0;
    left:0; */
    .logo{
        display:flex;
        justify-content: center;
        align-items: center;
        .img{

            height:40px;
            width:60px;
            margin-left:15px;
            margin-right:15px;
            margin-bottom:10px;
            img{
                border-radius:100%  ;
                height: 100%;
                width:100%;
            }
        }
        .text{
            span{
                font-weight:bold;
                font-size:9pt;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            }
        }
    }
    .menu{

        ul{
            display:flex;
            justify-content:center;
            align-items:center;
            li{
                list-style-type: none;
                width:80px;
                line-height:30px;
                text-align:center;
                margin:0px 10px 0px;


                
                a{
                    text-decoration:none;
                    font-weight:600;
                    font-size:10pt;
                    &:hover{
                        color:white;
                    }
                }
                &:hover{
                    background-color: blue;
                    color:white;
                }
            }
        }
    }
    .account{
        display:flex;
        justify-content:center;
        align-items:center;
      ul{
        display:flex;
        justify-content: center;
        align-items:center;
        li{
            width: 100px;
            list-style-type: none;
            .btn-account{
                background: blue;
                border-radius:5px;
                color:white;
                font-size:10pt;
                padding-right:10px;
                padding-left:10px;
                &:hover{
                    background-color:#6495ED;
                    transform:scale(1.1);
                }
            }
            .btn-menu{
                display:none;
            }
        }
      }
    }
	
}


/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) and (max-width: 767.98px){ 
    background-color: #CCCCFF;
    display:flex;
    justify-content: space-between;
    align-items: center;
    /* position:sticky;
    top:0;
    left:0; */
    
    .logo{
        display:flex;
        justify-content: center;
        align-items: center;
        .img{

            height:30px;
            width:30px;
            margin-left:15px;
            margin-right:15px;
            margin-bottom:10px;
            img{
                border-radius:100%  ;
                height: 100%;
                width:100%;
            }
        }
        .text{
            display:flex;
            justify-content:center;
            align-items:center;
            span{
                font-weight:bold;
                font-size:9pt;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            }
        }
    }
    .menu{
        display:none;
        ul{
            display:flex;
            justify-content:center;
            align-items:center;
            li{
                list-style-type: none;
                width:100px;
                line-height:30px;
                text-align:center;
                margin:0px 10px 0px;


                
                a{
                    text-decoration:none;
                    font-weight:600;
                    &:hover{
                        color:white;
                    }
                }
                &:hover{
                    background-color: blue;
                    color:white;
                }
            }
        }
    }
    .account{
        display:flex;
        justify-content:center;
        align-items:center;
      ul{
        display:flex;
        justify-content: center;
        align-items:center;
        li{
            width: 100px;
            list-style-type: none;
            .btn-account{
                display:none;
                background: blue;
                border-radius:5px;
                color:white;
                padding-right:10px;
                padding-left:10px;
                &:hover{
                    background-color:#6495ED;
                    transform:scale(1.1);
                }
            }
            .btn-menu{
                padding:0px 10px 0px 10px;
                display:block;
                font-size:12pt;
              
            }
        }
      }
    }
	
}


/*Extra small devices (portrait phones, less than 576px)*/

@media (max-width: 575.98px) {
    background-color: #CCCCFF;
    display:flex;
    justify-content: space-between;
    align-items: center;
    /* position:sticky;
    top:0;
    left:0; */
    .logo{
        display:flex;
        justify-content: center;
        align-items: center;
        .img{

            height:30px;
            width:40px;
            margin-left:15px;
            margin-right:15px;
            margin-bottom:10px;
            img{
                border-radius:100%  ;
                height: 100%;
                width:100%;
            }
        }
        .text{
            display:flex;
            justify-content:center;
            align-items:center;
            margin-bottom:6px;
            span{
                font-weight:bold;
                font-size:7pt;
                font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            }
        }
    }
    .menu{
        display:none;
        ul{
            display:flex;
            justify-content:center;
            align-items:center;
            li{
                list-style-type: none;
                width:100px;
                line-height:30px;
                text-align:center;
                margin:0px 10px 0px;


                
                a{
                    text-decoration:none;
                    font-weight:600;
                    &:hover{
                        color:white;
                    }
                }
                &:hover{
                    background-color: blue;
                    color:white;
                }
            }
        }
    }
    .account{
        display:flex;
        justify-content:center;
        align-items:center;
      ul{
        display:flex;
        justify-content: center;
        align-items:center;
        li{
            width: 100px;
            list-style-type: none;
            .btn-account{
                display:none;
                background: blue;
                border-radius:5px;
                color:white;
                padding-right:10px;
                padding-left:10px;
                &:hover{
                    background-color:#6495ED;
                    transform:scale(1.1);
                }
            }
            .btn-menu{
                padding:0px 8px 0px 8px;
                display:block;
                font-size:10pt;
                
            }
        }
      }
    }
	
}


`

export default Container
