import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Hero } from "./hero"
import { Navigation, MobileNavigation } from "./navigation"
import { PreRelease } from "./pre-release"

const Header = ({ siteTitle }) => {
  const [menuStatus, setMenuStatus] = React.useState(false)

  return (
    <header>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto ">
          <div className="relative z-10 pb-4 bg-white sm:pb8 md:pb-10 lg:max-w-2xl lg:w-full lg:pb-14 xl:pb-16">
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
          </div>
        </div>
        <PreRelease />
        <Hero />
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
