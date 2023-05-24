import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import p1 from '../img/header.jpg'
import p2 from '../img/header1.jpg'
import p3 from '../img/header2.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";
import Container from '../style/ProductCarousalStyle';

const ProductCarousal = () => {
    return (
        <div>
            <Container>
                <div className="slide-section" style={{ backgroundColor: 'gray' }}>
                    <Swiper

                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{
                            clickable: false,
                        }}

                        className="mySwiper"
                    >
                        <SwiperSlide><div className="img">
                            <img src={p1} alt="" />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="img">
                            <img src={p2} alt="" />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="img">
                            <img src={p3} alt="" />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="img">
                            <img src={p2} alt="" />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="img">
                            <img src={p1} alt="" />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="img">
                            <img src={p3} alt="" />
                        </div></SwiperSlide>
                        <SwiperSlide><div className="img">
                            <img src={p1} alt="" />
                        </div></SwiperSlide>

                    </Swiper>
                </div>
            </Container>
        </div>
    )
}
export default ProductCarousal
