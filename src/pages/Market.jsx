import React from "react";

const Market = () => {
  return (
    <div className=" bg-gray-900 p-4 lg:p-8 mt-20">
      {/* Search Bar and Filters */}
      <div className="mb-6">
        <div className="relative flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-1/0.5">
            <input
              type="text"
              placeholder="Search"
              className="w-1/2 p-2 pl-7 border bg-gray-700 text-white rounded-3xl  hover:border-yellow-400 "
            />
          </div>
          <div className="flex gap-4 ">
            <select className="p-2 border rounded-lg border-[#8D6E63] bg-[#F5F5F5] text-[#4CAF50]">
              <option className="text-[#4CAF50]">Sort by Price</option>
              <option className="text-[#4CAF50]">Sort by Rating</option>
            </select>
            <select className="p-2 border rounded-lg border-[#8D6E63] bg-[#F5F5F5] text-[#4CAF50]">
              <option className="text-[#4CAF50]">Filter by Crop Type</option>
              <option className="text-[#4CAF50]">Filter by Region</option>
            </select>
          </div>
        </div>
      </div>

      {/* Featured Crops */}
      <div className="p-4 rounded-lg text-center mb-8">
        <h2 className="text-2xl font-bold text-white">Featured Crops</h2>
        {/* Crop Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <img
              src="./src/images/wheat.jpg"
              alt="Crop"
              className="h-32 w-full object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-sky-500">Wheat</h3>
            <p className="text-green-600 font-bold">₹30 per kg</p>
          </div>











          {/* Add other crop cards here */}
          <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <img
              src="./src/images/rice.jpg"
              alt="Crop"
              className="h-32 w-full object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-sky-500">Rice</h3>
            <p className="text-green-600 font-bold">₹30 per kg</p>
          </div>
          {/* Repeat as needed */}

          <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <img
              src="./src/images/corn.jpg"
              alt="Crop"
              className="h-32 w-full object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-sky-500">Corn</h3>
            <p className="text-green-600 font-bold">₹30 per kg</p>
          </div>
          {/* Add other crop cards here */}
          <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
            <img
              src="./src/images/onion.jpg"
              alt="Crop"
              className="h-32 w-full object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-sky-500">Onion</h3>
            <p className="text-green-600 font-bold">₹30 per kg</p>
          </div>
        </div>
      </div>

      {/* Main Container for the Market Page with Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-8 p-4">
        {/* Crops Section Container */}
        <div className="flex-1 lg:w-2/3">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl text-white font-bold mb-4">Crops Prices</h2>
            {/* Grid for Crop Cards with Fixed Dimensions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Crop Cards */}
              <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="./src/images/wheat.jpg"
                  alt="Crop"
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-sky-500">Wheat</h3>
                <p className="text-green-600 font-bold">₹30 per kg</p>
              </div>

              {/* Add other crop cards here */}
              <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="./src/images/rice.jpg"
                  alt="Crop"
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-sky-500">Rice</h3>
                <p className="text-green-600 font-bold">₹30 per kg</p>
              </div>

              <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="./src/images/corn.jpg"
                  alt="Crop"
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-sky-500">Corn</h3>
                <p className="text-green-600 font-bold">₹30 per kg</p>
              </div>

              <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="./src/images/coffee.jpg"
                  alt="Crop"
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-sky-500">Coffee</h3>
                <p className="text-green-600 font-bold">₹30 per kg</p>
              </div>

              <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="./src/images/barley.jpg"
                  alt="Crop"
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-sky-500">Barley</h3>
                <p className="text-green-600 font-bold">₹30 per kg</p>
              </div>

              <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="./src/images/millet.jpg"
                  alt="Crop"
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-sky-500">Millet</h3>
                <p className="text-green-600 font-bold">₹30 per kg</p>
              </div>

              {/* Add other crop cards here */}
              <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="./src/images/peanut.jpg"
                  alt="Crop"
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-sky-500">Peanut</h3>
                <p className="text-green-600 font-bold">₹30 per kg</p>
              </div>

              <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="./src/images/oats.jpg"
                  alt="Crop"
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-sky-500">Oats</h3>
                <p className="text-green-600 font-bold">₹30 per kg</p>
              </div>

              <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="./src/images/quinoa.jpeg"
                  alt="Crop"
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-sky-500">Quinoa</h3>
                <p className="text-green-600 font-bold">₹30 per kg</p>
              </div>

              <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="./src/images/cotton.jpg"
                  alt="Crop"
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-sky-500">Cotton</h3>
                <p className="text-green-600 font-bold">₹30 per kg</p>
              </div>

              <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="./src/images/sugarcane.jpg"
                  alt="Crop"
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-sky-500">
                  Sugarcane
                </h3>
                <p className="text-green-600 font-bold">₹30 per kg</p>
              </div>

              <div className="bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="./src/images/onion.jpg"
                  alt="Crop"
                  className="h-32 w-full object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-sky-500">Onion</h3>
                <p className="text-green-600 font-bold">₹30 per kg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buyers Section Container */}
        <div className="flex-none lg:w-1/3">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl text-white font-bold mb-4">Top Buyers</h2>
            {/* Stack for Buyer Cards with Space Between */}
            <div className="space-y-4">
              {/* Buyer Cards */}
              <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 flex  items-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src=".\src\images\mota-bhai.jpeg"
                  alt="Buyer"
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Mota Bhai</h3>
                  <p className="text-yellow-500">⭐ 4.8/5</p>
                  <button className="bg-[#a0e548] text-white px-4 py-2 mt-2 rounded hover:bg-green-600 transition-colors duration-300">
                    Contact
                  </button>
                </div>
              </div>
              {/* Add other buyer cards here */}

              <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 flex items-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src=".\src\images\bill-gates.jpeg"
                  alt="Buyer"
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Bill Gates</h3>
                  <p className="text-yellow-500">⭐ 4.2/5</p>
                  <button className="bg-[#a0e548] text-white px-4 py-2 mt-2 rounded hover:bg-green-600 transition-colors duration-300">
                    Contact
                  </button>
                </div>
              </div>

              <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 flex items-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src=".\src\images\mukesh-ambani.jpeg"
                  alt="Buyer"
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Mukesh Ambani</h3>
                  <p className="text-yellow-500">⭐ 4.5/5</p>
                  <button className="bg-[#a0e548] text-white px-4 py-2 mt-2 rounded hover:bg-green-600 transition-colors duration-300">
                    Contact
                  </button>
                </div>
              </div>

              <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 flex items-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src=".\src\images\Narendra Modi.jpeg"
                  alt="Buyer"
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Narendra Modi</h3>
                  <p className="text-yellow-500">⭐ 4.9/5</p>
                  <button className="bg-[#a0e548] text-white px-4 py-2 mt-2 rounded hover:bg-green-600 transition-colors duration-300">
                    Contact
                  </button>
                </div>
              </div>

              <div className="bg-gray-800 text-white shadow-md rounded-lg p-4 flex items-center hover:shadow-lg transition-shadow duration-300">
                <img
                  src=".\src\images\Mark-Zukerberg.jpeg"
                  alt="Buyer"
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Mark Zukerberg</h3>
                  <p className="text-yellow-500">⭐ 4.4/5</p>
                  <button className="bg-[#a0e548] text-white px-4 py-2 mt-2 rounded hover:bg-green-600 transition-colors duration-300">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div
        id="contact-us"
        className="bg-white p-4 rounded-lg shadow-md mt-10 relative"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4 text-sky-500">Contact Us</h2>
          <p className="text-gray-600">
            For any inquiries,
            <br />
            please email us at{" "}
            <a href="mailto:support@example.com" className="text-blue-500">
              support@example.com
            </a>{" "}
            or call us at <span className="text-blue-500">+123-456-7890</span>.
          </p>
        </div>
        {/* Social Media Icons */}
        <div className="absolute bottom-4 right-4 flex space-x-4">
          <a
            href="https://facebook.com"
            className="text-blue-600 hover:text-blue-700"
          >
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>
          <a
            href="https://twitter.com"
            className="text-blue-400 hover:text-blue-500"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="https://instagram.com"
            className="text-pink-600 hover:text-pink-700"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="https://linkedin.com"
            className="text-blue-700 hover:text-blue-800"
          >
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Market;
