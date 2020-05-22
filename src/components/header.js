import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Hero } from "./hero"
import { Navigation, MobileNavigation } from "./navigation"

const Header = ({ siteTitle }) => {
  const [menuStatus, setMenuStatus] = React.useState(false)

  return (
    <header>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto ">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <Navigation
              onBurgerMenuClick={() => setMenuStatus(!menuStatus)}
              status={menuStatus}
            />
            <MobileNavigation
              status={menuStatus}
              onClose={() => setMenuStatus(false)}
            />
            <Hero />
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
