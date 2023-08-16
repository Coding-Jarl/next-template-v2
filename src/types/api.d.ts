declare global {
  namespace API {
    type SearchReturn = {
      users: Array<{
        id: number
        name: string
      }>
      articles: Array<{
        id: number
        title: string
        content: string
      }>
    }
  }
}
export {}
