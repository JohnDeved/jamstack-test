import { GatsbyNode } from 'gatsby'
import fetch from 'node-fetch'
import { IPost } from './src/types/common'

export const createPages: GatsbyNode['createPages'] = async ({ actions: { createPage }, graphql }) => {
  // use this to replace fetch soon...
  const result = await graphql(`
    query {
      allLinks {
        group(field: language) {
          nodes {
            language
            url
          }
        }
      }
    }
  `)

  console.log(result)

  const posts = await fetch('http://localhost:3003/posts')
    .then<IPost[]>(data => data.json())

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
