import React from 'react'
import Servicepic from '../img/service.jpg'
import Servicepic1 from '../img/service1.jpg'
import Servicepic2 from '../img/service2.jpg'
import Container from '../style/ServiceBodyStyle'

const ServiceBody = () => {
    return (
        <div>
            <Container>
             
                <div className='service'>
                    <div className="text">
                        <span> Purchase Product </span> 
                    </div>
                    <div className='img'>
                        <img src={Servicepic} alt="" />
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestiae doloribus et tenetur repellat eius. Omnis vel delectus iusto. Tenetur provident similique perspiciatis quae unde distinctio maxime aperiam veniam iure? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos labore nemo, enim delectus, natus mollitia magnam repudiandae tempora in id cumque adipisci dolorem laudantium dolore numquam sit nobis similique excepturi.</p>
                </div>
             
                <div className='service'>
                    <div className="text">
                        <span> Sell Product </span> 
                    </div>
                    <div className='img'>
                        <img src={Servicepic1} alt="" />
                    </div>

                    <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odit neque rerum voluptates quia quasi doloribus reiciendis, autem asperiores ea harum in sunt, praesentium nobis dolorum doloremque, quam perspiciatis omnis. ipsum dolor sit amet, consectetur adipisicing elit. Quos labore nemo, enim delectus, natus mollitia magnam repudiandae tempora in id cumque adipisci dolorem laudantium dolore numquam sit nobis similique excepturi.</p>
                </div>
             
                <div className='service'>
                    <div className="text">
                        <span> Buy Product </span> 
                    </div>
                    <div className='img'>
                        <img src={Servicepic2    } alt="" />
                    </div>

                    <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aspernatur magnam saepe nemo beatae non, nisi officiis sunt quod, dolor reiciendis eligendi nobis ullam iure! Incidunt beatae consequatur suscipit. Vel.
                     ipsum dolor sit amet, consectetur adipisicing elit. Quos labore nemo, enim delectus, natus mollitia magnam repudiandae tempora in id cumque adipisci dolorem laudantium dolore numquam sit nobis similique excepturi.</p>
                </div>
            </Container>
        </div>
    )
}

export default ServiceBody
