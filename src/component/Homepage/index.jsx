import React from 'react'
import HeroAria from './HeroAria'
import ImageCardSection  from './ImgSection'
import  ChillsBay  from './Chillsbay'
import Carousels  from './Carousels'
import GALARYs  from './GALARY'
import ThingsCard from './ThingsCard'

function HomePages() {
  return (
    <>
      <HeroAria/>  
    <ImageCardSection />
    <ThingsCard />
    < ChillsBay />
    < Carousels />
    <GALARYs />
    </>
  );
};

export default  HomePages;