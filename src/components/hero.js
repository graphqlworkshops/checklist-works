import React from "react"

export const Hero = () => {
  return (
    <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Checklists to succeed
          <br className="2xl:hidden" />
          <span className="text-indigo-600">in complexity</span>
        </h2>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Checklists prevents failure, human error.
          <br className="2xl:hidden" />
          NASA, the aviation industry, surgeons and many more praise this simple
          method to save time, money and lives.
        </p>
      </div>
    </div>
  )
}
