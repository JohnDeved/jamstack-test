import React, { useContext } from 'react'
import { IntlContext } from 'gatsby-plugin-intl'
import { IPost } from '../types/common'
import { Helmet } from 'react-helmet'

import './post.sass'

interface IProps {
  pageContext: {
    post: IPost
  }
}

const Post: React.FC<IProps> = ({ pageContext: { post } }) => {
  const intl = useContext(IntlContext)
  const postI18n = post.i18n[intl.locale]

  return (
    <div>
      <Helmet>
        <title>{postI18n.title}</title>
      </Helmet>

      <h1>{postI18n.title}</h1>
      <div>{postI18n.content}</div>
    </div>
  )
}

export default Post
