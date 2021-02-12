import React from 'react';
import Menu from '../menu/Menu';
import Hero from '../hero/Hero';
import Footer from '../footer/Footer';



class Home extends React.Component{
    render(){
        return(
            <>
           <Menu/>
           <Hero/>
           <Footer />
            </>
        )
    }
}

export default Home;

