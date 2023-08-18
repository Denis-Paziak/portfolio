import React from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { BsFiletypeScss } from "react-icons/bs";
import { DiMysql } from "react-icons/di";
import { BiLogoCss3, BiLogoReact, BiLogoJavascript, BiLogoTypescript, BiLogoPhp, BiLogoFigma } from "react-icons/bi";

import "./about.scss";


function About() {
    return (
        <section className='about' id='about'>
            <div className="container">
                <div className="row">
                    <div className="col about-title">
                        <p className='gradient'>Denis Paziak</p>
                        <h2>Creative <br /> Web Developer</h2>
                    </div>
                    <div className="col about-content" >
                        <h2 className='descr-top'>Front-end developer with  of experience in creating and maintaining responsive websites. </h2>
                        <p className='descr'>My goal is to develop innovative solutions that will help solve complex problems in an efficient way.</p>
                        <div className='row'>
                            <div className="item">
                                <h3 className='gradient'>projects done</h3>
                                <h2>20+</h2>
                            </div>
                            <div className="item">
                                <h3 className='gradient'>experience</h3>
                                <h2>2+ Years</h2>
                            </div>
                            <div className="item">
                                <h3 className='gradient'>client satisfaction</h3>
                                <h2>100%</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-skills">
                    <div className="title">
                        <h2>What I work with</h2>
                    </div>
                    <div className="row skills-container">
                        <div className="skills-item">
                            <div className='icon'>
                                <AiFillHtml5 />
                            </div>
                            <h3>HTML</h3>
                        </div>

                        <div className="skills-item">
                            <div className='icon'>
                                <BiLogoCss3 />
                            </div>
                            <h3>Css</h3>
                        </div>

                        <div className="skills-item">
                            <div className='icon'>
                                <BsFiletypeScss />
                            </div>
                            <h3>Scss</h3>
                        </div>

                        <div className="skills-item">
                            <div className='icon'>
                                <BiLogoJavascript />
                            </div>
                            <h3>JavaScript</h3>
                        </div>
                        <div className="skills-item">
                            <div className='icon'>
                                <BiLogoTypescript />
                            </div>
                            <h3>TypeScript</h3>
                        </div>

                        <div className="skills-item">
                            <div className='icon'>
                                <BiLogoReact />
                            </div>
                            <h3>React</h3>
                        </div>

                        <div className="skills-item">
                            <div className='icon'>
                                <BiLogoPhp />
                            </div>
                            <h3>PHP</h3>
                        </div>

                        <div className="skills-item">
                            <div className='icon'>
                                <DiMysql />
                            </div>
                            <h3>MySQL</h3>
                        </div>
                        <div className="skills-item">
                            <div className='icon'>
                                <BiLogoFigma />
                            </div>
                            <h3>Figma</h3>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About