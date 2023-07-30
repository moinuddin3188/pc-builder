import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="navbar bg-yellow-50 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Categories</a>
              <ul className="p-2 w-[165px] z-40">
                <li>
                  <Link href={`/category/CPU or Processor`}>
                    CPU / Processor
                  </Link>
                </li>
                <li>
                  <Link href={`/category/Motherboard`}>Motherboard</Link>
                </li>
                <li>
                  <Link href={`/category/RAM`}>RAM</Link>
                </li>
                <li>
                  <Link href={`/category/Power Supply Unit`}>
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href={`/category/Storage Device`}>Storage Device</Link>
                </li>
                <li>
                  <Link href={`/category/Monitor`}>Monitor</Link>
                </li>
                <li>
                  <Link href={`/category/Others`}>Others</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          PC Builder
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary className="font-semibold">Categories</summary>
              <ul className="p-2 w-[165px] z-40">
                <li>
                  <Link href={`/category/CPU or Processor`}>
                    CPU / Processor
                  </Link>
                </li>
                <li>
                  <Link href={`/category/Motherboard`}>Motherboard</Link>
                </li>
                <li>
                  <Link href={`/category/RAM`}>RAM</Link>
                </li>
                <li>
                  <Link href={`/category/Power Supply Unit`}>
                    Power Supply Unit
                  </Link>
                </li>
                <li>
                  <Link href={`/category/Storage Device`}>Storage Device</Link>
                </li>
                <li>
                  <Link href={`/category/Monitor`}>Monitor</Link>
                </li>
                <li>
                  <Link href={`/category/Others`}>Others</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {session && (
          <Link href={"/buildPC"} className="btn bg-blue-200 mr-2">
            PC Builder
          </Link>
        )}
        {session ? (
          <a onClick={() => signOut()} className="btn bg-blue-200">
            Logout
          </a>
        ) : (
          <Link href={"/login"} className="btn bg-blue-200">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
