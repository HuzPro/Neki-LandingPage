import Input from "./Input";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const AuthForm = ({ mode }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const isSignup = mode === "signup";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${mode} submitted`, form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-800">
        {isSignup ? "Create an Account" : "Welcome Back"}
      </h2>

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

      <Button label={isSignup ? "Sign Up" : "Sign In"}/>

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

