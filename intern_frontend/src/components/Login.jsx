import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-900 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back 👋</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Log In
        </button>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-gray-500">or</span>
        </div>
        <button
          className="w-full border border-gray-300 hover:border-gray-400 text-gray-800 font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="Google logo"
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
        <p className="text-sm text-center text-gray-500">
          Don’t have an account? <span className="text-blue-600 hover:underline cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
}
export default Login;
