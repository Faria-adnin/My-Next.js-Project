export default function Login() {
    return(
       <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome Back
        </h1>

        <p className="text-slate-500 mt-2">
          Sign in to your Port Management account
        </p>
      </div>

      <form className="space-y-5">

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="text-right">
          <a
            href="/forgot-password"
            className="text-sm text-cyan-600 hover:underline"
          >
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition"
        >
          Sign In
        </button>

      </form>

      <p className="text-center text-sm text-slate-500 mt-6">
        Don't have an account?{" "}
        <a href="/register" className="text-cyan-600 font-semibold">
          Register
        </a>
      </p>

    </div>
    )
}