import React, { Component } from 'react';
import '../output/output.css';

class Footer extends Component {

    render() {
        return (
            <>
            <div id="footer" className="bg-[#0d0d0d] h-28 flex justify-between items-center px-8">
                <div>
                <span className="text-[#b0e0e6] hidden md:inline-block">Designed and Developed by:</span><h3 className="hidden text-white md:inline-block lg:pl-2"> Nicolas Borges</h3>
                <span className="text-[#b0e0e6] md:hidden">Designed by:</span><h3 className="md:hidden text-white lg:pl-2"> Nicolas Borges</h3>
                </div>
                <div className="flex flex-row items-center text-white">
                    <a href="https://www.linkedin.com/in/nicolas-borges-4785b4203/" target="_blank" className="mr-4 hover:transform hover:-translate-y-1">
                    <i className="fa-brands fa-linkedin fa-xl"></i>
                    </a>
                    <a href="https://github.com/nickkdb" target="_blank" className="mr-4 hover:transform hover:-translate-y-1">
                    <i className="fa-brands fa-github fa-xl"></i>
                    </a>
                    <a href="mailto:nborges.dev@gmail.com" target="_blank" className="mr-4 hover:transform hover:-translate-y-1">
                    <i className="fa-solid fa-envelope fa-xl"></i>
                    </a>
                </div>
            </div>
            </>
          )
    }
}

export default Footer; 