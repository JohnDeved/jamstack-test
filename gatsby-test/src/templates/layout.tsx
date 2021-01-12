import { graphql, useStaticQuery } from 'gatsby'
import { changeLocale, IntlContext, IntlContextConsumer, Link } from 'gatsby-plugin-intl'
import React from 'react'
import { ILinkQuery } from '../types/common'

const Layout: React.FC = ({ children }) => {
  const intl = React.useContext(IntlContext)
  const { allLinks: { nodes: linksData } }: ILinkQuery = useStaticQuery(graphql`
    query {
      allLinks {
        nodes {
          url
          i18n {
            en {
              title
            }
            de {
              title
            }
          }
        }
      }
    }
  `)

  const languageButtons = <IntlContextConsumer children={({ languages, language: currentLocale }) => {
    return languages.map(language => {
      const isCurrentLang = currentLocale === language

      return (
        <span
          key={language}
          onClick={() => changeLocale(language)}
          style={{ cursor: 'pointer', marginRight: 10, color: isCurrentLang ? 'lightgrey' : 'black' }}
        >
          {language}
        </span>
      )
    })
  }}/>

  const links = linksData.map(link => (
    <div key={link.url}>
      <Link to={link.url}>{link.i18n[intl.locale].title}</Link>
    </div>
  ))

  return (
    <div>
      <nav>
        <div>
          {links}
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
