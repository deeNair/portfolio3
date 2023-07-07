import React from 'react';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import "../index.css"

const Particle = () => {
    const init = useCallback(async (engine)=>{
        await loadFull(engine);
       })
  return (
    <div>
        <Particles id="tsparticles"  options={
        {
          fullScreen:{
          enable:false,
         zindex:0
         },
         particles: {
           number: {
             value: 80,
             density: {
               enable: true,
               value_area: 1000
             }
           },
           color: {
             value: "#000000"
           },
           shape: {
             type: "circle",
             stroke: {
               width: 0,
               color: "#525252"
             },
             polygon: {
               nb_sides: 5
             },
             image: {
               src: "img/github.svg",
               width: 100,
               height: 100
             }
           },
           opacity: {
             value: 0.5,
             random: false,
             anim: {
               enable: false,
               speed: 1,
               opacity_min: 0.1,
               sync: false
             }
           },
           size: {
             value: 5,
             random: true,
             anim: {
               enable: false,
               speed: 80,
               size_min: 0.1,
               sync: false
             }
           },
           line_linked: {
             enable: true,
             distance: 200,
             color: "#f07219",
             opacity: 0.4,
             width: 2
           },
           move: {
             enable: true,
             speed: 2,
             direction: "none",
             random: false,
             straight: false,
             out_mode: "out",
             bounce: false,
             attract: {
               enable: false,
               rotateX: 600,
               rotateY: 1200
             }
           }
         },
         
        
         interactivity: {
           detect_on: "window",
           events: {
             onhover: {
               enable: true,
               mode: "repulse"
             },  
             onclick: {
               enable: true,
               mode: "push"
             },
             resize: true
           },
           modes: {
             grab: {
               distance: 800,
               line_linked: {
                 opacity: 1
               }
             },
             bubble: {
               distance: 800,
               size: 80,
               duration: 2,
               opacity: 0.8,
               speed: 3
             },
             repulse: {
               distance: 300,
               duration: 0.4
             },
             push: {
               particles_nb: 4
             },
             remove: {
               particles_nb: 2
             }
           }
         },
         retina_detect: true
       }
        
        } init={init} />
        
        </div>
  )
}

export default Particle;