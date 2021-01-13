import React from 'react'
import { IPageContext, IPost } from '../types/common'
import { Helmet } from 'react-helmet'

import './post.sass'

interface IProps {
  pageContext: IPageContext & {
    post: IPost
  }
}

const Post: React.FC<IProps> = ({ pageContext: { post, language } }) => {
  const postI18n = post.i18n[language]

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
