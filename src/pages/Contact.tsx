// import React from 'react'
// import ContactUs from "../components/ContactUs"
// const Contact = () => {
//   return (
//     <div>
//       <ContactUs/>
//     </div>
//   )
// }

// export default Contact

import {type FC } from "react";

interface AppProps {
  darkMode: boolean;
}

const Careers: FC<AppProps> = ({ darkMode }) => {
  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <h1 className="text-2xl font-bold">Careers</h1>
      <p>Welcome to our careers section!</p>
      
    </div>
  );
};

export default Careers;
