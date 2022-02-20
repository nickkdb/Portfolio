import React, { Component } from 'react';
import '../output/output.css';
import $ from 'jquery';

class StickyNav extends Component {

    
    componentDidMount() {
        let offsetTop= $(this.containerLine).offset().top;
        $(window).on("scroll", function() {
            if ($(window).scrollTop() > offsetTop) {
                $('.stickyNav').addClass('scrolledToStickyNav');
            } else {
                $('.stickyNav').removeClass('scrolledToStickyNav');
            }
        });
        $('.contactInfo').on("click", function() {
            $('.contactList').toggle();
        })
    }
    
    render() {
        return (
            <section ref={el => this.containerLine = el} className="bg-off-white stickyNav">
                <div className="py-4 md:py-5">
                    <ul className="text-xl font-medium md:flex text-[#15287c] justify-center hidden">
                        <li className="px-12 hover:text-[#0d94f2] hover:text-[22px] cursor-pointer"><a href="https://github.com/nickkdb" target="_blank">Github</a></li>
                        <li className="px-12 hover:text-[#0d94f2] hover:text-[22px] cursor-pointer"><a href="https://www.linkedin.com/in/nicolas-borges-4785b4203/" target="_blank">LinkedIn</a></li>
                        <li className="px-12 hover:text-[#0d94f2] hover:text-[22px] cursor-pointer"><a href="mailto:nborges.dev@gmail.com">Email</a></li>
                    </ul>
                    <p className="contactInfo md:hidden flex justify-center text-xl font-medium px-12 text-[#15287c] self-center">Contact Me</p>
                    <div className="pt-4 bt mt-2 mx-11 contactList hidden">
                        <ul className="text-center">
                        <li className="py-2 "><a href="https://github.com/nickkdb" target="_blank">Github</a></li>
                        <li className="py-2 "><a href="https://www.linkedin.com/in/nicolas-borges-4785b4203/" target="_blank">LinkedIn</a></li>
                        <li className="py-2 "><a href="mailto:nborges.dev@gmail.com">Email</a></li>
                        </ul>
                    </div>
                    
                </div>
            </section>
          )
    }
}

export default StickyNav; 