
export interface IPost {
  id: string
  i18n: {
    [key in 'en' | 'de' | string]: {
      title: string
      content: string
    }
  }
}

export interface IPageContext {
  language: string
  intl: {
    defaultLanguage: string
    language: string
    languages: string[]
  }
}
