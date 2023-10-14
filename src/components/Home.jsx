import React from 'react';
import Hero from './Hero';
import { NavLink } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <div>
        <Hero />
      
        {/* <span>Countries app </span>is a simple React application made in
        Business College Helsinki lessons. App uses{' '}
        <a href="https://restcountries.com/">https://restcountries.com/ </a> and{' '}
        <a href="">https://openweathermap.org/</a> */}
      </div>
      <section style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
             marginTop:'5rem'}}>
          <div style={{
            minHeight: '20vh',
            width: '25vw',
            padding: '1rem',
            paddingTop: '1rem',
            border: '1px solid',
            borderRadius: '5px',
            position: 'relative',
            marginBottom: '5rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}>
            <h3>Browse Countries</h3>
            <p>Find all countries list with the important informations like capital, population, language spoken and currency.</p>
            <NavLink to="/countries" style={{textDecoration:'none', color:'tomato'}}>Countries List</NavLink>
          </div>
          <div style={{
            minHeight: '20vh',
            width: '25vw',
            padding: '1rem',
            paddingTop: '1rem',
            border: '1px solid',
            borderRadius: '5px',
            position: 'relative',
            marginBottom: '5rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}>
            <h3>Favourite countries list</h3>
            <p>Browse favourite countries list and add or delete the list!</p>
            <NavLink to="/favourites" style={{textDecoration:'none', color:'tomato'}}>Favourites</NavLink>
          </div>
          <div style={{
            minHeight: '20vh',
            width: '25vw',
            padding: '1rem',
            paddingTop: '1rem',
            border: '1px solid',
            borderRadius: '5px',
            position: 'relative',
            marginBottom: '5rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}>
            <h3>What's the weather like?</h3>
            <p>Visit weathermap and find out the weather conditions!</p>
            <NavLink to="/countries/:single" style={{textDecoration:'none', color:'tomato'}}>Weather Report</NavLink>
          </div>
        </section> 
    </div>
  );
};

export default Home;
