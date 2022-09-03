import React from 'react'
import s from '../Cards/Cards.module.css'
import Card from './Card/Card.tsx'

import card1 from '../../public/main/card1.png';
import card2 from '../../public/main/card2.png';
import card3 from '../../public/main/card3.png';
import card4 from '../../public/main/card4.png';

export default function Cards() {

    const data = {
      info1: {
        id: 1,
        title: "Waterprofing",
        text: "We have a wealth experience on all kinds of waterprofing services",
        img: card1,
      },
      info2: {
        id: 2,
        title: "Underpinning",
        text: "We have a wealth experience on all kinds of waterprofing services",
        img: card2,
      },
      info3: {
        id: 3,
        title: "Concrete Works",
        text: "We have a wealth experience on all kinds of waterprofing services",
        img: card3,
      },
      info4: {
        id: 4,
        title: "More Services",
        text: "We have a wealth experience on all kinds of waterprofing services",
        img: card4,
      }
    }

    return (
        <div className={s.cardsWrapper}>

          <div className={s.featuredServices}>
            <p>FEATURED SERVICES</p>
          </div>

          <div className={s.cardsWrapperGrid}>
            <Card data={data.info1}/>
            <Card data={data.info2}/>
            <Card data={data.info3}/>
            <Card data={data.info4}/>
          </div>

        </div>  
    )
}