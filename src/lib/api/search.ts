import { SearchReturn } from '@/app/api/search/route'

export const DEFAULT_RESULT_SEARCH = {
  users: [],
  articles: [],
} as SearchReturn

export const fetchSearch = async (needle: string) => {
  if (needle === '') return;

  try {
    const res = await fetch(`http://localhost:3000/api/search?needle=${needle}`)
    return res.json() as Promise<SearchReturn>
  } catch (err: any) {
    console.log('Woops')
    return;
  }
}
