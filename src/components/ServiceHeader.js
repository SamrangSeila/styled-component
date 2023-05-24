import React from 'react'
import Container from '../style/ServiceHeaderStyle'
import Shoppic from '../img/serviceheader.jpg'
const ServiceHeader = () => {
  return (
    <div>
      <Container>
        <div className='img'>
            <img src={Shoppic} alt="" />
        </div>
      </Container>
    </div>
  )
}

export default ServiceHeader
