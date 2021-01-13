import { changeLocale, Link } from 'gatsby-plugin-intl'
import React from 'react'
import useNavbarLinks from '../queries/useNavbarLinks'
import { IPageContext } from '../types/common'

interface IProps {
  pageContext: IPageContext
}

const Layout: React.FC<IProps> = ({ children, pageContext: { language: currentLanguage, intl } }) => {
  const linksData = useNavbarLinks()

  const languageButtons = intl.languages.map(language => {
    const isCurrentLang = currentLanguage === language

    return (
      <span key={language} onClick={() => changeLocale(language)} style={{ cursor: 'pointer', marginRight: 10, color: isCurrentLang ? 'lightgrey' : 'black' }}>
        {language}
      </span>
    )
  })

  const links = linksData.map(link => (
    <div key={link.url}>
      <Link to={link.url}>{link.i18n[currentLanguage].title}</Link>
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
