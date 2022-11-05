import React, {useEffect, useState} from 'react'
import Typewriter from 'typewriter-effect';
import home from '../Pages/home';
import HeroImg from '../img/profile1.png';
import { FiLinkedin, FiGithub ,FiFacebook} from "react-icons/fi";
import {SiGmail, SiReact} from 'react-icons/si';
import {FaNode} from 'react-icons/fa';
import {DiIllustrator, DiPhotoshop} from 'react-icons/di';

const Hero = () => {
    const [state]= useState({
        title: "Hi",
        titleTwo: "I'm",
        titleThree: "Code& Cooding"
    })
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <p className='welcome-title'>
                        Welcome to my world
                    </p>
                    <h2 className='hi-name-hero'>
                        Hi, I'm <span>Asraful</span>
                    </h2>
                    <div className='text'>
                        <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings:[
                                "a Youtuber",
                                "a web developer",
                                "a reader"
                            ],
                        }}/>
                    </div>
                    <p className='hero-discription'>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</p>
                        <div className='row'>
                            <div className='col-md-6'>
                                <FiFacebook/>
                                <FiLinkedin/>
                                <SiGmail/>
                                <FiGithub/>
                            </div>
                            <div className='col-md-6'>
                                <SiReact/>
                                <FaNode/>
                                <DiIllustrator/>
                                <DiPhotoshop/>
                            </div>
                        </div>
                </div>
                <div className='col-md-4'>
                    <img src={HeroImg}/>
                </div>
            </div>
        </div>
    </>
  )
}


export default Hero;