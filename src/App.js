// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import CustomNavbar from './components/Navbar';
// // import ScrollingSection from './components/ScrollingSection';
// // import AdvanceSearch from './components/AdvanceSearch';
// // import PropertyTypes from './components/PropertyTypes';
// // import PropertyListing from './components/PropertyListing';
// // import Footer from './components/Footer';
// // import AddProperty from './components/AddProperty';
// // // import Signup from './components/Signup'; 
// // // import Login from './components/Login';
// // // import NotFound from './components/NotFound';

// // import './tailwind.css';

// // const App = () => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [name, setName] = useState("Guest");

// //   return (
// //     <Router>
// //       <div className="flex flex-col min-h-screen">
// //         <CustomNavbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} name={name} />
// //         <main className="flex-grow">
// //           <Routes>
// //             <Route path="/" element={<><ScrollingSection /><AdvanceSearch /><PropertyTypes /><PropertyListing/><Footer/></>} />
// //             <Route path="/about" element={<ScrollingSection />} />
// //             <Route path="/contact" element={<ScrollingSection />} />
// //             <Route path="/service" element={<ScrollingSection />} />
// //             <Route path="/add-property" element={<AddProperty />} />
// //             {/* <Route path="/signup" element={<Signup />} />
// //             <Route path="/login" element={<Login />} />
// //             <Route path="*" element={<NotFound />} />  */}
// //           </Routes>
// //         </main>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;
// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import CustomNavbar from './components/Navbar';
// // import ScrollingSection from './components/ScrollingSection';
// // import AdvanceSearch from './components/AdvanceSearch';
// // import PropertyTypes from './components/PropertyTypes';
// // import PropertyListing from './components/PropertyListing';
// // import Footer from './components/Footer';
// // import AddProperty from './components/AddProperty';
// // // import Signup from './components/Signup'; 
// // // import Login from './components/Login';
// // // import NotFound from './components/NotFound';
// // import './tailwind.css';

// // const App = () => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [name, setName] = useState("Guest");
// //   const [properties, setProperties] = useState([]);

// //   useEffect(() => {
// //     const fetchProperties = async () => {
// //       try {
// //         const response = await fetch('https://room-rooster.vercel.app/details');
// //         if (response.ok) {
// //           const data = await response.json();
// //           setProperties(data);
// //         } else {
// //           console.error("Failed to fetch properties");
// //         }
// //       } catch (error) {
// //         console.error("Error fetching properties:", error);
// //       }
// //     };

// //     fetchProperties();
// //   }, []);

// //   return (
// //     <Router>
// //       <div className="flex flex-col min-h-screen">
// //         <CustomNavbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} name={name} />
// //         <main className="flex-grow">
// //           <Routes>
// //             <Route path="/" element={
// //               <>
// //                 <ScrollingSection />
// //                 <AdvanceSearch />
// //                 <PropertyTypes />
// //                 <PropertyListing properties={properties} />
// //                 <Footer />
// //               </>
// //             } />
// //             <Route path="/about" element={<ScrollingSection />} />
// //             <Route path="/contact" element={<ScrollingSection />} />
// //             <Route path="/service" element={<ScrollingSection />} />
// //             <Route path="/add-property" element={<AddProperty />} />
// //             {/* <Route path="/signup" element={<Signup />} />
// //             <Route path="/login" element={<Login />} />
// //             <Route path="*" element={<NotFound />} /> */}
// //           </Routes>
// //         </main>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;
// // import React, { useState, useEffect } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import CustomNavbar from './components/Navbar';
// // import ScrollingSection from './components/ScrollingSection';
// // import AdvanceSearch from './components/AdvanceSearch';
// // import PropertyTypes from './components/PropertyTypes';
// // import PropertyListing from './components/PropertyListing';
// // import Footer from './components/Footer';
// // import AddProperty from './components/AddProperty';
// // import Signup from './components/Signup'; 
// // import Login from './components/Login';
// // // import NotFound from './components/NotFound';
// // import './tailwind.css';

// // const App = () => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   const [name, setName] = useState("Guest");
// //   const [properties, setProperties] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchProperties = async () => {
// //       try {
// //         const response = await fetch('https://room-rooster.vercel.app/details');
// //         if (response.ok) {
// //           const data = await response.json();
// //           setProperties(data);
// //         } else {
// //           console.error("Failed to fetch properties");
// //           setError("Failed to fetch properties");
// //         }
// //       } catch (error) {
// //         console.error("Error fetching properties:", error);
// //         setError("Error fetching properties");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProperties();
// //   }, []);

