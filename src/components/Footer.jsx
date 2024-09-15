import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save feedback data to a backend or local storage here

    // Redirect to feedback response page (or handle submission)
    window.location.href = "/feedback-response";
  };

  return (
    <footer className="bg-gradient-to-b from-blue-300 to-gray-900  text-black py-8 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
            <Link to="/community" className="hover:underline">
              Community
            </Link>
            <Link to="/cart" className="hover:underline">
              Cart
            </Link>
          </div>

          <div className="mt-6 md:mt-0">
            <p>&copy; 2024 AgriEmpower. All rights reserved.</p>
          </div>
        </div>

        <div className="bg-gray-900  p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-4 text-white">Feedback</h2>
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => handleStarClick(star)}
                    className={`w-8 h-8 cursor-pointer ${
                      rating >= star ? "text-yellow-400" : "text-gray-400"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>

            <textarea
              rows="4"
              placeholder="Enter your feedback here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full min-h-12 p-1 border rounded-lg mb-2 border-gray-300 text-black"
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 hover:bg-green-700 hover:border-yellow-300 hover:border text-center duration-300 rounded-xl"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
