import { changeLocale, IntlContextConsumer, Link } from 'gatsby-plugin-intl'
import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <nav>
        <div>
          <Link to="/">
            navbar
          </Link>
        </div>
        <div>
          <IntlContextConsumer>
            {({ languages, language: currentLocale }) =>
              languages.map(language => (
                <span
                  key={language}
                  onClick={() => changeLocale(language)}
                  style={{ cursor: 'pointer', marginRight: 10 }}
                >
                  {language}
                </span>
              ))
            }
          </IntlContextConsumer>
        </div>
      </nav>

      {children}
    </div>
  )
}

export default Layout
