// Write your code here

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgClassname = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const aboutImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClassname = isDarkTheme
        ? 'about-text-light'
        : 'about-text-light'

      return (
        <div className={`about-app-container ${aboutBgClassname}`}>
          <Navbar />
          <div className="about-page-container">
            <div className="about-container">
              <img className="about-image" src={aboutImageURL} alt="about" />
              <h1 className={`about-heading ${aboutTextClassname}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
