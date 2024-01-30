// import Navbar from './components/common/Navbar'
// // import { useContext } from 'react';
// // import { Context } from "./context/Provider";
// import { Route, Routes } from 'react-router-dom';
// import Web from './pages/Web. Page/Web';
// import Dev from './pages/Dev. Page/Dev'
// import Home from './pages/HomePage/Home';
// import Error from './Error';
// function App() {
//   // const { html, setHtml, css, setCss, js, setJs } = useContext(Context);

//   return (
//     <div className="WholeContainer">
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/webdevelopment' element={<Web />} />
//         <Route path='/development' element={<Dev />} />
//         <Route path='*' element={<Error />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './components/common/Navbar';
// import Web from './pages/Web. Page/Web';
// import Dev from './pages/Dev. Page/Dev';
// import Home from './pages/HomePage/Home';
// import Error from './Error';
// import Error1 from './Error1';

// function App() {
//   const [shouldShowError, setShouldShowError] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       const height = window.innerHeight;

//       // Check if dimensions are below the specified threshold
//       setShouldShowError(width < 926 || height < 616);
//     };

//     // Attach the event listener
//     window.addEventListener('resize', handleResize);

//     // Check dimensions on component mount
//     handleResize();

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className="WholeContainer">
//       <Navbar />
//       {shouldShowError ? (
//         <Routes>
//           <Route path='*' element={<Error1 />} />
//         </Routes>
//       ) : (
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/webdevelopment' element={<Web />} />
//           <Route path='/development' element={<Dev />} />
//           <Route path='*' element={<Error />} />
//         </Routes>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Web from './pages/Web. Page/Web';
import Dev from './pages/Dev. Page/Dev';
import Home from './pages/HomePage/Home';
import Error from './Error';
import Error1 from './Error1';

function App() {
  const [shouldShowError, setShouldShowError] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Check if dimensions are below the specified threshold
      setShouldShowError(width < 926 || height < 616);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Check dimensions on component mount
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="WholeContainer">
      {!shouldShowError && <Navbar />}
      <Routes>
        {shouldShowError ? (
          <Route path='*' element={<Error1 />} />
        ) : (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/webdevelopment' element={<Web />} />
            <Route path='/development' element={<Dev />} />
            <Route path='*' element={<Error />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;