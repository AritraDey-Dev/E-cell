import { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Clear any previous messages

    try {
      // Send request to the backend
      const response = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
      
      if (response.data.success) {
        setMessage("Password reset link has been sent to your email.");
      } else {
        setMessage("Error: Unable to send reset link. Please try again.");
      }
    } catch (error) {
      setMessage("Error: Something went wrong. Please check your email and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
      <form onSubmit={handleForgotPassword} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-2 p-2 w-full border rounded focus:outline-none focus:border-indigo-500"
        />
        
        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>

        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </form>
    </div>
  );
}

export default ForgotPassword;
