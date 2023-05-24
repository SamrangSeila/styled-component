import React from 'react'
import Container from '../style/HeaderStyle'
import Headerimg from '../img/headerimg.jpg'
const Header = () => {
  return (
    <div>
        <Container>
        <div className='ruler'></div>
            <div className="img">
                <img src={Headerimg} alt="" />
            </div>
        </Container>
    </div>
  )
}

export default Header
