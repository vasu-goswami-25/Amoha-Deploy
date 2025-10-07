module.exports = {
  darkMode: "class", // enables class-based dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: "class", // enables class-based dark mode
//   content: [
//     "./index.html", "./src/**/*.{js,ts,jsx,tsx}" // ... your content paths
//   ],
//   theme: {
//     extend: {
//       animation: {
//         // Defines the animation: 60s duration, linear speed, infinite loop
//         slide: 'slide 60s linear infinite', 
//       },
//       keyframes: {
//         slide: {
//           '0%': { 
//             // Start at the original position
//             transform: 'translateX(0%)' 
//           },
//           '100%': { 
//             // Move left by 50% (the width of one set of testimonials)
//             transform: 'translateX(-50%)' 
//           },
//         },
//       },
//     },
//   },
//   plugins: [
//     // ...
//   ],
// }