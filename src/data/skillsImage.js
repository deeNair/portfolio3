
import html from '../images/svg/html.svg'
import css from '../images/svg/css.svg'
import javascript from '../images/svg/javascript.svg'
import react from '../images/svg/react.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
       
        case 'html':
            return html;
        
        case 'css':
            return css;
       
        case 'javascript':
            return javascript;
       
        case 'react':
            return react;
        
        
       
        /*case 'bootstrap':
            return bootstrap;
       
        case 'mongodb':
            return mongoDB;
        
        case 'tailwind':
            return tailwind;
        case 'vitejs':
            return vitejs;
        case 'git':
            return git;
        case 'java':
                return java;
        
        case 'wordpress':
            return wordpress;
        
        case 'figma':
            return figma;*/
       
        default:
            break;
    }
}