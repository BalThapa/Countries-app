import React from 'react';
import world from '../Assets/world.mp4';

export default function Hero() {
  return (
    
      <div 
        style={{minHeight: 'calc(80vh - 130px)',
              position: 'relative', display: 'flex',
              flexDirection: 'column',
              alignItems:'center',
              textAlign: 'center',
              fontSize: 'large'}}>
        <video 
            style={{ width:'100%',
                    height:'100%',
                    position:'absolute',
                    backgroundAttachment:'fixed', 
                    objectFit:'cover'}} loop autoPlay>
            <source src={world} type='video/mp4'/>           
        </video>
        <div className='text-white' style={{position:'absolute', }}>
          <h1 className='mb-3'>Countries-App</h1>
          <h4 className='mb-3'>Find your home</h4>
        </div>
      </div>   
   
   
  );
}