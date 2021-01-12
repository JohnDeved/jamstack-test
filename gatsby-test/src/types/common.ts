
export interface IPost {
  id: string
  i18n: {
    [key in 'en' | 'de' | string]: {
      title: string
      content: string
    }
  }
}

export interface ILink {
  url: string
  i18n: {
    [key in 'en' | 'de' | string]: {
      title: string
    }
  }
}

export interface ILinkQuery {
  allLinks: {
    nodes: ILink[]
  }
}
