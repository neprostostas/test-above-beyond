import s from '../Footer/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link';
import logoFooter from '../../../public/main/logoFooter.png'

import phone from '../../../public/footer/phone.png'
import mail from '../../../public/footer/mail.png'
import location from '../../../public/footer/location.png'
import inst from '../../../public/footer/inst.png'
import time from '../../../public/footer/time.png'

export default function Footer() {

    return (
        <footer>

            <div className={s.footer}>

                <div className={s.footerLogoWrapper}>
                    <Link href={'/'}><a><Image src={logoFooter} alt='logoFooter' /></a></Link>
                </div>

                <div className={s.wrapperInfoBlock}>

                    <div className={s.infoBlock}>
                        <Link href='tel:437-984-4402'><a><Image src={phone} alt='phone' /></a></Link>
                        <Link href='tel:437-984-4402'><a>437-984-4402</a></Link>  
                    </div>

                    <div className={s.infoBlock}>
                        <Link href='mailto:info@theaboveandbeyond.ca'><a><Image src={mail} alt='mail' /></a></Link>
                        <Link href='mailto:info@theaboveandbeyond.ca'><a>info@theaboveandbeyond.ca</a></Link> 
                    </div>
                    
                    <div className={s.infoBlock}>
                        <Link href='https://goo.gl/maps/wgpJnJNZtepuwUBW7'><a><Image src={location} alt='location' /></a></Link>
                        <Link href='https://goo.gl/maps/wgpJnJNZtepuwUBW7'><a>2688 Bloor St W Etobicoke, ON M8X 1A5</a></Link> 
                    </div>

                    <div className={s.infoBlock}>
                        <Link href='https://www.instagram.com/aboveandbeyondrmt/'><a><Image src={inst} alt='inst' /></a></Link>
                        <Link href='https://www.instagram.com/aboveandbeyondrmt/'><a>above_beyond_ca</a></Link>
                    </div>

                    <div className={s.infoBlock}>
                        <Image src={time} alt='time' />
                        <p>
                        MON - FRI: 7 AM - 7 PM
                        SAT: 8 AM - 5 PM 
                        SUN: CLOSED
                        </p>
                    </div>

                </div>

            </div>

        </footer>
    )
}