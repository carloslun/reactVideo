import React from 'react'
import Header from '../components/Header'
import '../assets/styles/App.scss'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useState } from 'react'
import useInitialState from '../hooks/useInitialState'


const API = 'http://localhost:3000/initialState'


const Home = () => {
   

    const initialState = useInitialState(API)

    return (
        <div className="App">
            <Header />
            <Search />
            {initialState.mylist.lenght > 0 &&
                <Categories title='Mi lista'>
                    <Carousel>
                        <CarouselItem>
                        </CarouselItem>
                    </Carousel>
                </Categories>
            }


            <Categories title='Tendencias'>
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key = {item.id}{...item} />
                        
                    )}



                </Carousel>
            </Categories>

            <Categories title='Originales '>
                <Carousel>
                    <CarouselItem>
                    </CarouselItem>
                    <CarouselItem>
                    </CarouselItem>
                    <CarouselItem>
                    </CarouselItem>
                </Carousel>
            </Categories>

            <Footer />



        </div>
    )
}

export default Home
