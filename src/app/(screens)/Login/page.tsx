"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function validate() {
    if (email === "" || password === "") {
      setError("Email and Password cannot be empty");
      return false;
    }
    if (email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
      setError("Invalid Email");
      return false;
    }
    if (password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setError("Invalid Password");
      return false;
    }

    return true;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/Admin");
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login - Unit Converter</title>
        <meta
          name="description"
          content="Login to access admin dashboard for Unit Converter website."
        />
      </Head>

      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            src="https://www.svgrepo.com/show/301692/login.svg"
            alt="Login page illustration"
            width={40}
            height={40}
            className="mx-auto"
          />
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setError("");
                      setEmail(e.target.value);
                    }}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => {
                      setError("");
                      setPassword(e.target.value);
                    }}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-600 font-semibold text-center mt-4">
                  {error}
                </p>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
