import { changeLocale, IntlContextConsumer, Link } from 'gatsby-plugin-intl'
import React from 'react'

const Layout: React.FC = ({ children }) => {
  const languageButtons = <IntlContextConsumer children={({ languages, language: currentLocale }) => {
    return languages.map(language => {
      const isCurrentLang = currentLocale === language

      return <span
        key={language}
        onClick={() => changeLocale(language)}
        style={{ cursor: 'pointer', marginRight: 10, color: isCurrentLang ? 'lightgrey' : 'black' }}
      >
        {language}
      </span>
    })
  }}/>

  return (
    <div>
      <nav>
        <div>
          <Link to="/">
            navbar
          </Link>
        </div>
        <div>
          {languageButtons}
        </div>
      </nav>

      {children}
    </div>
  )
}

export default Layout
