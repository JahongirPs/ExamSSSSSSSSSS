import React from 'react'
import Nav from '../../componets/navbar/Navbar'
import { Banner } from '../../componets/banner/Banner'
import CardCarusel from '../../componets/caruosle/Carousel'

const Home = () => {
  return (
    <>
       <Nav/>
       <Banner/>
       <CardCarusel/>
    </>
    )
}

export default Home