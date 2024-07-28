// import React, { useEffect, useRef, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import 'animate.css/animate.min.css';
// import 'tailwindcss/tailwind.css';
// import AboutContent from './About';
// import ContactContent from './Contact';
// import ServicesContent from './Services';

// const InfoPage = () => {
//   const location = useLocation();
//   const [isVisible, setIsVisible] = useState(false);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.5 }
//     );

//     if (contentRef.current) {
//       observer.observe(contentRef.current);
//     }

//     return () => {
//       if (contentRef.current) {
//         observer.unobserve(contentRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const element = contentRef.current;
//     if (element) {
//       if (isVisible) {
//         element.classList.add('animate__animated', 'animate__fadeIn', 'animate__fadeInSlow');
//       } else {
//         element.classList.remove('animate__animated', 'animate__fadeIn', 'animate__fadeInSlow');
//       }
//     }
//   }, [isVisible]);

//   const getPageName = (pathname) => {
//     switch (pathname) {
//       case '/about':
//         return 'About Us';
//       case '/contact':
//         return 'Contact Us';
//       case '/service':
//         return 'Our Services';
//       default:
//         return 'Welcome to Our Website';
//     }
//   };

//   const getPageDescription = (pathname) => {
//     switch (pathname) {
//       case '/about':
//         return 'Learn more about us and what we do.';
//       case '/contact':
//         return 'Get in touch with us for any queries.';
//       case '/service':
//         return 'Explore the services we offer.';
//       default:
//         return 'Welcome to our website.';
//     }
//   };

//   const renderPageContent = (pathname) => {
//     switch (pathname) {
//       case '/about':
//         return <AboutContent />;
//       case '/contact':
//         return <ContactContent />;
//       case '/service':
//         return <ServicesContent />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <div className="flex flex-col lg:flex-row items-center justify-between h-[60vh]">
//         <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start mb-8 lg:mb-0 h-full lg:h-[500px] lg:px-8">
//           <h1 className="text-6xl text-[#44545d] font-bold mb-4 animate__animated animate__fadeInLeft">{getPageName(location.pathname)}</h1>
//           <p className="text-lg text-[#44545d] mb-4">{getPageDescription(location.pathname)}</p>
//         </div>
//         <div className="w-full lg:w-1/2 h-full relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-full h-full bg-cover animate-[scrollBackground_60s_linear_infinite] z-0" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}></div>
//           <div className="absolute top-0 right-0 w-full h-full bg-black/40 z-1"></div>
//           <div
//             className="relative flex flex-col justify-center items-center h-full opacity-0"
//             ref={contentRef}
//           >
//             <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-black text-[#F0ECE3]">{getPageName(location.pathname)}</h1>
//             <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-[#F0ECE3]">{getPageDescription(location.pathname)}</p>
//           </div>
//         </div>
//       </div>
//       <div className="mt-8 px-4 lg:px-16">
//         {renderPageContent(location.pathname)}
//       </div>
//     </div>
//   );
// };

// export default InfoPage;
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'animate.css/animate.min.css';
import 'tailwindcss/tailwind.css';
import AboutContent from './About';
import ContactContent from './Contact';
import ServicesContent from './Services';

const InfoPage = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const element = contentRef.current;
    if (element) {
      if (isVisible) {
        element.classList.add('animate__animated', 'animate__fadeIn', 'animate__fadeInSlow');
      } else {
        element.classList.remove('animate__animated', 'animate__fadeIn', 'animate__fadeInSlow');
      }
    }
  }, [isVisible]);

  const getPageName = (pathname) => {
    switch (pathname) {
      case '/about':
        return 'About Us';
      case '/contact':
        return 'Contact Us';
      case '/service':
        return 'Our Services';
      default:
        return 'Welcome to Our Website';
    }
  };

  const getPageDescription = (pathname) => {
    switch (pathname) {
      case '/about':
        return 'Learn more about us and what we do.';
      case '/contact':
        return 'Get in touch with us for any queries.';
      case '/service':
        return 'Explore the services we offer.';
      default:
        return 'Welcome to our website.';
    }
  };

  const renderPageContent = (pathname) => {
    switch (pathname) {
      case '/about':
        return <AboutContent />;
      case '/contact':
        return <ContactContent />;
      case '/service':
        return <ServicesContent />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-center justify-between h-[60vh]">
        <div className="hidden lg:flex w-full lg:w-1/2 flex-col justify-center items-center lg:items-start mb-8 lg:mb-0 h-full lg:h-[500px] lg:px-8">
          <h1 className="text-6xl text-[#44545d] font-bold mb-4 animate__animated animate__fadeInLeft">{getPageName(location.pathname)}</h1>
          <p className="text-lg text-[#44545d] mb-4">{getPageDescription(location.pathname)}</p>
        </div>
        <div className="w-full lg:w-1/2 h-full relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-cover animate-[scrollBackground_60s_linear_infinite] z-0" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}></div>
          <div className="absolute top-0 right-0 w-full h-full bg-black/40 z-1"></div>
          <div
            className="relative flex flex-col justify-center items-center h-full opacity-0"
            ref={contentRef}
          >
            <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-black text-[#F0ECE3]">{getPageName(location.pathname)}</h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-semibold text-[#F0ECE3]">{getPageDescription(location.pathname)}</p>
          </div>
        </div>
      </div>
      <div className="mt-8 px-4 lg:px-16">
        {renderPageContent(location.pathname)}
      </div>
    </div>
  );
};

export default InfoPage;
