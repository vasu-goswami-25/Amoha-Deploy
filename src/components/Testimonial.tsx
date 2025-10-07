import { type FC } from 'react';

// Type for a single testimonial
interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating: number;
  avatar: string;
}

interface StarRatingProps {
  rating: number;
  darkMode: boolean;
}

interface TestimonialsProps {
  darkMode: boolean;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Dani Cobra",
    title: "Junior Developer",
    quote:
      "Before CodeSpark, coding felt intimidating. The step-by-step practice exercises and real-world projects made learning fun and easy to follow.",
    rating: 5,
    avatar: "https://placehold.co/100x100/A3E4D7/333333?text=DC",
  },
  {
    id: 2,
    name: "Priyanka Sharma",
    title: "Computer Science Student",
    quote:
      "I had no prior coding experience, but CodeSpark's lessons helped me go from basics to building my own apps in just three months.",
    rating: 5,
    avatar: "https://placehold.co/100x100/F5CBA7/333333?text=PS",
  },
  {
    id: 3,
    name: "John Doe",
    title: "Web Designer",
    quote:
      "A great resource for anyone looking to upskill in web development. The projects are well-structured and the community support is fantastic.",
    rating: 4,
    avatar: "https://placehold.co/100x100/D2B4DE/333333?text=JD",
  },
];

// ⭐ Star rating component
const StarRating: FC<StarRatingProps> = ({ rating, darkMode }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={
        i < rating
          ? "text-yellow-400"
          : darkMode
          ? "text-gray-600"
          : "text-gray-300"
      }
    >
      ★
    </span>
  ));
  return <div className="flex">{stars}</div>;
};

// ✨ Testimonials Slider Component
const Testimonials: FC<TestimonialsProps> = ({ darkMode }) => {
  return (
    <div
      className={`w-full flex justify-center py-10 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Outer container (background box) */}
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl shadow-lg py-8 sm:py-12 transition-colors duration-500 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center sm:text-left ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Our Learners
        </h2>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          {/* Duplicate list once for seamless infinite loop */}
          <div className="flex gap-4 animate-marquee w-max">
            {[...testimonialsData, ...testimonialsData].map((testimonial, i) => (
              <div
                key={testimonial.id + "-" + i}
                className={`min-w-[220px] sm:min-w-[260px] max-w-[280px] flex-shrink-0 p-4 sm:p-6 mx-2 sm:mx-3 rounded-lg shadow-md transition-colors duration-500 ${
                  darkMode
                    ? "bg-gray-700 border border-gray-600 text-white"
                    : "bg-white border border-[#6334B9] text-gray-700"
                }`}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3 sm:mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-sm sm:text-lg">
                      {testimonial.name}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {testimonial.title}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <StarRating rating={testimonial.rating} darkMode={darkMode} />
                  </div>
                </div>
                <p className={`text-xs sm:text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
