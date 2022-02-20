import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Footer from '../components/footer';

class Application extends Component {

  render() {
    return (
        <>
        <section className="my-24 lg:mt-28 lg:mb-36 md:px-4">
            <div className="max-w-screen-xl mx-auto">
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />}/>
                    </Routes>
                </BrowserRouter>            
            </div>
        </section>
        <Footer />
        </>

    );
  }
}

export default Application;