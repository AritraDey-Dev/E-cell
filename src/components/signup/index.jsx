import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Signup form submitted");

    try {
      console.log("Sending signup request with data:", { rollNo, name, password });
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        rollNo,
        name,
        password,
      });

      const { data } = response;
      console.log("Signup response received:", data);

      if (data.success) {
        console.log("Signup successful, preparing to redirect...");
        toast.success("Signup successful! Redirecting to login...");
        setTimeout(() => {
          console.log("Redirecting to login page...");
          window.location.href = "/verify-email";
        }, 2000);
      } else {
        console.log("Signup failed with message:", data.message);
        toast.error(data.message || "Signup failed. Please check your inputs.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      if (error.response && error.response.data && error.response.data.message) {
        console.log("Error message from server:", error.response.data.message);
        toast.error(error.response.data.message);
      } else {
        console.log("Unknown error occurred during signup.");
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Roll No"
            value={rollNo}
            onChange={(e) => {
              console.log("Roll No updated:", e.target.value);
              setRollNo(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              console.log("Name updated:", e.target.value);
              setName(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              console.log("Password updated");
              setPassword(e.target.value);
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#fdcf41] text-black font-semibold rounded-lg hover:bg-[#f2b700] transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
