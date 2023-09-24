import cardStyle from './card.module.scss'
import { useState, useEffect } from 'react';
import { Space_Grotesk } from 'next/font/google'

const space = Space_Grotesk({
    weight: '500',
    subsets: ['latin'],
})

export default function Card({ onCardName, onCardNumber, onCardMonth, onCardYear, onCardCvc }) {

    const [displayCardName, setDisplayCardName] = useState('');
    const [displayCardNumber, setDisplayCardNumber] = useState('');
    const [displayCardMonth, setDisplayCardMonth] = useState('');
    const [displayCardYear, setDisplayCardYear] = useState('');
    const [displayCVC, setDisplayCVC] = useState('');

    useEffect(() => {
        setDisplayCardName(onCardName);
        setDisplayCardNumber(onCardNumber);
        setDisplayCardMonth(onCardMonth);
        setDisplayCardYear(onCardYear);
        setDisplayCVC(onCardCvc);
    }, [onCardName, onCardNumber, onCardMonth, onCardYear, onCardCvc]);

    function addWhiteSpaceEvery4Letters(inputString) {
        var result = '';
        for (var i = 0; i < inputString.length; i++) {
            result += inputString[i];
            if ((i + 1) % 4 === 0) {
                result += ' ';
            }
        }
        return result;
    };

    const formattedCardNumber = addWhiteSpaceEvery4Letters(displayCardNumber)

    return (
        <section className={cardStyle.cardSection}>


            <header className={space.className}>
                {displayCVC === '' ?
                    <p>123</p>
                    :
                    <p>{displayCVC}</p>
                }
            </header>

            <main className={space.className}>
                <div></div>
                <div></div>
                {displayCardNumber === '' ?
                    <span>0000 0000 0000 0000</span>
                    :
                    <span>{formattedCardNumber}</span>
                }

                <div>
                    {displayCardName === '' ?
                        <p>JANE APPLESEED</p>
                        :
                        <p>{displayCardName}</p>
                    }

                    <p>
                        {displayCardMonth === '' ?
                            <span>00</span>
                            :
                            <span>{displayCardMonth}</span>
                        }
                        /
                        {displayCardYear === '' ?
                            <span> 00</span>
                            :
                            <span> {displayCardYear}</span>
                        }
                    </p>
                </div>

            </main>

        </section>
    )

}