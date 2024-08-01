import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-center mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/newspaper.png" className="h-8" alt="NewsSpotlight Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NewsSpotlight</span>
          </Link>
        </div>
      </nav>
      <nav className="bg-gray-50 sticky inset-x-0 top-0 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex flex-wrap justify-center">
            <ul className="flex flex-wrap justify-center flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <Link to="/world" className="text-gray-900 dark:text-white hover:underline">World</Link>
              </li>
              <li>
                <Link to="/nation" className="text-gray-900 dark:text-white hover:underline">Nation</Link>
              </li>
              <li>
                <Link to="/business" className="text-gray-900 dark:text-white hover:underline">Business</Link>
              </li>
              <li>
                <Link to="/technology" className="text-gray-900 dark:text-white hover:underline">Technology</Link>
              </li>
              <li>
                <Link to="/entertainment" className="text-gray-900 dark:text-white hover:underline">Entertainment</Link>
              </li>
              <li>
                <Link to="/sports" className="text-gray-900 dark:text-white hover:underline">Sports</Link>
              </li>
              <li>
                <Link to="/science" className="text-gray-900 dark:text-white hover:underline">Science</Link>
              </li>
              <li>
                <Link to="/health" className="text-gray-900 dark:text-white hover:underline">Health</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar