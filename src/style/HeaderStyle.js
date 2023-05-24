import styled from "styled-components"

const Container = styled.div`
    background: red;
    .img{
        height: 80vh;
        width:auto;
        img{
            height:100%;
            width:100%;
        }
        
    }
    /*Extra large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {
    background: red;
    .ruler{
        background:red;
        height:4px;    
        box-shadow: 10px 1px 20px 5px red;
        
    }
    .img{
        height: 80vh;
        width:auto;
        img{
            height:100%;
            width:100%;
        }
        
    }
	
}
/*Large devices (desktops, 992px and up)*/
@media (min-width: 992px) and (max-width: 1199.98px) {
    background: red;
      .ruler{
        background:red;
        height:4px;    
        box-shadow: 10px 1px 20px 5px red;
        
    }
    .img{
        height: 70vh;
        width:auto;
        img{
            height:100%;
            width:100%;
        }
        
    }
}
/*Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) and (max-width: 991.98px) {
      .ruler{
        background:red;
        height:4px;    
        box-shadow: 10px 5px 10px 5px red;
        
    }
    background: red;
    .img{
        height: 70vh;
        width:auto;
        img{
            height:100%;
            width:100%;
        }
        
    }
}

/*Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) and (max-width: 767.98px){ 
    background: red;
    .ruler{
        background:red;
        height:4px;    
        box-shadow: 10px 5px 10px 5px red;
        
    }
    .img{
        height: 50vh;
        width:auto;
        img{
            height:100%;
            width:100%;
        }
        
    }
}

/*Extra small devices (portrait phones, less than 576px)*/
@media (max-width: 575.98px) {
    background: red;
    .ruler{
        background:red;
        height:4px;    
        box-shadow: 10px 5px 10px 5px red;
        
    }
    .img{
        height: 30vh;
        width:auto;
        img{
            height:100%;
            width:100%;
        }
        
    }
}

`
export default Container
