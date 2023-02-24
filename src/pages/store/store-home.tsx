import React from 'react'
import Banner from 'components/store/Banner'
import Services from 'components/store/Services'
import Categories from 'components/store/Categories'
import Footer from 'components/store/Footer'
export default function StoreHome() {
  return (
    <>
    <Banner/>
    <Services isLarge={0}/>
    <Categories/>

    </>
  )
}
