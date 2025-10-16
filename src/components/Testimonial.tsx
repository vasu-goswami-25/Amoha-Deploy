
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
    name: "Rohan Mehta",
    title: "Software Engineer",
    quote:
      "CodeSpark helped me strengthen my coding fundamentals. I feel more confident tackling real-world projects now.",
    rating: 5,
    avatar: "https://placehold.co/100x100/A3E4D7/333333?text=RM",
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Frontend Developer",
    quote:
      "The structured lessons and practical projects made learning easy and fun. I loved the hands-on approach.",
    rating: 5,
    avatar: "https://placehold.co/100x100/F5CBA7/333333?text=PS",
  },
  {
    id: 3,
    name: "Amit Verma",
    title: "Backend Developer",
    quote:
      "The exercises were challenging yet enjoyable. I could immediately apply what I learned to real projects.",
    rating: 5,
    avatar: "https://placehold.co/100x100/D2B4DE/333333?text=AV",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    title: "Fullstack Developer",
    quote:
      "CodeSpark gave me confidence in both frontend and backend development. Highly recommend it to all engineering students.",
    rating: 5,
    avatar: "https://placehold.co/100x100/FFD700/333333?text=SG",
  },
  {
    id: 5,
    name: "Rahul Singh",
    title: "Software Intern",
    quote:
      "The tutorials are concise and practical. I gained real coding experience within a few weeks.",
    rating: 4,
    avatar: "https://placehold.co/100x100/87CEEB/333333?text=RS",
  },
  {
    id: 6,
    name: "Anjali Reddy",
    title: "UI/UX Engineer",
    quote:
      "I loved the mix of theory and practice. It helped me implement designs effectively in my projects.",
    rating: 5,
    avatar: "https://placehold.co/100x100/FFB6C1/333333?text=AR",
  },
  {
    id: 7,
    name: "Karan Mehra",
    title: "DevOps Engineer",
    quote:
      "I learned how to structure projects efficiently. The platform is very beginner-friendly yet advanced enough for pros.",
    rating: 5,
    avatar: "https://placehold.co/100x100/90EE90/333333?text=KM",
  },
  {
    id: 8,
    name: "Deepika Joshi",
    title: "Data Engineer",
    quote:
      "The data handling projects helped me understand real-world applications. Very informative and practical.",
    rating: 4,
    avatar: "https://placehold.co/100x100/FFA07A/333333?text=DJ",
  },
  {
    id: 9,
    name: "Vikram Patel",
    title: "Cloud Engineer",
    quote:
      "The step-by-step guides are clear and easy to follow. My understanding of cloud architecture improved a lot.",
    rating: 5,
    avatar: "https://placehold.co/100x100/ADD8E6/333333?text=VP",
  },
  {
    id: 10,
    name: "Shreya Kapoor",
    title: "Frontend Engineer",
    quote:
      "I was able to build small projects quickly. The learning curve is smooth and very encouraging.",
    rating: 5,
    avatar: "https://placehold.co/100x100/FF69B4/333333?text=SK",
  },
  {
    id: 11,
    name: "Aditya Rao",
    title: "Software Engineer",
    quote:
      "CodeSpark's exercises helped me sharpen my problem-solving skills and apply them effectively in coding tests.",
    rating: 5,
    avatar: "https://placehold.co/100x100/20B2AA/333333?text=AR",
  },
  {
    id: 12,
    name: "Isha Verma",
    title: "Fullstack Developer",
    quote:
      "Practical coding tasks and projects helped me improve both frontend and backend skills simultaneously.",
    rating: 5,
    avatar: "https://placehold.co/100x100/9370DB/333333?text=IV",
  },
  {
    id: 13,
    name: "Raghav Jain",
    title: "Mobile App Developer",
    quote:
      "I could implement concepts directly into app projects. The learning method is highly practical.",
    rating: 4,
    avatar: "https://placehold.co/100x100/FF6347/333333?text=RJ",
  },
  {
    id: 14,
    name: "Pooja Malhotra",
    title: "Frontend Engineer",
    quote:
      "The guided exercises made it easy to understand complex topics. I now code with more confidence.",
    rating: 5,
    avatar: "https://placehold.co/100x100/DA70D6/333333?text=PM",
  },
  {
    id: 15,
    name: "Siddharth Khanna",
    title: "Backend Developer",
    quote:
      "I learned best practices in backend programming. The hands-on approach is very effective for engineers.",
    rating: 5,
    avatar: "https://placehold.co/100x100/00CED1/333333?text=SK",
  },
  {
    id: 16,
    name: "Neha Rani",
    title: "Software Intern",
    quote:
      "The structured learning path helped me progress fast and confidently. Great platform for coding enthusiasts.",
    rating: 4,
    avatar: "https://placehold.co/100x100/FFDEAD/333333?text=NR",
  },
  {
    id: 17,
    name: "Manish Kumar",
    title: "Fullstack Developer",
    quote:
      "I gained both theoretical knowledge and practical experience. CodeSpark is highly recommended for engineers.",
    rating: 5,
    avatar: "https://placehold.co/100x100/98FB98/333333?text=MK",
  },
  {
    id: 18,
    name: "Sakshi Sharma",
    title: "UI Engineer",
    quote:
      "The exercises helped me implement designs effectively. Very useful for anyone interested in frontend development.",
    rating: 5,
    avatar: "https://placehold.co/100x100/FFB6C1/333333?text=SS",
  },
  {
    id: 19,
    name: "Vivek Choudhary",
    title: "DevOps Engineer",
    quote:
      "Practical tasks gave me a real-world feel. The exercises are challenging but rewarding.",
    rating: 4,
    avatar: "https://placehold.co/100x100/87CEFA/333333?text=VC",
  },
  {
    id: 20,
    name: "Ananya Roy",
    title: "Data Engineer",
    quote:
      "The data-centric projects helped me understand practical data handling in engineering projects.",
    rating: 5,
    avatar: "https://placehold.co/100x100/FFC0CB/333333?text=AR",
  },
  {
    id: 21,
    name: "Ritesh Bhatia",
    title: "Software Engineer",
    quote:
      "I now have practical knowledge in both frontend and backend development. Highly effective learning experience.",
    rating: 5,
    avatar: "https://placehold.co/100x100/20B2AA/333333?text=RB",
  },
  {
    id: 22,
    name: "Divya Nair",
    title: "Frontend Developer",
    quote:
      "The projects gave me hands-on experience. The learning flow is simple, smooth, and effective.",
    rating: 4,
    avatar: "https://placehold.co/100x100/FFA07A/333333?text=DN",
  },
  {
    id: 23,
    name: "Harsh Agarwal",
    title: "Backend Developer",
    quote:
      "I improved my coding and problem-solving skills significantly. CodeSpark is ideal for engineering students.",
    rating: 5,
    avatar: "https://placehold.co/100x100/ADFF2F/333333?text=HA",
  },
  {
    id: 24,
    name: "Neeraj Kumar",
    title: "Mobile Developer",
    quote:
      "Hands-on exercises helped me understand real-world mobile development better than textbooks.",
    rating: 5,
    avatar: "https://placehold.co/100x100/BA55D3/333333?text=NK",
  },
  {
    id: 25,
    name: "Isha Singh",
    title: "Fullstack Developer",
    quote:
      "The combination of projects and tutorials helped me gain practical skills fast. Very satisfied with the learning path.",
    rating: 5,
    avatar: "https://placehold.co/100x100/20B2AA/333333?text=IS",
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
        className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl shadow-lg py-8 sm:py-12 transition-colors duration-500 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-left ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Our Learners
        </h2>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 w-max animate-marquee">
            {[...testimonialsData, ...testimonialsData].map((testimonial, i) => (
              <div
                key={testimonial.id + "-" + i}
                className={`w-[260px] flex-shrink-0 p-4 mx-2 rounded-lg shadow-md transition-colors duration-500 ${
                  darkMode
                    ? "bg-gray-700 border border-gray-600 text-white"
                    : "bg-white border border-[#6334B9] text-gray-700"
                }`}
              >
                <div className="flex items-center mb-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                      {testimonial.title}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <StarRating rating={testimonial.rating} darkMode={darkMode} />
                  </div>
                </div>
                <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
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
