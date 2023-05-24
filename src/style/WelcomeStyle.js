import styled from "styled-components";

const Container = styled.div`

    .ruler-bottom{
        background:red;
        height:4px;    
        box-shadow: 10px 1px 20px 5px red;
    }
    .img{
        padding-top:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        height: 70px;
        width: 100%;
        margin-top:15px;
        
        img{
            height:100%;
            width:20%;
  
        }
    }

    /*Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
	
    .ruler-bottom{
        background:red;
        height:4px;    
        box-shadow: 10px 1px 20px 5px red;
    }
    .img{
        padding-top:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        height: 70px;
        width: 100%;
        margin-top:15px;
        
        img{
            height:100%;
            width:20%;
  
        }
    }
}
/*Large devices (desktops, 992px and up)*/
@media (min-width: 992px) and (max-width: 1199.98px) {
	
    .ruler-bottom{
        background:red;
        height:4px;    
        box-shadow: 10px 1px 20px 5px red;
    }
    .img{
        padding-top:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        height: 70px;
        width: 100%;
        margin-top:15px;
        
        img{
            height:100%;
            width:20%;
  
        }
    }
}
/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) and (max-width: 991.98px) {
	
    .ruler-bottom{
        background:red;
        height:4px;    
        box-shadow: 10px 1px 10px 1px red;
    }
    .img{
        padding-top:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        height: 70px;
        width: 100%;
        margin-top:15px;
        
        img{
            height:100%;
            width:20%;
  
        }
    }
}

/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) and (max-width: 767.98px){ 
	
    .ruler-bottom{
        background:red;
        height:4px;    
        box-shadow: 10px 1px 10px 1px red;
    }
    .img{
        padding-top:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        height: 70px;
        width: 100%;
        margin-top:15px;
        
        img{
            height:100%;
            width:20%;
  
        }
    }
}

/*Extra small devices (portrait phones, less than 576px)*/
@media (max-width: 575.98px) {
	
    .ruler-bottom{
        background:red;
        height:4px;    
        box-shadow: 10px 1px 10px 1px red;
    }
    .img{
        padding-top:20px;
        display:flex;
        justify-content:center;
        align-items:center;
        height: 70px;
        width: 100%;
        margin-top:15px;
        
        img{
            height:100%;
            width:20%;
  
        }
    }
}

`

export default Container