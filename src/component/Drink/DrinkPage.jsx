import React from 'react'
import DrinkHero from './DrinkHero'
import FindPlace from './FindPlace';
import ResTuaRants from '../common/Resturantscard';
import DrinkCarousel from './DrinkCarousel';
import Maps from './Map';


function DrinkPage() {
  return (
    <>
    <DrinkHero />
    <FindPlace/>
    <ResTuaRants title="popular Resturants in lagos"/>
    <DrinkCarousel/>
    <ResTuaRants title="Resturants nearby" />
    <Maps/>
     
    </>
  )
}

export default DrinkPage;