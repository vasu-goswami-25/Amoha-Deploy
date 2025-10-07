// import Courses from '../components/Courses'

// const CoursesPage = () => {
//   return (
//     <div>
//       <Courses />
//     </div>
//   )
// }

// export default CoursesPage
import { useState } from "react";
import CoursesSection from "../components/Courses";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      <CoursesSection darkMode={darkMode} /> {/* ✅ prop passed */}
    </>
  );
}

export default App;