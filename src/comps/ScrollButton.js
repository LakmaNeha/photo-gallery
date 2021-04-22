import React,{useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

function ScrollButton() {

    const [visible, setVisible] = useState(false);

    function toggleVisible(){

        const scrolled = document.documentElement.scrollTop;
        if(scrolled > 300)
        {
            setVisible(true);
        }
        else if(scrolled<=300)
        {
            setVisible(false);
        }

    };

    function scrollToTop() {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    };

    window.addEventListener('scroll',toggleVisible);

    return (
        <button className="arrow-up">
          <FaArrowCircleUp onClick={scrollToTop}
          style={{display: visible ? 'inline' : 'none'}} />  
        </button>
    )
}

export default ScrollButton;
