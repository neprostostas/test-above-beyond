import s from '../MainLayout/MainLayout.module.css'
import Header from './Header/Header'
import Footer from './Footer/Footer';

export default function MainLayout({ children }) {

    return (
        <div className={s.wrapper}>

            <Header/>
            
            <main className={s.customMain}>
                {children}
            </main>

            <Footer/>

        </div>
    )
}
