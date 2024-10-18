import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner"; // Import the Toaster from sonner
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Community from "./pages/Community";
import FeedbackResponse from "./pages/FeedbackResponse";
import Payment from "./pages/Payment";
import Market from "./pages/Market";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="w-screen h-screen bg-slate-900">
            <Login />
          </div>
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <div className="w-screen h-screen bg-slate-900">
            <Header />
            <Home />
            <Footer />
          </div>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <div className="w-screen h-screen bg-slate-900">
            <Header />
            <About />
            <Footer />
          </div>
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <div className="w-screen h-screen bg-slate-900">
            <Header />
            <Cart />
            <Footer />
          </div>
        </>
      ),
    },
    {
      path: "/community",
      element: (
        <>
          <div className="w-screen h-screen bg-slate-900">
            <Header />
            <Community />
            <Footer />
          </div>
        </>
      ),
    },
    {
      path: "/feedback-response",
      element: (
        <>
          <div className="w-screen h-screen bg-slate-900">
            <Header />
            <FeedbackResponse />
            <Footer />
          </div>
        </>
      ),
    },
    {
      path: "/market",
      element: (
        <>
          <div className="w-screen h-screen bg-slate-900">
            <Header />
            <Market />
            <Footer />
          </div>
        </>
      ),
    },
    {
      path: "/payment",
      element: (
        <>
          <div className="w-screen h-screen bg-slate-900">
            <Header />
            <Payment />
            <Footer />
          </div>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* Add the Toaster component at the root level with the desired props */}
      <Toaster position="bottom-right" expand={false} richColors />
    </>
  );
}

export default App;
