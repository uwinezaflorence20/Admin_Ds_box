import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// Function to trigger speech synthesis
const speakText = (text) => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
};

const AdminSignIn = () => {
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [toastMessage, setToastMessage] = useState(null); // Popup message
  const [toastType, setToastType] = useState("success"); // Type: success or error
  const navigate = useNavigate();

  const allowedRoles = [
    "CompusAdmin",
    "Principal",
    "Dean",
    "Hod-CS",
    "Hod-CSE",
    "Hod-IS",
    "Hod-IT",
    "Register",
    "GuildPresident",
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setToastMessage(null);

    if (!role || !password) {
      setErrorMessage("Please select a role and enter a password");
      return;
    }

    try {
      setIsLoading(true); // Start loading
      const response = await axios.post("https://dsb-yf9s.onrender.com/admin/login", {
        role,
        password,
      });

      if (response.status === 200) {
        // Save the role in localStorage after successful login
        localStorage.setItem("userRole", role);
        
        setToastMessage("Login successful! Redirecting to the dashboard...");
        setToastType("success");
        setTimeout(() => {
          navigate("/student"); // Redirect to student page (Dashboard)
        }, 2000); // Redirect after 2 seconds
      }
    } catch (error) {
      console.error("Error during login:", error);
      setToastMessage(
        error.response?.data?.message || "Login failed. Check your credentials."
      );
      setToastType("error");
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="pt-2 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      {/* Toast/Popup Message */}
      {toastMessage && (
        <div
          className={`fixed top-5 mt-20 right-5 px-4 py-2 rounded-lg shadow-lg transition duration-300 ${
            toastType === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
          onClick={() => setToastMessage(null)} // Dismiss on click
        >
          {toastMessage}
        </div>
      )}

      <div className="mx-auto max-w-screen-md mt-20 bg-sky-100 rounded-3xl px-4 py-16 sm:px-6 lg:px-8 dark:bg-gray-800 dark:border dark:border-gray-700">
        <div className="mx-auto max-w-lg text-center">
          <h1
            className="text-2xl text-sky-800 font-bold sm:text-3xl dark:text-white"
            onMouseEnter={() => speakText("Sign in to your account")}
            onMouseLeave={() => window.speechSynthesis.cancel()} // Stop speech when mouse leaves
          >
            Sign In Admin
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}

          <div>
            <label htmlFor="role" className="sr-only">
              Role
            </label>
            <div className="relative">
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                onMouseEnter={() => speakText("Select Role")}
                onMouseLeave={() => window.speechSynthesis.cancel()} // Stop speech when mouse leaves
              >
                <option value="">-- Select Role --</option>
                {allowedRoles.map((roleOption) => (
                  <option key={roleOption} value={roleOption}>
                    {roleOption}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Enter Password"
                onMouseEnter={() => speakText("Enter your password")}
                onMouseLeave={() => window.speechSynthesis.cancel()} // Stop speech when mouse leaves
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-sky-800 dark:text-white">
              No account?{" "}
              <Link to="/adminsignup">
                <span className="underline hover:text-sky-400 dark:hover:text-sky-400">
                  Sign up
                </span>
              </Link>
            </p>

            <button
              type="submit"
              className={`inline-block rounded-lg px-5 py-3 text-sm font-medium text-white ${
                isLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-sky-800 hover:bg-white hover:text-sky-800 dark:bg-sky-700 dark:hover:bg-sky-600 dark:hover:text-white"
              }`}
              disabled={isLoading} // Disable button when loading
              onMouseEnter={() => speakText("Sign In button")}
              onMouseLeave={() => window.speechSynthesis.cancel()} // Stop speech when mouse leaves
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
