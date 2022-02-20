import React, { Component } from 'react';
import '../output/output.css';
import resume from '../utils/PDF/nicolasborges-resume.pdf';

class Header extends Component {

    render() {
        return (
            <header className="h-75vh bg-hero-img bg-cover bg-top relative">
            <div className="absolute top-6 left-6 hidden md:block">
                <i className="text-white fa-solid fa-code fa-3x"></i>
            </div>

            <div className="absolute top-1/2 left-2/4 -translate-x-1/2 transform -translate-y-1/2 text-center">
                <h1 className="text-white uppercase mb-14">
                    <span className="font-light block text-4xl md:text-6xl tracking-4.5 mb-4 animate-moveInRight">Nicolas Borges</span>
                    <span className="block text-base tracking-2 animate-moveInLeft">Web Developer, Software Engineer, Student</span>
                </h1>

                <a href={resume} target="_blank" className="text-xs md:text-base btn bg-white text-gray-777 animate-moveInBottom">Download My Resume</a>
            </div>
        </header>
          )
    }
}

export default Header; 