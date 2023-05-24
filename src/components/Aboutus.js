import React from 'react'
import Container from '../style/AboutStyle'
import Focus from '../img/focus.jpg'
import Focus1 from '../img/focus1.jpg'
import Focus2 from '../img/focus3.jpg'
const Aboutus = () => {
    return (
        <div>
            <Container>
                <div className='title-about-us'>
                    <span>About us</span>
                </div>
                <div className='about'>

                    <div className='img'>
                        <img src={Focus} alt="" />
                        <div className="text">

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quis blanditiis amet sed quam rerum accusantium, ut voluptates vero maxime ad, consectetur aut, culpa dignissimos eum praesentium aliquid! Nam, nobis?</p>
                        </div>
                        <div className="text1">
                            <span>
                                Clothe Shop
                            </span>
                        </div>
                    </div>
                </div>
                <div className='about'>

                    <div className='img'>
                        <img src={Focus1} alt="" />
                        <div className="text">

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quis blanditiis amet sed quam rerum accusantium, ut voluptates vero maxime ad, consectetur aut, culpa dignissimos eum praesentium aliquid! Nam, nobis?</p>
                        </div>
                        <div className="text1">
                            <span>
                                Clothe Shop
                            </span>
                        </div>
                    </div>
                </div>
                <div className='about'>

                    <div className='img'>
                        <img src={Focus2} alt="" />
                        <div className="text">

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quis blanditiis amet sed quam rerum accusantium, ut voluptates vero maxime ad, consectetur aut, culpa dignissimos eum praesentium aliquid! Nam, nobis?</p>
                        </div>
                        <div className="text1">
                            <span>
                                Clothe Shop
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Aboutus
