

// // // import React, { useState } from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Footer from  "./components/Footer"
// // // import Algorithm from "./pages/Algorithm"
// // // import ServiceBasedPatternDsa from "./pages/ServiceBasedPatternDSA";
// // // import MainPracticePage from "./pages/MainPracticePage";



// // // const App: React.FC = () => {
// // //   const [darkMode, setDarkMode] = useState(false);

// // //   return (
// // //     <Router>
// // //       {/* Pass darkMode toggle to Navbar */}
// // //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
// // //       {/* <About darkMode={true}/> */}
// // //       <Routes>
// // //         <Route path="/" element={<h1 className="p-6">🏡 Home Page</h1>} />
// // //         <Route path="/algorithm" element={<Algorithm />} />
// // //         {/* <Route path="/allinonedsa" element={<ALLINONEDSA />} /> */}
// // //         {/* <Route path="/blind75" element={<Blind75 darkMode={undefined} />} /> */}
// // //         {/* <Route path="/cp" element={<CP />} /> */}
// // //         {/* <Route path="/cppmodule" element={<CppModules darkMode={undefined} />} /> */}
// // //            {/* <Route path="/mainpractice" element={<MainPractice darkMode={undefined} />} /> */}
// // //         {/* <Route path="/practice" element={<Practice darkMode={undefined} />} /> */}
// // //         <Route path="/practicemainpage" element={<MainPracticePage />} />
// // //         {/* <Route path="/servicebaseddsa" element={<ServiceBasedDSA />} /> */}
// // //         <Route path="/servicebasedpatterndsa" element={<ServiceBasedPatternDsa darkMode={undefined} />} 
        
        
        
// // //         />
      

// // //       </Routes>
// // //       {/* <About darkMode={false}/> */}
// // //       <Footer/>
// // //     </Router>
// // //   );
// // // };

// // // export default App;


// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Footer from  "./components/Footer";
// // import Algorithm from "./pages/Algorithm";
// // import ServiceBasedPatternDsa from "./pages/ServiceBasedPatternDSA";
// // import MainPracticePage from "./pages/MainPracticePage";

// // const App: React.FC = () => {
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <Router>
// //       {/* Pass darkMode toggle to Navbar */}
// //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
// //       <Routes>
// //         <Route path="/" element={<h1 className="p-6">Home Page</h1>} />
// //         <Route path="/algorithm" element={<Algorithm />} />
// //         <Route path="/practicemainpage" element={<MainPracticePage />} />
// //         <Route path="/servicebasedpatterndsa" element={<ServiceBasedPatternDsa darkMode={undefined} />} />
// //       </Routes>

// //       <Footer/>
// //     </Router>
// //   );
// // };

// // export default App;


// // Second code edit ********************************
// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // Components
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";

// // // Pages
// // import Home from "./components/Home";
// // import Algorithm from "./pages/Algorithm";
// // import ServiceBasedPatternDsa from "./pages/ServiceBasedPatternDSA";
// // import MainPracticePage from "./pages/MainPracticePage";
// // import About from "./components/About";
// // // Agar future me aur pages add honge, unko bhi yaha import kar sakte ho

// // const App: React.FC = () => {
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <Router>
// //       {/* Navbar with darkMode toggle */}
// //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      

// //       {/* Routes */}
// //       <Routes>
// //         <Route path="/" element={<Home darkMode={darkMode} />} />
// //         <Route path="/algorithm" element={<Algorithm darkMode={darkMode} />} />
// //         <Route path="/practicemainpage" element={<MainPracticePage darkMode={darkMode} />} />
// //         <Route
// //           path="/servicebasedpatterndsa"
// //           element={<ServiceBasedPatternDsa darkMode={darkMode} />}
// //         />
// //         {/* Add more routes here as you import more pages */}
// //       </Routes>

// //       {/* Footer */}
// //       <About darkMode={false}/>
// //       <Footer  />
// //     </Router>
// //   );
// // };

// // export default App;

// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./components/About";
// import PracticePage from "./pages/MainPracticePage";
// import Courses from "./pages/Courses";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact"

