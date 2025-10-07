// import React from 'react'
// import OurCareers from '../components/Careers';
// const Careers = () => {
//   return (
//     <div>
//       <OurCareers/>
//     </div>
//   )
// }

// export default Careers

import {type FC } from "react";
import Careers from "../components/Careers";

interface PageProps {
  darkMode: boolean;
}

const CareersPage: FC<PageProps> = ({ darkMode }) => {
  return <Careers darkMode={darkMode} />;
};

export default CareersPage;
