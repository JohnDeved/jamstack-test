import { graphql, useStaticQuery } from 'gatsby'

export interface ILink {
  url: string
  title: string
  language: string
}

interface ILinkQuery {
  allLinks: {
    nodes: ILink[]
  }
}

export default function useNavbarLinks (language: string) {
  const data = useStaticQuery<ILinkQuery>(graphql`
    query ($language: String) {
      allLinks(filter: {language: {eq: $language}}) {
        nodes {
          url
          title
          language
        }
      }
    }
  `)

  console.log(data) // still returns all data?

  const { allLinks: { nodes: links } } = data
  return links.filter(link => link.language === language) // filter with js for now
}
