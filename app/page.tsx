import React from 'react'
import { categories } from '@/constants';
import fetchNews from '@/lib/fetchNews';
import NewsList from './NewsList';
import response from '../response.json'

async function HomePage() {

  const news: NewsResponse = await fetchNews(categories.join(',')); //response // await fetchNews(categories.join(','));

  console.log(news)

  return (
    <div>
        <NewsList news={news} />
    </div>
  )
}

export default HomePage