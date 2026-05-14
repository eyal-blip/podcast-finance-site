import type { Metadata } from 'next'
import PostsClient from './PostsClient'

export const metadata: Metadata = {
  title: 'פוסטים | podcast.finance',
  description: '144+ פוסטים מקוריים של מומחי פיננסים ניהול הון פרטי',
}

export default function PostsPage() {
  return <PostsClient />
}
