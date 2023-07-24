import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const needle = searchParams.get('needle')?.toLowerCase() || ''

  const data = {
    users: [
      {
        id: 1,
        name: 'ValhallaCode',
      },
      {
        id: 2,
        name: 'Forthtilliath',
      },
      {
        id: 3,
        name: 'Fluttershy',
      },
    ],
    articles: [
      {
        id: 1,
        title: 'Hello world',
        content: 'All ur base are belong to us',
      },
      {
        id: 2,
        title: 'Friendship is Magic',
        content:
          'Rarity, Applejack, Pinkie Pie, Fluttershy, Ywilight Sparkle, Rainbow Dash',
      },
    ],
  }

  const response = {
    users: data.users.filter((user) =>
      user.name.toLowerCase().includes(needle)
    ),
    articles: data.articles.filter(
      (article) =>
        article.title.toLowerCase().includes(needle) ||
        article.content.toLowerCase().includes(needle)
    ),
  }

  return NextResponse.json(response)
}
