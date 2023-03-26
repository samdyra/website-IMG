import React, { useState, useEffect } from 'react';

import './SideNav.css';



const SideNav = ({ refs }) => {
  const [ activeIndex, setActiveIndex ] = useState(0);
  const [ clickInProgress, setClickInProgress ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!clickInProgress) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const containerBottom = scrollTop + window.innerHeight;
        console.log('containerBottom',containerBottom)
        console.log('scrollTop',scrollTop)

        for (let i = 1; i < refs.length -1 ; i++) {
          const offset = 50;

          const refTop = refs[i].current.offsetTop - offset;
          const refBottom = refTop + refs[i].current.clientHeight - offset;

          
          if (scrollTop >= refTop && scrollTop < refBottom ) {
            setActiveIndex(i);
            console.log("eeeeeeeeeeeeeeeeee")
            break;
          }
        }

        if (scrollTop >= 0 && scrollTop < 400 && activeIndex !== 0) {
          setActiveIndex(0);
        }
        if (scrollTop > 3400 && activeIndex !== refs.length-1) {
          setActiveIndex(refs.length-1);
        }

      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ refs, clickInProgress ]);

  const handleClick = (ref, index) => {
    setClickInProgress(true);
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setActiveIndex(index);

    setTimeout(() => {
      setClickInProgress(false);
    }, 2000);
  };

  return (
    <div className='sidenav-wrapper'>
      {refs.map((ref, index) => (
        <div
          key={index}
          onClick={() => handleClick(ref, index)}
          className={index === activeIndex ? 'active-sidenav-menu' : 'sidenav-menu'}
        >
        </div>
      ))}
    </div>
  );
};

export default SideNav;
