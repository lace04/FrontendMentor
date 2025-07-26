import React from 'react';
import Article from './Article';
import imgArticle1 from '../assets/images/image-retro-pcs.jpg';
import imgArticle2 from '../assets/images/image-top-laptops.jpg';
import imgArticle3 from '../assets/images/image-gaming-growth.jpg';

function ArticlesSection() {
  return (
    <section className='xl:flex'>
      <Article
        image={imgArticle1}
        number={'01'}
        title={'Reviving Retro PCs'}
        description={'What happens when old PCs are given modern upgrades?'}
      />
      <Article
        image={imgArticle2}
        number={'02'}
        title={'Top 10 Laptops of 2022'}
        description={'Our best picks for various needs and budgets.'}
      />
      <Article
        image={imgArticle3}
        number={'03'}
        title={'The Growth of Gaming'}
        description={'How the pandemic has sparked fresh opportunities.'}
      />
    </section>
  );
}

export default ArticlesSection;

/*
01
  Reviving Retro PCs
  What happens when old PCs are given modern upgrades?

  02
  Top 10 Laptops of 2022
  Our best picks for various needs and budgets.

  03
  The Growth of Gaming
  How the pandemic has sparked fresh opportunities.
  */
