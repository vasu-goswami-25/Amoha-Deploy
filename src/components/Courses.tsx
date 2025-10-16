import type { FC } from 'react';

// Interface for receiving the darkMode state
interface CoursesSectionProps {
  darkMode: boolean;
}

// Type for a course (remains unchanged)
interface Course {
  category: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
}

// Mock data for the featured courses (remains unchanged)
const featuredCourses: Course[] = [
  {
    category: 'Programming',
    title: 'Full Stack Web Development',
    description: 'Learn to build complete web applications from frontend to backend.',
    image: 'FullStack.png',
    rating: 4.0,
    reviews: 643,
  },
  {
    category: 'Business',
    title: 'Digital Marketing Mastery',
    description: 'Become a digital marketing expert with hands-on projects.',
    image: 'Digital.png',
    rating: 4.0,
    reviews: 890,
  },
  {
    category: 'Design',
    title: 'UI/UX Design Fundamentals',
    description: 'Master the principles of user interface and user experience design.',
    image: 'UiUx.png',
    rating: 4.0,
    reviews: 657,
  },
  {
    category: 'Business',
    title: 'Product Management Essentials',
    description: 'Learn the core concepts of product management and launch successful Products.',
    image: 'Product.png',
    rating: 4.0,
    reviews: 1920,
  },
  {
    category: 'Programming',
    title: 'Data Science & Machine Learning',
    description: 'Dive into data analysis and machine learning algorithms.',
    image: 'Data.png',
    rating: 4.0,
    reviews: 1280,
  },
  {
    category: 'Cloud Computing',
    title: 'Cloud Computing with AWS',
    description: 'Get hands-on experience deploying and managing applications in Amazon Web Services.',
    image: 'Cloud.png',
    rating: 4.0,
    reviews: 5643,
  },
];

// Component for a single course card
interface CourseCardProps {
  course: Course;
  darkMode: boolean; // Pass darkMode prop to the card
}

const CourseCard: FC<CourseCardProps> = ({ course, darkMode }) => (
  <div 
    // Card background, shadow, and border are made theme-aware
    className={`
      rounded-lg shadow-md border overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col w-full sm:w-80
      ${darkMode 
        ? 'bg-gray-800 border-[#6334B9] hover:shadow-lg hover:shadow-purple-500/30' 
        : 'bg-white border-[#6334B9]'
      }
    `}
  >
    <img src={course.image} alt={course.title} className="w-full h-48 object-contain p-4 rounded-2xl" />
    <div className="p-4 flex flex-col flex-grow">
      {/* Category text color is made theme-aware */}
      <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-[#6334B9]' : 'text-[#6334B9]'}`}>
        {course.category}
      </div>
      {/* Title text color is made theme-aware */}
      <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {course.title}
      </h3>
      {/* Description text color is made theme-aware */}
      <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-purple-300' : 'text-[#6334B9]'}`}>
        {course.description}
      </p>
      <div className="flex items-center mb-4">
        {/* Rating number text color is made theme-aware */}
        <span className={`${darkMode ? 'text-white' : 'text-gray-900'} mr-1`}>
          {course.rating.toFixed(1)}
        </span>
        {/* Star icon color (yellow) remains the same */}
        <div className="flex text-yellow-400 text-sm">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>
        {/* Review count text color is made theme-aware */}
        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-900'} text-sm ml-2`}>
          ({course.reviews})
        </span>
      </div>
      <button 
        // Button style remains consistent, using brand colors
        className="w-full bg-[#6334B9] hover:bg-[#6334B9] text-white font-bold py-2 px-4 rounded-lg transition duration-300 shadow-lg mt-auto cursor-pointer"
      >
        Enroll Now
      </button>
    </div>
  </div>
);

// Main Courses Section component
const CoursesSection: FC<CoursesSectionProps> = ({ darkMode }) => {
  return (
    // Main container background and text color are made theme-aware
    <div className={`font-sans transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <main className="container mx-auto p-4 md:p-8">

        {/* Featured Courses section */}
        <section className="my-8 md:my-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 ml-35">
            {/* Section title text color is made theme-aware */}
            <h2 className={`text-3xl font-bold mb-4 md:mb-0 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Courses
            </h2>
            {/* View all link is made theme-aware */}
            {/* <a 
              href="#" 
              className={`font-medium hover:underline ${darkMode ? 'text-[#6334B9] hover:text-purple-300' : 'text-[#6334B9] hover:text-purple-900'}`}
            >
              View all
            </a> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ml-25 mr-25">
            {featuredCourses.map((course, index) => (
              // Pass the darkMode prop to the CourseCard
              <CourseCard key={index} course={course} darkMode={darkMode} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default CoursesSection;