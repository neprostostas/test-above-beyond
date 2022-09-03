import Head from 'next/head'
import React from 'react'
import MainLayout from '../components/MainLayout/MainLayout';
import s from '../components/MainLayout/MainLayout.module.css';
import Slider from '../components/Slider/Slider';
import TopBlock from '../components/TopBlock/TopBlock.tsx';
import TextBlock from '../components/TextBlock/TextBlock';
import Cards from '../components/Cards/Cards';

import house from '../public/main/house.png';

export default function index() {

  const data = {
    textMain: 'Make your living space bigger and better',
    photo: house
  }

  return (
    <MainLayout className={s.container}>

      <Head>
        <title>
          ABOVE BEYOND
        </title>
      </Head>

      <TopBlock data={data}/>
      <TextBlock/>

      <Cards/>

      <div className={s.ourProject}>
        <p>OUR PROJECTS</p>
      </div>

      <div className={s.carouselWrapper}>
        <Slider />
      </div>


    </MainLayout >
  )

}