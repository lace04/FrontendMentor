import React from 'react';
import Header from './components/header';
import MainArticle from './components/MainArticle';
import NewsSection from './components/NewsSection';
import ArticlesSection from './components/ArticlesSection';

function HomePage() {
  return (
    <main className='px-4 lg:px-[165px] lg:py-[100px]'>
      <Header />
      <div className='xl:flex xl:gap-8'>
        <MainArticle />
        <NewsSection />
      </div>
      <ArticlesSection />
    </main>
  );
}

export default HomePage;
