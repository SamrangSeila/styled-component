import React from 'react'

import Container from '../style/NavbarStyle';
import { FcMenu } from "react-icons/fc";
const Navbar = () => {
    return (
        <Container>
            <div className="logo">
                <div className="img">
                    <img src="https://thumbs.dreamstime.com/b/clothing-fashion-logo-design-vector-template-181335172.jpg" alt="" />
                </div>
                <div className="text">
                    <span>Clothe-Shop</span>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="/home">Home</a>
                    </li>
                    <li>
                        <a href="/product">Products</a>
                    </li>
                    <li>
                        <a href="/service">Service</a>
                    </li>
                    <li>
                        <a href="/about-us">About us</a>
                    </li>
                </ul>
            </div>

            <div className='account'>
                <ul>
                    <li>
                        <button className='btn-account'>Account</button>
                    </li>
                </ul>
                <ul>
                    <li>
                        <li>
                            <button className='btn-menu'><FcMenu /></button>
                        </li>
                    </li></ul>
            </div>
        </Container>
    )
}

export default Navbar