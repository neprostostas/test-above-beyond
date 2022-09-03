import s from '../Header/Header.module.css'
import Image from 'next/image'
import logo from '../../../public/main/logo.png'
import phone from '../../../public/main/phone.png'
import Link from 'next/link';

export default function Header() {

    return (
        <header className={s.customHeader}>

                <nav className={s.customNav}>

                    <Link href={'/'}><a><Image src={logo} alt='logo' /></a></Link>

                    <div className={s.lastPartHeader}>

                        <div className={s.phoneBlock}>
                        <Link href='tel:437-984-4402'><a><Image src={phone} alt='phone' /></a></Link>
                          <Link href='tel:437-984-4402'><a>437-984-4402</a></Link>  
                        </div>
                    
                        <Link href={'/'}><a className={s.links}>Home</a></Link>
                        <Link href={'/services'}><a className={s.links}>Services</a></Link>
                        <Link href={'/about-us'}><a className={s.links}>About Us</a></Link>
                        <Link href={'/gallery'}><a className={s.links}>Gallery</a></Link>
                        <Link href={'/contact-us'}><a className={s.links}>Contact Us</a></Link>
                    </div>

                    <div className={s.phoneBlock2}>
                        <Link href='tel:437-984-4402'><a><Image src={phone} alt='phone' /></a></Link>
                          <Link href='tel:437-984-4402'><a>437-984-4402</a></Link>  
                        </div>

                    <label className={s.burgerLabel}>
                        <input type="checkbox" className={s.inputCustom} />
                        <span className={s.menu}> <span className={s.hamburger}></span> </span>
                        <ul className={s.customUl}>
                            <Link href={'/'}><a className={s.customA} href="#">Home</a></Link>
                            <Link href={'/services'}><a className={s.customA} href="#">Services</a></Link>
                            <Link href={'/about-us'}><a className={s.customA} href="#">About Us</a></Link>
                            <Link href={'/gallery'}><a className={s.customA} href="#">Gallery</a></Link>
                            <Link href={'/contact-us'}><a className={s.customA} href="#">Contact Us</a></Link>

                        </ul>
                    </label>
                </nav>

            </header>
    )
}