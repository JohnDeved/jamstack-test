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
  allLinksJson: {
    nodes: ILink[]
  }
}

export default function useNavbarLinks () {
  // const data = useStaticQuery<ILinkQuery>(graphql`
  //   query {
  //     allLinks {
  //       nodes {
  //         url
  //         i18n {
  //           en {
  //             title
  //           }
  //           de {
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // const { allLinksJson: { nodes: links } } = data
  // return links
  return [] as ILink[]
}
