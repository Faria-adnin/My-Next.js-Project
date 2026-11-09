import Link from "next/link";
export default function Register() {
    return(
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">

      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Create Account
        </h1>

        <p className="text-slate-500 mt-2">
          Register to access the Port Management System
        </p>
      </div>

      {/* Registration Form */}
      <form className="space-y-5">

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2"> Full Name </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2"> Email Address </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2"> Phone Number </label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2"> Password </label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            required
            minLength={8}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
          />

          <p className="text-xs text-slate-400 mt-1">
            Password must contain at least 8 characters.
          </p>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2"> Confirm Password </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            minLength={8}
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="terms"
            required
            className="mt-1 accent-cyan-600"
          />

          <label htmlFor="terms" className="text-sm text-slate-600">
            I agree to the{" "}
            <Link href="/terms" className="text-cyan-600 hover:underline">
              Terms and Conditions
            </Link>
            {" "}and{" "}
            <Link href="/privacy" className="text-cyan-600 hover:underline">
              Privacy Policy
            </Link>.
          </label>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
        >
          Create Account
        </button>

      </form>

      {/* Login Link */}
      <p className="text-center text-sm text-slate-500 mt-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-cyan-600 font-semibold hover:underline"
        >
          Sign In
        </Link>
      </p>

    </div>
    );
}