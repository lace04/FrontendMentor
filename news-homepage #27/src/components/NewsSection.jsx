import React from 'react';
import NewArticle from './NewArticle';

function NewsSection() {
  return (
    <aside className='bg-veryDarkBlue  text-offWhite py-7 px-5 min-h-[512px] mb-[40px]'>
      <h1 className='text-softOrange text-4xl font-bold'>New</h1>
      <NewArticle
        title='Hydrogen VS Electric Cars'
        description='Will hydrogen-fueled cars ever catch up to EVs?'
      />
      <NewArticle
        title='The Downsides of AI Artistry'
        description='What are the possible adverse effects of on-demand AI image generation?'
      />
      <NewArticle
        title='Is VC Funding Drying Up?'
        description='Private funding by VC firms is down 50% YOY. We take a look at what that means.'
      />
    </aside>
  );
}

export default NewsSection;

/* Hydrogen VS Electric Cars
  Will hydrogen-fueled cars ever catch up to EVs?

  The Downsides of AI Artistry
  What are the possible adverse effects of on-demand AI image generation?

  Is VC Funding Drying Up?
  Private funding by VC firms is down 50% YOY. We take a look at what that means. */
