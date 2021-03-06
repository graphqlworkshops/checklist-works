import React from "react"
import Logo from "../images/logo.svg"

export const Navigation = ({ onBurgerMenuClick, status }) => {
  return (
    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
            </a>
            <div
              className="-mr-2 flex items-center md:hidden"
              data-menu-status={status ? "closed" : "opened"}
            >
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out z-10"
                onClick={onBurgerMenuClick}
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4">
          <a
            href="#"
            className="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >
            Home
          </a>
          <a
            href="#"
            className="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >
            Checklists
          </a>
          <a
            href="#"
            className="ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >
            About
          </a>
        </div>
      </nav>
    </div>
  )
}

export const MobileNavigation = ({ status, onClose }) => {
  return (
    <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div
        className="rounded-lg shadow-md"
        data-menu-status={status ? "opened" : "closed"}
      >
        <div className="rounded-lg bg-white shadow-xs overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="/img/logos/workflow-mark-on-white.svg"
                alt=""
              />
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                onClick={onClose}
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-2 pt-2 pb-3">
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              Checklists
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
