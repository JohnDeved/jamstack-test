import { Link } from 'gatsby-plugin-intl'
import React from 'react'
import { Helmet } from 'react-helmet'
import { IPageContext, IPost } from '../types/common'

import './index.sass'

interface IProps {
  pageContext: IPageContext & {
    posts: IPost[]
  }
}

const IndexPage: React.FC<IProps> = ({ pageContext: { posts, language } }) => {
  const postsLinks = posts.map(post => (
    <div key={post.id}>
      <Link to={`/post/${post.id}/`}>{post.i18n[language].title}</Link>
    </div>
  ))

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <h1>gatsby test</h1>

      {postsLinks}
    </div>
  )
}

export default IndexPage
