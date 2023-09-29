import React from 'react';
import world from '../Assets/world.mp4';

export default function Hero() {
  return (
    <header style={{ paddingLeft: 0 }}>
       
      <div >
        
        <video style={{ width:'100vw'}} loop autoPlay >
            <source src={world} type='video/mp4'/>
        </video>
    
        
        {/* <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Countries</h1>
              <h4 className='mb-3'>Find your home</h4>
            </div>
          </div>  
        </div>*/}
      </div>
    </header>
  );
}