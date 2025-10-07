import { type FC } from "react";

const CallToAction: FC = () => {
  return (
    <section className="text-center py-16">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Level Up Your Coding Skills?
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Join CodeSpark today and embark on your journey to coding mastery.
      </p>
      <button
        className="px-6 py-3 font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300"
        style={{
          backgroundColor: "#6334B9",
          color: "#fff",
        }}
      >
        Get Started
      </button>
    </section>
  );
};

export default CallToAction;
