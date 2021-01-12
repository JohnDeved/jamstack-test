import { GatsbyNode } from 'gatsby'
import fetch from 'node-fetch'
import { IPost } from './src/types/common'

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage } }) => {
  const res = await fetch('http://localhost:3003/posts')
  const posts: IPost[] = await res.json()

  console.log(posts)

  posts.forEach(post => {
    createPage({
      path: `/post/${post.id}/`,
      component: require.resolve('./src/templates/post.tsx'),
      context: { post }
    })
  })

  createPage({
    path: '/',
    component: require.resolve('./src/templates/index.tsx'),
    context: { posts }
  })
}
