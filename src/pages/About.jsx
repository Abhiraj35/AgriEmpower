import React from "react";

function About() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-200 text-gray-800 min-h-screen p-8">
      <div className="max-w-6xl mx-auto mt-20">
        <div className="bg-white p-8 rounded-lg mb-10">
          <h1 className="text-5xl font-extrabold text-center text-green-700 mb-10">
            About Us
          </h1>
          <p className="text-xl mb-8 text-left">
            Welcome to{" "}
            <span className="text-green-600 font-semibold">AgriEmpower</span>, a
            comprehensive platform designed to revolutionize the way farmers
            interact with the agricultural market. Our mission is to bridge the
            gap between farmers and essential agricultural resources through
            technology and innovation.
          </p>

          <p className="text-lg mb-8 text-left">
            Farmers often face challenges in accessing real-time market data,
            trends, and negotiation tools.{" "}
            <span className="font-semibold text-blue-600">AgriEmpower</span>{" "}
            aims to address these issues by offering a platform where farmers
            can:
          </p>

          <ul className="list-disc list-inside text-lg mb-12 text-gray-700 leading-relaxed">
            <li className="mb-2">
              Create personalized profiles to manage their agricultural needs.
            </li>
            <li className="mb-2">
              Browse and select seeds, fertilizers, and irrigation resources
              from verified suppliers.
            </li>
            <li className="mb-2">
              Place orders with ease, specifying quantities and delivery
              locations.
            </li>
            <li className="mb-2">
              Track their orders and make secure payments through our platform.
            </li>
            <li className="mb-2">
              Receive timely deliveries and provide feedback on products and
              services.
            </li>
          </ul>
        </div>

        {/* Card Section */}
        <div className="flex  justify-center gap-8 mb-12">
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 overflow-hidden">
            <img
              src="./images/about-farmerRegestration.jpg"
              alt="Farmer Registration"
              className="w-full h-50 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Farmer Registration
            </h2>
            <p className="text-gray-600">
              Farmers can create profiles to manage their agricultural
              activities and track their orders efficiently.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 overflow-hidden">
            <img
              src="./images/input-illestration.jpg"
              alt="Input Selection"
              className="w-full h-50 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Input Selection
            </h2>
            <p className="text-gray-600">
              Browse and select from a range of seeds, fertilizers, and
              irrigation resources tailored to your needs.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 overflow-hidden">
            <img
              src=".\images\product-manager-concept-illustration.jpg"
              alt="Order Processing"
              className="w-full h-50 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Order Processing
            </h2>
            <p className="text-gray-600">
              Efficiently place and manage your orders, and track their status
              through our platform.
            </p>
          </div>
        </div>

        <p className="text-xl text-center text-gray-700">
          At <span className="text-blue-600 font-bold">AgriEmpower</span>, we
          are committed to supporting farmers by providing them with the tools
          and resources needed to succeed in the agricultural market. Our
          platform is designed to be user-friendly and accessible, ensuring that
          every farmer can benefit from our services.
        </p>
      </div>
    </div>
  );
}

export default About;
