import Navbar from "@/components/Navbar";
import { signIn } from "next-auth/react";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="shadow-lg p-8 w-[400px] bg-white rounded-lg">
          <div className="rounded-md py-2 px-3 bg-yellow-100 hover:bg-green-200 cursor-pointer">
            <p
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/",
                })
              }
              className="text-center font-semibold"
            >
              Login with Github
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
