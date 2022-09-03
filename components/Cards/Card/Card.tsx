import React from 'react'
import s from '../Card/Card.module.css'
import Image from 'next/image';

import arrowRight from '../../../public/main/arrow-right.png'

interface cardProps {
  title: string;
  text: string;
  img: string;
  id: number;
}

interface Props {
  data: cardProps
}

export default function Card({ data }: Props) {

    return (
        <div className={s.cardWrapper}>

          <h1>{data.title}</h1>
          <p>{data.text}</p>

          <div className={s.cardImage}>
            <Image src={data.img} width={65} height={60} alt={`card-` + data.id} />
          </div>

          <Image src={arrowRight} width={27} height={27} alt='arrow-right' />

        </div>  
    )
}
