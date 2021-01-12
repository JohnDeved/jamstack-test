
export interface IPost {
  id: string
  i18n: {
    [key in 'en' | 'de' | string]: {
      title: string
      content: string
    }
  }
}