import { graphql, useStaticQuery } from 'gatsby'

export interface ILink {
  url: string
  i18n: {
    [key in 'en' | 'de' | string]: {
      title: string
    }
  }
}

interface ILinkQuery {
  allLinks: {
    nodes: ILink[]
  }
}

export default function useNavbarLinks () {
  const data = useStaticQuery<ILinkQuery>(graphql`
    query {
      allLinks {
        nodes {
          i18n {
            de {
              title
            }
            en {
              title
            }
          }
          url
        }
      }
    }
  `)

  const { allLinks: { nodes: links } } = data
  return links
}
