import Input from "./Input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "./Button";
// import SignUp from "../pages/SignUp"; // Not needed
// import SignIn from "../pages/SignIn"; // Not needed
import { useAuth } from "../context/AuthContext"; // Import useAuth

const AuthForm = ({ mode }) => {
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState(""); // For displaying errors
  const [loading, setLoading] = useState(false); // For loading state
  const { login, signup } = useAuth(); // Get auth functions
  const navigate = useNavigate(); // For redirection

  const isSignup = mode === "signup";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (isSignup && form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      if (isSignup) {
        await signup(form.email, form.password);
        // Optionally show a success message or redirect to login
        alert("Signup successful! Please sign in.");
        navigate("/signin");
      } else {
        await login(form.email, form.password);
        navigate("/"); // Redirect to home page after login
      }
    } catch (err) {
      setError(err.message || `Failed to ${mode}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        {isSignup ? "Create an Account" : "Welcome Back"}
      </h2>

      {error && <p className="text-sm text-center text-red-500">{error}</p>}

      <Input
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="you@example.com"
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="••••••••"
      />

      {isSignup && (
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
        />
      )}

      <Button label={loading ? "Processing..." : (isSignup ? "Sign Up" : "Sign In")} disabled={loading}/>

      <p className="text-sm text-center text-gray-600">
        {isSignup ? (
          <>
            Already have an account?{" "}
            <Link to="/signin" className="text-coral-red hover:underline">
              Sign in
            </Link>
          </>
        ) : (
          <>
            Don't have an account?{" "}
            <Link to="/signup" className="text-coral-red hover:underline">
              Sign up
            </Link>
          </>
        )}
      </p>
    </form>
  );
};

export default AuthForm;

