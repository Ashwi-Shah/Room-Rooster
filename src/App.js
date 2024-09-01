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
// import InfoPage from './components/InfoPage'; // Import the new component
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
//               </>
//             } />
//             <Route path="/about" element={<InfoPage />} />
//             <Route path="/contact" element={<InfoPage />} />
//             <Route path="/service" element={<InfoPage />} />
//             <Route path="/add-property" element={<AddProperty />} />
//             <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} setName={setName} />} />
//             <Route path="/login" element={<Login />} />
//             {/* <Route path="*" element={<NotFound />} /> */}
//           </Routes>
//           <Footer />
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
import InfoPage from './components/InfoPage'; // Import the new component
import DetailPage from './components/DetailPage'; // Import the DetailPage component
import ResultsPage from './components/ResultsPage';
import './tailwind.css';
import PropertyPage from './components/PropertyPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState("Guest");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
                  <PropertyListing properties={properties} limit={6} />
                )}
              </>
            } />
            <Route path="/about" element={<InfoPage />} />
            <Route path="/contact" element={<InfoPage />} />
            <Route path="/property" element={<PropertyPage />} />
            <Route path="/" element={<PropertyListing />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} setName={setName} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/details/:id" element={<DetailPage />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
