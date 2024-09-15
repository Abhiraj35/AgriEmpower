import React from "react";

const FeedbackResponse = () => {
  return (
    <div
      className="bg-cover bg-center w-full bg-[url('./src/images/feedbackbackground.jpg')]"
    >
      <div className="min-h-screen flex items-center justify-center p-8 bg-gray-100 bg-opacity-5">
        <div className="max-w-md mx-auto p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 border border-white border-opacity-30">
          <h1 className="text-3xl font-bold mb-4 text-black">
            Thank You for Your Feedback!
          </h1>
          <p className="text-lg mb-6 text-gray-900">
            We appreciate your input and will use it to improve our services. If
            you have any additional comments or questions, feel free to contact
            us.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-green-600 text-white py-2 px-6 hover:bg-green-700 hover:border-yellow-300 hover:border text-center duration-300 rounded-3xl"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackResponse;