// const App: React.FC = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <Router>
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <Routes>
//         <Route path="/" element={<Home darkMode={darkMode} />} />
//         <Route path="/about" element={<About darkMode={darkMode} />} />
//         <Route path="/practice" element={<PracticePage darkMode={darkMode} />} />
//         <Route path="/courses" element={<Courses  />} />
//         <Route path="/careers" element={<Careers  />} />
//         <Route path="/contact" element={<Contact  />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;




// // // import React, { useState } from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import Navbar from "./components/Navbar";
// // // import Footer from  "./components/Footer"
// // // import Algorithm from "./pages/Algorithm"
// // // import ServiceBasedPatternDsa from "./pages/ServiceBasedPatternDSA";
// // // import MainPracticePage from "./pages/MainPracticePage";



// // // const App: React.FC = () => {
// // //   const [darkMode, setDarkMode] = useState(false);

// // //   return (
// // //     <Router>
// // //       {/* Pass darkMode toggle to Navbar */}
// // //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
// // //       {/* <About darkMode={true}/> */}
// // //       <Routes>
// // //         <Route path="/" element={<h1 className="p-6">🏡 Home Page</h1>} />
// // //         <Route path="/algorithm" element={<Algorithm />} />
// // //         {/* <Route path="/allinonedsa" element={<ALLINONEDSA />} /> */}
// // //         {/* <Route path="/blind75" element={<Blind75 darkMode={undefined} />} /> */}
// // //         {/* <Route path="/cp" element={<CP />} /> */}
// // //         {/* <Route path="/cppmodule" element={<CppModules darkMode={undefined} />} /> */}
// // //            {/* <Route path="/mainpractice" element={<MainPractice darkMode={undefined} />} /> */}
// // //         {/* <Route path="/practice" element={<Practice darkMode={undefined} />} /> */}
// // //         <Route path="/practicemainpage" element={<MainPracticePage />} />
// // //         {/* <Route path="/servicebaseddsa" element={<ServiceBasedDSA />} /> */}
// // //         <Route path="/servicebasedpatterndsa" element={<ServiceBasedPatternDsa darkMode={undefined} />} 
        
        
        
// // //         />
      

// // //       </Routes>
// // //       {/* <About darkMode={false}/> */}
// // //       <Footer/>
// // //     </Router>
// // //   );
// // // };

// // // export default App;


// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Footer from  "./components/Footer";
// // import Algorithm from "./pages/Algorithm";
// // import ServiceBasedPatternDsa from "./pages/ServiceBasedPatternDSA";
// // import MainPracticePage from "./pages/MainPracticePage";

// // const App: React.FC = () => {
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <Router>
// //       {/* Pass darkMode toggle to Navbar */}
// //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
// //       <Routes>
// //         <Route path="/" element={<h1 className="p-6">Home Page</h1>} />
// //         <Route path="/algorithm" element={<Algorithm />} />
// //         <Route path="/practicemainpage" element={<MainPracticePage />} />
// //         <Route path="/servicebasedpatterndsa" element={<ServiceBasedPatternDsa darkMode={undefined} />} />
// //       </Routes>

// //       <Footer/>
// //     </Router>
// //   );
// // };

// // export default App;


// // Second code edit ********************************
// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // Components
// // import Navbar from "./components/Navbar";
// // import Footer from "./components/Footer";

// // // Pages
// // import Home from "./components/Home";
// // import Algorithm from "./pages/Algorithm";
// // import ServiceBasedPatternDsa from "./pages/ServiceBasedPatternDSA";
// // import MainPracticePage from "./pages/MainPracticePage";
// // import About from "./components/About";
// // // Agar future me aur pages add honge, unko bhi yaha import kar sakte ho

// // const App: React.FC = () => {
// //   const [darkMode, setDarkMode] = useState(false);

// //   return (
// //     <Router>
// //       {/* Navbar with darkMode toggle */}
// //       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      

