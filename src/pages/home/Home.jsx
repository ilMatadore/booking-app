import React from 'react'
import './Home.styles.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProps from '../../components/featuredProps/FeaturedProps';
import EmailList from '../../components/emailList/EmailList';
import Footer from '../../components/footer/Footer';


const Home = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className='homeContainer'>
          <Featured />
          <h1 className='homeTitle'>Browse by property type</h1>
          <PropertyList />
          <h1>Homes guests love</h1>
          <FeaturedProps />
          <EmailList />
          <Footer />
        </div>
    </div>
  )
}

export default Home;