// //   return (
// //     <Router>
// //       <div className="flex flex-col min-h-screen">
// //         <CustomNavbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} name={name} />
// //         <main className="flex-grow">
// //           <Routes>
// //             <Route path="/" element={
// //               <>
// //                 <ScrollingSection />
// //                 <AdvanceSearch />
// //                 <PropertyTypes />
// //                 {loading ? (
// //                   <div className="text-center py-4">Loading...</div>
// //                 ) : error ? (
// //                   <div className="text-center py-4 text-red-500">{error}</div>
// //                 ) : (
// //                   <PropertyListing properties={properties} />
// //                 )}
// //                 <Footer />
// //               </>
// //             } />
// //             <Route path="/about" element={<ScrollingSection />} />
// //             <Route path="/contact" element={<ScrollingSection />} />
// //             <Route path="/service" element={<ScrollingSection />} />
// //             <Route path="/add-property" element={<AddProperty />} />
// //             <Route path="/signup" element={<Signup />} />
// //             <Route path="/login" element={<Login />} />
// //             {/* <Route path="*" element={<NotFound />} /> */}
// //           </Routes>
// //         </main>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import CustomNavbar from './components/Navbar';
// import ScrollingSection from './components/ScrollingSection';
// import AdvanceSearch from './components/AdvanceSearch';
// import PropertyTypes from './components/PropertyTypes';
// import PropertyListing from './components/PropertyListing';
// import Footer from './components/Footer';
// import AddProperty from './components/AddProperty';
// import Signup from './components/Signup'; 
// import Login from './components/Login';
// // import NotFound from './components/NotFound';
// import './tailwind.css';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [name, setName] = useState("Guest");
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const response = await fetch('https://room-rooster.vercel.app/details');
//         if (response.ok) {
//           const data = await response.json();
//           setProperties(data);
//         } else {
//           console.error("Failed to fetch properties");
//           setError("Failed to fetch properties");
//         }
//       } catch (error) {
//         console.error("Error fetching properties:", error);
//         setError("Error fetching properties");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, []);

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         <CustomNavbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} name={name} />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <ScrollingSection />
//                 <AdvanceSearch />
//                 <PropertyTypes />
//                 {loading ? (
//                   <div className="text-center py-4">Loading...</div>
//                 ) : error ? (
//                   <div className="text-center py-4 text-red-500">{error}</div>
//                 ) : (
//                   <PropertyListing properties={properties} />
//                 )}
//                 <Footer />
//               </>
//             } />
//             <Route path="/about" element={<ScrollingSection />} />
//             <Route path="/contact" element={<ScrollingSection />} />
//             <Route path="/service" element={<ScrollingSection />} />
//             <Route path="/add-property" element={<AddProperty />} />
//             <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} setName={setName} />} />
//             <Route path="/login" element={<Login />} />
//             {/* <Route path="*" element={<NotFound />} /> */}
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import ScrollingSection from './components/ScrollingSection';
import AdvanceSearch from './components/AdvanceSearch';
import PropertyTypes from './components/PropertyTypes';
import PropertyListing from './components/PropertyListing';
import Footer from './components/Footer';
import AddProperty from './components/AddProperty';
import Signup from './components/Signup'; 
import Login from './components/Login';
// import NotFound from './components/NotFound';
import './tailwind.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState("Guest");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('https://room-rooster.vercel.app/details');
        if (response.ok) {
          const data = await response.json();
          setProperties(data);
        } else {
          console.error("Failed to fetch properties");
          setError("Failed to fetch properties");
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError("Error fetching properties");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <CustomNavbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} name={name} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <ScrollingSection />
                <AdvanceSearch />
                <PropertyTypes />
                {loading ? (
                  <div className="text-center py-4">Loading...</div>
                ) : error ? (
                  <div className="text-center py-4 text-red-500">{error}</div>
                ) : (
                  <PropertyListing properties={properties} />
                )}
                <Footer />
              </>
            } />
            <Route path="/about" element={<ScrollingSection />} />
            <Route path="/contact" element={<ScrollingSection />} />
            <Route path="/service" element={<ScrollingSection />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
