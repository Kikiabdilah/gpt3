import React, { useState } from 'react'
import "./Navbar.css"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from "../../assets/logo.svg"

const Navbar = () => {
    const [toogleMenu, SetToogleMenu] = useState(false)

    return (
        <div className='gpt3__navbar'>
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="gpt3__navbar-links-container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt3">What is GPT?</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
            </div><div className="gpt3__navbar-menu">
                {toogleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => SetToogleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => SetToogleMenu(true)} />
                }

                {toogleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgpt3">What is GPT3?</a></p>
                            <p><a href="#possibility">Open AI</a></p>
                            <p><a href="#features">Case Studies</a></p>
                            <p><a href="#blog">Library</a></p>
                        </div>
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar