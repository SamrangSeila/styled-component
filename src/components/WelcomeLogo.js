import React from 'react'
import Welcome from '../img/welcome.png'
import Container from '../style/WelcomeStyle'
const WelcomeLogo = () => {
    return (
        <div>   
         
            <Container>
            <div className='ruler-bottom'></div>
                <div className="img">
                    <img src={Welcome} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default WelcomeLogo