// //       {/* Routes */}
// //       <Routes>
// //         <Route path="/" element={<Home darkMode={darkMode} />} />
// //         <Route path="/algorithm" element={<Algorithm darkMode={darkMode} />} />
// //         <Route path="/practicemainpage" element={<MainPracticePage darkMode={darkMode} />} />
// //         <Route
// //           path="/servicebasedpatterndsa"
// //           element={<ServiceBasedPatternDsa darkMode={darkMode} />}
// //         />
// //         {/* Add more routes here as you import more pages */}
// //       </Routes>

// //       {/* Footer */}
// //       <About darkMode={false}/>
// //       <Footer  />
// //     </Router>
// //   );
// // };

// // export default App;

// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./components/About";
// import PracticePage from "./pages/MainPracticePage";
// import Courses from "./pages/Courses";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact"

// const App: React.FC = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <Router>
//       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//       <Routes>
//         <Route path="/" element={<Home darkMode={darkMode} />} />
//         <Route path="/about" element={<About darkMode={darkMode} />} />
//         <Route path="/practice" element={<PracticePage darkMode={darkMode} />} />
//         <Route path="/courses" element={<Courses  />} />
//         <Route path="/careers" element={<Careers  />} />
//         <Route path="/contact" element={<Contact  />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default App;


import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Home from "./pages/Homepage";
// import About from "./components/About";
import PracticePage from "./pages/MainPracticePage";
import Courses from "./components/Courses";
import Careers from "./components/Careers";
import Contact from "./components/ContactUs";
import BusinessPartners from "./components/BusineesPartner";
import { LaunchingSoon } from "./components/LaunchingSoon.tsx";

// Individual practice section pages
import DSAProblems from "./pages/ServiceBasedPatternDSA";//ye change kiya commit ke time changes
import ServiceBasedDSA from "./pages/ServiceBasedDSA";
import Blind75 from "./pages/Blind75.tsx";
import AllInOneDSA from "./pages/ALLINONEDSA";
import Algorithm from "./pages/Algorithm";
import ServiceBasedPatternDSA from "./pages/ServiceBasedPatternDSA";
import NumbersProblems from "./pages/NumbersProblems";
import ProgramingLang  from "./pages/ProgramingLang.tsx";
import CP from "./pages/CP";
import Homepage from "./pages/Homepage";
//import
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Homepage darkMode={darkMode}/>} />
         <Route path="/about" element={<LaunchingSoon  darkMode={darkMode}/>} />
        <Route path="/practice" element={<PracticePage darkMode={darkMode} />} />
        <Route path="/courses" element={<Courses darkMode={darkMode}/>} />
        <Route path="/careers" element={<Careers darkMode={darkMode}/>} />
        <Route path="/contact" element={<Contact darkMode={darkMode}/>} />
        <Route path="/businesspartner" element={<BusinessPartners darkMode={darkMode}/>} />
        <Route path="/launchingsoon" element={<LaunchingSoon darkMode={darkMode}/>} />



        {/* Individual practice section pages */}
        <Route path="/practice/dsa-problems" element={<DSAProblems darkMode={darkMode} />} />
        <Route path="/practice/service-based-dsa" element={<ServiceBasedDSA darkMode={darkMode} />} />
        <Route path="/practice/blind-75" element={<Blind75 darkMode={darkMode} />} />
        <Route path="/practice/all-in-one-dsa" element={<AllInOneDSA darkMode={darkMode} />} />
        <Route path="/practice/algorithm" element={<Algorithm darkMode={darkMode} />} />
        <Route path="/practice/service-based-pattern-dsa" element={<ServiceBasedPatternDSA darkMode={darkMode} />} />
        <Route path="/practice/NumbersProblems" element={<NumbersProblems darkMode={darkMode} />} />
        <Route path="/practice/ProgramingLang" element={<ProgramingLang darkMode={darkMode} />} />
       <Route path="/practice/CP" element={<CP darkMode={darkMode}/>} /> 
      </Routes>

      <Footer darkMode={darkMode}/>
    </Router>
  );
};

export default App;
