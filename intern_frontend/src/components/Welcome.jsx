import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 min-h-screen w-full flex items-center justify-center px-4">
      <div className="text-center max-w-md w-full text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Welcome</h1>
        <p className="text-gray-300 mb-8 text-base sm:text-lg">
          Choose an option to begin your journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-300"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/SignUp")}
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
