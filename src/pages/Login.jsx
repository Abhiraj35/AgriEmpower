import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner'; // Import the toast function from Sonner

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to play the notification sound
  const playSound = () => {
    const audio = new Audio('./audio/notification.mp3'); // Correct path to your sound file
    audio.play();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., authentication API call)
    
    // Show toast message on login
    toast.success('Login successful! Redirected to Home...');

    // Play the sound when the toast is triggered
    playSound();

    // Redirect to Home page after showing the toast
    setTimeout(() => {
      navigate('/home'); // Redirect to Home page
    }, 1000); // Delay the navigation slightly to allow the toast to be visible
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-900">
      <div className="flex w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        {/* Illustration Video */}
        <div className="hidden md:block w-1/2">
          <video
            src="./images/login-animation.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-lg"
          ></video>
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-8">Login</h2>

            <form onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="block w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 text-center"
              >
                Login
              </button>
            </form>

            {/* Forgot Password Link */}
            <div className="text-center mt-4">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Register Link */}
            <div className="text-center mt-2">
              <p>
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
