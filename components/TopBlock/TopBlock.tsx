import React from 'react'
import s from '../TopBlock/TopBlock.module.css'
import Image from 'next/image'

interface infoProps {
  textMain: string;
  photo: string;
}

interface Props {
  data: infoProps
}

export default function TopBlock({ data }: Props) {

    return (
        <div className={s.widthWrapper}>
        <Image src={data.photo} width={390} height={282} layout="responsive" alt='house' />
        <div className={s.blueFilter}>
          <div className={s.mediaFilter}>
            <p className={s.textFilter}>{data.textMain}</p>
            <button className={s.buttonFilter}>Get a Quote</button>
          </div>
        </div>
      </div>  
    )
}
