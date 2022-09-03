import React from 'react'
import Head from 'next/head';
import MainLayout from '../components/MainLayout/MainLayout';
import TopBlock from '../components/TopBlock/TopBlock.tsx';

import house from '../public/main/house.png';

export default function AboutUs() {

    const data = {
        textMain: 'About Us',
        photo: house
      }
    
    return <MainLayout>
        <Head>
            <title>
            About Us
            </title>
        </Head>
        
        <TopBlock data={data} />

    </MainLayout>
}