import React from 'react'
import Head from 'next/head';
import MainLayout from '../components/MainLayout/MainLayout';
import TopBlock from '../components/TopBlock/TopBlock.tsx';

import house from '../public/main/house.png';

export default function Services() {

    const data = {
        textMain: 'Services',
        photo: house
      }

    return <MainLayout>
        <Head>
            <title>
                Services
            </title>
        </Head>

        <TopBlock data={data}/>

    </MainLayout>
}