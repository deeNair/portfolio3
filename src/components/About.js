import React from 'react';
import {BsArrowDownCircle} from 'react-icons/bs';
import  girl22 from "../images/girl22.gif";
import  "../images/jpg/bg2.jpeg";
import "../index.css";
import {Link} from "react-scroll";
import Particle from '../assets/Particle';
import "../index.css";

const About = () => {
 
  
  return (
    <div id="particles-js" className="h-screen w-full" >
    <Particle />

  <div id="about" className="h-screen w-full p-2">


  <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
            <div className='flex flex-col justify-center h-full'>
      
                <h2 className='text-4xl sm:text-7xl font-bold text-gray-800'>
                 About me
                </h2>
           
              
   
                <p className='text-black  py-4 max-w-md'>
                  I am a Software developer|Full-Stack developer based in Boston. I am a CS graduate with a Bachelors of engineering and Master's degree from BU. My true passion lies in building and developing applications. I'm currently loving building WebApps and Websites utilizing the MERN  Stack to create dynamic and responsive WebApps and Websites.Apart from that i love simplifying complex technical concepts and find immense joy in introducing,inspiring and teaching young minds .
                </p>
<div>
                <Link  to="portfolio" className='group text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-gray-500 to-amber-700 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <BsArrowDownCircle size={25} className='ml-1' />
                    </span>
                </Link>
                </div>
                </div>

              
            <div classname=' flex flex-row justify-center'>
            <img src={girl22} alt="my-comp" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
               
              
             
               
         
          
        </div>
        </div>
</div>
   
  );
};

export default About;