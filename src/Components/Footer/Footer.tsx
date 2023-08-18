import React from 'react'
import "./footer.scss";

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="row" >
                    <div className="col footer-logo">Denis Paziak</div>
                    <div className="col">
                        <div className="nav">
                            <a className='hover' href="#home">Home</a>
                            <a className='hover' href="#projects">Projects</a>
                            <a className='hover' href="#about">About</a>
                            <a className='hover' href="#contact">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
