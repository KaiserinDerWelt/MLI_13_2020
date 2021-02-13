import React from 'react';
import Menu from '../menu/Menu';
import Hero from '../hero/Hero';
import Services from '../services/Services';
import Footer from '../footer/Footer';



class Home extends React.Component{
    render(){
        return(
            <>
            <Menu/>
           <Hero/>
           <Services/>
           <Footer />
            </>
        )
    }
}

export default Home;

