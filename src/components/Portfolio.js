import React from 'react';
import  "../css/portfolio.css";
import {portfolio} from "../data/portfolio.js";



import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';


const Portfolio = () => {
  
  
  return (
    <div id="portfolio" className='main bg-gradient-to-b from-black to-yellow-800 w-full text-white md:h-screen'> 
    <div className='max-w-screen-lg  mx-auto flex flex-col justify-center p-4 w-full h-full'>
    
    <p className='text-5xl font-bold inline border-b-4 border-gray-800'>Portfolio</p>
    <p className='text-2xl  font-bold border-gray-800'>some of my projects</p>
    
    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-16 px-12 py-12 sm:px-0'>
   {portfolio.map((el,i)=> (

   <MDBCard key={i} className='w-fit h-fit bg-black'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay '>
        <MDBCardImage src={el.image} fluid alt='...' className='bg-image  duration-200 hover:scale-105 '/>
      </MDBRipple>
      <MDBCardBody className='px-2 py-4 shadow-md rounded-lg shadow-black hover:scale-105 duration-200 '>
        <MDBCardTitle className='font-bold'>{el.title}</MDBCardTitle>
        <MDBCardText>{el.skills}</MDBCardText>
        <MDBCardText>{el.desc}</MDBCardText>
        <MDBBtn className='mx-2 px-5 ' color='tertiary'  rippleColor='light' href={el.github}>code</MDBBtn>
      </MDBCardBody>
      
    </MDBCard>))}
    </div>
    </div>
    
    </div>
  );
}

export default Portfolio;