import React, { useState, useEffect } from 'react';

import './SideNav.css';


const SideNav = ({ refs, }) => {
  const [ activeIndex, setActiveIndex ] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const containerBottom = scrollTop + window.innerHeight;
      const offset = 50; // Add a 100 pixel offset

      for (let i = 0; i < refs.length; i++) {
        const refTop = refs[i].current.offsetTop - offset;
        const refBottom = refTop + refs[i].current.clientHeight + offset;

        if (scrollTop >= refTop && scrollTop < refBottom && i !== activeIndex) {
          setActiveIndex(i);
          break;
        }
      }
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ refs ]);

 
  const handleClick = (ref, index) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveIndex(index);
  };

  return (
    <div className='sidenav-wrapper'>
      {refs.map((ref, index) => (
        <div
          key={index}
          onClick={() => handleClick(ref, index)}
          className={index === activeIndex ? 'active-sidenav-menu' : 'sidenav-menu'}
        >
          {index}
        </div>
      ))}
    </div>
  );
};

export default SideNav;
