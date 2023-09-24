import creditStyle from './credits.module.scss'
import Link from 'next/link'

export default function Credits () {
    return (
        <section className={creditStyle.creditSection}>
            <div className={creditStyle.Loading}></div>
            <div className={creditStyle.creditDiv}>
                <p>Challenged by <Link href="https://www.frontendmentor.io/" target='_blank'>Frontendmentor</Link>. Coded by <Link href="https://www.frontendmentor.io/profile/sirbiel100/" target='_blank'>Crispim.</Link>😁
                </p>
            </div>
        </section>
    )
} 