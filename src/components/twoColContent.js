import React, { Component } from 'react';

class Homepage extends Component {

    render() {
        let row= "lg:flex lg:flex-row items-center my-20 md:my-16 2xl:my-20";
        let rowReverse= "lg:flex lg:flex-row-reverse items-center my-20 md:my-16";

        return (
          <>
                <div className={this.props.orientLeft ? row : rowReverse}>
                    <div className="flex justify-center align-center flex-1">
                        <img className="mx-auto h-[233px] w-[300px] md:h-[350px] md:w-[450px]" src={this.props.image} alt={this.props.alt} />
                    </div>
                    <div className="text-center md:text-left flex-1 px-8 self-baseline">
                        <h2 className="pt-10 mb-4 font-semibold text-[48px] text-black">{this.props.headline}</h2>
                        <p className="font-light mx-auto text-lg pr-6 mb-4">{this.props.block1}</p>
                        <p className="font-light mx-auto text-lg pr-6">{this.props.block2}</p>
                    </div>
                </div>
          </>
        )
    }
}

export default Homepage; 