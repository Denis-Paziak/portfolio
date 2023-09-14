import React from 'react'
import "./home.scss";
function Home() {
    return (
        <section className='home ' id="home">
            <div className="container">
                <h1 ><span> Hello, I`m Denys,</span> creative Web Developer in Ukraine</h1>
                <div className="buttons" >
                    <a href="#contact">
                        <button className='gradient-button hover'>Get in Touch</button>
                    </a>
                    <a href="#projects">
                        <button className='hover'>projects</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home