import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OtpVerification = () => {
    const [otp, setOtp] = useState('');

    const handleOtpChange = (e) => {
        console.log("OTP input changed:", e.target.value); // Log OTP input change
        setOtp(e.target.value);
    };

    const handleOtpVerification = async (e) => {
        e.preventDefault();

        console.log("Attempting to verify OTP:", otp); // Log OTP for debugging

        try {
            const response = await axios.post("http://localhost:5000/api/auth/verify-email", { code: otp });
            console.log("Response from server:", response.data); // Log the server response

            if (response.data.success) {
                toast.success(response.data.message); // Show success message
                // Redirect or take appropriate action on success (e.g., navigate to another page)
            } else {
                toast.error(response.data.message); // Show error message
            }
        } catch (error) {
            console.error("Error during OTP verification:", error); // Log error
            if (error.response) {
                console.log("Error response data:", error.response.data); // Log specific error response
                toast.error(error.response.data.message || "An error occurred"); // Show error message
            } else {
                console.error("Network error:", error.message); // Log network error message
                toast.error("Network error, please try again later."); // Show network error message
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <ToastContainer position="top-center" autoClose={3000} />
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">Verify OTP</h2>
                <form onSubmit={handleOtpVerification} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={handleOtpChange} // Use the handler directly
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-[#fdcf41] text-black font-semibold rounded-lg hover:bg-[#f2b700] transition duration-300"
                    >
                        Verify OTP
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p>
                        Didn't receive an OTP?{" "}
                        <a href="#" className="text-blue-500 hover:underline">
                            Resend OTP
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OtpVerification;
