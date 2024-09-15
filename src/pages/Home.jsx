import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const resources = [
    {
      title: "Wheat",
      description:
        "Wheat is a widely cultivated grain, essential for bread and pasta.",
      image: "./src/images/wheat.jpg",
      moreInfo:
        "Wheat is rich in carbohydrates and a primary source of nutrition worldwide. It is grown in both temperate and tropical regions. The major wheat-growing countries include China, India, and Russia.",
    },
    {
      title: "Rice",
      description:
        "Rice is a staple food for over half of the world’s population.",
      image: "./src/images/rice.jpg",
      moreInfo:
        "Rice is cultivated in flooded fields called paddies. It comes in many varieties including basmati, jasmine, and brown rice, each with its unique flavor and texture.",
    },
    {
      title: "Corn",
      description:
        "Corn is used for food, livestock feed, and as an industrial raw material.",
      image: "./src/images/corn.jpg",
      moreInfo:
        "Corn is a versatile crop that is grown across the globe. It is a key ingredient in many foods such as cornmeal, corn syrup, and even ethanol for biofuel.",
    },
    {
      title: "Coffee",
      description:
        "Soybeans are a rich source of protein and oil, widely used in various products.",
      image: "./src/images/coffee.jpg",
      moreInfo:
        "Soybeans are a rich source of protein and oil, widely used in various products. They are grown in many countries, including Brazil, Mexico, and India.",
    },
    {
      title: "Barley",
      description:
        "Barley is a versatile grain used in soups, bread, and beverages like beer.",
      image: "./src/images/barley.jpg",
      moreInfo:
        "Barley is a versatile grain used in soups, bread, and beverages like beer. It is grown in many countries, including Brazil, Mexico, and India.",
    },
    {
      title: "Millet",
      description:
        "Millet is a small-seeded grass that is important for both human and livestock consumption.",
      image: "./src/images/millet.jpg",
      moreInfo:
        "Millet is a small-seeded grass that is important for both human and livestock consumption. It is grown in many countries, including Brazil, Mexico, and India.",
    },
    {
      title: "Peanut",
      description:
        "Sorghum is a drought-tolerant grain, used for food, fodder, and biofuel.",
      image: "./src/images/peanut.jpg",
      moreInfo:
        "Sorghum is a drought-tolerant grain, used for food, fodder, and biofuel. It is grown in many countries, including Brazil, Mexico, and India.",
    },
    {
      title: "Oats",
      description:
        "Oats are commonly eaten as oatmeal or rolled oats, and are used in cereals and baking.",
      image: "./src/images/oats.jpg",
      moreInfo:
        "Oats are commonly eaten as oatmeal or rolled oats, and are used in cereals and baking. They are grown in many countries, including Brazil, Mexico, and India.",
    },
    {
      title: "Quinoa",
      description:
        "Quinoa is a protein-rich seed often considered a superfood, popular in health-conscious diets.",
      image: "./src/images/quinoa.jpeg",
      moreInfo:
        "Quinoa is a protein-rich seed often considered a superfood, popular in health-conscious diets. It is grown in many countries, including Brazil, Mexico, and India.",
    },
    {
      title: "Cotton",
      description:
        "Cotton is a fiber crop widely used for textiles and clothing.",
      image: "./src/images/cotton.jpg",
      moreInfo:
        "Cotton is a fiber crop widely used for textiles and clothing. It is grown in many countries, including Brazil, Mexico, and India.",
    },
    {
      title: "Sugarcane",
      description: "Sugarcane is cultivated for sugar production and biofuel.",
      image: "./src/images/sugarcane.jpg",
      moreInfo:
        "Sugarcane is cultivated for sugar production and biofuel. It is grown in many countries, including Brazil, Mexico, and India.",
    },
    {
      title: "Onion",
      description:
        "Onions are widely used in cooking for their sharp flavor and as a base for many dishes.",
      image: "./src/images/onion.jpg",
      moreInfo:
        "Onions are widely used in cooking for their sharp flavor and as a base for many dishes. They are grown in many countries, including Brazil, Mexico, and India.",
    },
  ];

  const openResourceModal = (resource) => {
    setSelectedResource(resource);
    setIsResourceModalOpen(true);
  };

  const openContactModal = () => setIsContactModalOpen(true);

  const closeModal = () => {
    setIsResourceModalOpen(false);
    setIsContactModalOpen(false);
  };

  return (
    <div
      className="bg-cover bg-center w-full mt-20 py-10"
      style={{ backgroundImage: `url('../src/images/Background.png')` }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-28 py-10 space-y-8 lg:space-y-0">
        {/* Main Content (Text Section) */}
        <div className="lg:w-3/5 text-white text-center lg:text-left space-y-6">
          <h3 className="text-2xl md:text-3xl">Hello, Abhiraj</h3>
          <h1 className="text-4xl md:text-7xl font-semibold leading-tight">
            100% TRUSTED Marketplace <br />
            <span className="font-light text-xl mt-2">
              for Easy, Secure, and Transparent Crop Transactions.
            </span>
          </h1>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-center lg:justify-start space-x-4">
            <Link
              to="/market"
              className="bg-green-500 rounded-full px-5 py-2 text-sm md:text-base font-medium hover:bg-transparent hover:border-green-500 hover:text-white duration-300 hover:border border-transparent"
            >
              Explore more
            </Link>
            <button
              onClick={openContactModal}
              className="rounded-full px-5 py-2 text-sm md:text-base font-light hover:border-yellow-300 hover:border text-center duration-300"
            >
              Contact us
            </button>
          </div>
        </div>

        {/* Illustration Section */}
        <div className="lg:w-2/5 mt-8 lg:mt-0 flex justify-center">
          <img
            src="./src/images/Home.png"
            className="w-full max-w-xs lg:max-w-full"
            alt="Illustration"
          />
        </div>
      </div>

      {/* Educational Resources Section */}
      <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-md container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
          Educational Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Resource Cards */}
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-[#2c3e50] text-sky-500 shadow-md rounded-lg p-2 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={resource.image}
                alt={resource.title}
                className="h-32 w-full object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{resource.title}</h3>
              <p className="text-white text-sm">{resource.description}</p>
              <button
                className="bg-green-500 text-white px-4 py-2 mt-2 mb-2 rounded hover:bg-green-600 transition-colors duration-300"
                onClick={() => openResourceModal(resource)}
              >
                Explore More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Educational Resources */}
      {isResourceModalOpen && selectedResource && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-full max-w-md">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <i className="fa-regular fa-xmark fa-lg"></i>
            </button>
            <div className="flex items-start">
              <img
                src={selectedResource.image}
                alt={selectedResource.title}
                className="h-32 w-32 object-cover rounded-md mr-4"
              />
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {selectedResource.title}
                </h2>
                <p className="text-gray-600">{selectedResource.description}</p>
                <hr className="my-4" />
                <p className="text-gray-800 font-light">
                  {selectedResource.moreInfo}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for "Contact Us" */}
      {isContactModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-gray-300 p-8 rounded-lg shadow-lg relative w-full max-w-md">
            <h2 className="text-2xl font-bold text-[#1c1d1c] mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              For any inquiries,
              <br />
              please email us at{" "}
              <a href="mailto:agriamigo@321.com" className="text-blue-500">
                agriamigo@321.com
              </a>{" "}
              <br />
              or call us at <span className="text-blue-500">+123-456-7890</span>
              .
            </p>
            <div className="flex justify-center space-x-4 mb-4">
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
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <i className="fa-regular fa-xmark fa-lg"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
