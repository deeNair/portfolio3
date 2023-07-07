import React from 'react';
//import  compImg2 from "../images/compImg8.jpg";
//import video from '../images/dee.mp4'
//import "../index.css";
import  yellowbg from "../images/yellowbg.jpeg";

function Home(){

//console.log(qt.quotes[0].quote);

  return (
    <div id="home" className='pt-20'>
        <p className=' bg-gray-800 rounded-2xl '>
        <img src={yellowbg} className='w-full h-full' />
        </p>
    
    </div>
  )
}

export default Home;

// <img src={video} alt="my-comp" className='rounded-2xl mx-auto' />