"use client"

import Image from 'next/image';
import { useState } from 'react';
import formStyle from './form.module.scss';
import SucessImage from '../public/icon-complete.svg'

export default function Form({ cardName, cardNumber, month, year, cvc, }) {

    /* Passar os valores dos inputs para o cartão */

    const [inputNameValue, setNameValue] = useState('');
    const [inputCardNumberValue, setCardNumberValue] = useState('');
    const [inputMonthValue, setMonthValue] = useState('');
    const [inputYearValue, setYearValue] = useState('');
    const [inputCvcValue, setCvcValue] = useState('');

    /* CARD NAME */

    const handleCardNameChange = (e) => {
        const newNameValue = e.target.value;

        if (inputNameValue.length >= 20) { // Limita a quantidade de caracteres para 20
            setNameValue(newNameValue.slice(0, 20))
            cardName(newNameValue.slice(0, 20))
        } else {
            setNameValue(newNameValue);
            cardName(newNameValue); // Chama a função de callback com o novo valor
        }
        inputNameValue === '' ? setIsNameValid(false) : setIsNameValid(true)
    };

    /* CARD NUMBER */

    const handleCardNumberChange = (e) => {
        const newCardNumberValue = e.target.value;

        if (inputCardNumberValue.length >= 16) { // Limita a quantidade de caracteres para 16
            setCardNumberValue(newCardNumberValue.slice(0, 16))
            cardNumber(newCardNumberValue.slice(0, 16))
        } else {
            setCardNumberValue(newCardNumberValue);
            cardNumber(newCardNumberValue); // Chama a função de callback com o novo valor
        }
        inputCardNumberValue === '' || inputCardNumberValue.length < 16 ? setIsCardNumberValid(false) : setIsCardNumberValid(true)
    };

    /* MONTH */

    const handleMonthChange = (e) => {
        const newMonthValue = e.target.value;

        if (inputMonthValue.length >= 2) { // Limita a quantidade de caracteres para 2
            setMonthValue(newMonthValue.slice(0, 2))
            month(newMonthValue.slice(0, 2))
            setIsMonthValid(true)
        } else {
            setMonthValue(newMonthValue);
            month(newMonthValue); // Chama a função de callback com o novo valor
            setIsMonthValid(false)
        }
        inputMonthValue === '' || inputMonthValue.length !== 1 ? setIsMonthValid(false) : setIsMonthValid(true)
    };

    /* YEAR */

    const handleYearChange = (e) => {
        const newYearValue = e.target.value;

        if (inputYearValue.length >= 2) { // Limita a quantidade de caracteres para 2
            setYearValue(newYearValue.slice(0, 2))
            year(newYearValue.slice(0, 2))
        } else {
            setYearValue(newYearValue);
            year(newYearValue); // Chama a função de callback com o novo valor
        }
        inputYearValue === '' || inputYearValue.length !== 1 ? setIsYearValid(false) : setIsYearValid(true)
    };

    /* CVC */

    const handleCvcChange = (e) => {
        const newCvcValue = e.target.value;

        if (inputCvcValue.length >= 3) { // Limita a quantidade de caracteres para 3
            setCvcValue(newCvcValue.slice(0, 3))
            cvc(newCvcValue.slice(0, 3))
        } else {
            setCvcValue(newCvcValue);
            cvc(newCvcValue); // Chama a função de callback com o novo valor
        }
        inputCvcValue === '' || inputCvcValue.length !== 2 ? setIsCvcValid(false) : setIsCvcValid(true)
    };

    /* Input validates */

    const [isNameValid, setIsNameValid] = useState(false);
    const [isCardNumberValid, setIsCardNumberValid] = useState(false);
    const [isMonthValid, setIsMonthValid] = useState(false);
    const [isYearValid, setIsYearValid] = useState(false);
    const [isCvcValid, setIsCvcValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // inputNameValue === '' ? setIsNameValid(false) : setIsNameValid(true)
        // inputCardNumberValue === '' || inputCardNumberValue.length < 16 ? setIsCardNumberValid(false) : setIsCardNumberValid(true)
        // inputMonthValue === '' || inputMonthValue.length < 2 ? setIsMonthValid(false) : setIsMonthValid(true)
        // inputYearValue === '' || inputYearValue.length < 2 ? setIsYearValid(false) : setIsYearValid(true)
        // inputCvcValue === '' || inputCvcValue.length < 3 ? setIsCvcValid(false) : setIsCvcValid(true)

        if (isNameValid && isCardNumberValid && isMonthValid && isYearValid && isCvcValid) {
            setIsFormValid(true)
            e.target.reset()
        } else {
            setIsFormValid(false)
        }

    }

    /* Reset form */

    const resetForm = () => {
        setNameValue('');
        setCardNumberValue('');
        setMonthValue('');
        setYearValue('');
        setCvcValue('');
        setIsNameValid(false)
        setIsCardNumberValid(false)
        setIsMonthValid(false)
        setIsYearValid(false)
        setIsCvcValid(false)
        setIsFormValid(false)
    }


    return (
        <section className={formStyle.formSection} >
            {!isFormValid ?
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div>
                        <label htmlFor="name">CARDHOLDER NAME</label>
                        <input type="text" id="name"  placeholder="e.g. Jane Appleseed" value={inputNameValue} onChange={handleCardNameChange} />
                        <span style={{ opacity: isNameValid ? 0 : 1 }}>Can't be blank</span>
                        <label htmlFor="cardNumber">CARD NUMBER</label>
                        <input type="number" id="cardNumber" placeholder="e.g. 1234 5678 9123 0000" value={inputCardNumberValue} onChange={handleCardNumberChange} />
                        <span style={{ opacity: isCardNumberValid ? 0 : 1 }}>Invalid format</span>
                    </div>

                    <div>
                        <label htmlFor="month" >EXP. DATE (MM/YY)</label>
                        <span style={{ opacity: isMonthValid && isYearValid ? 0 : 1 }}>Invalid format</span>
                        <input type="number" id="month" placeholder="MM" min={1} max={12} value={inputMonthValue} onChange={handleMonthChange} />
                        <input type="number" id="year" placeholder="YY" min={24} value={inputYearValue} onChange={handleYearChange} />
                        <label htmlFor="cvc">CVC</label>
                        <input type="number" pattern='123456789' id="cvc" placeholder="e.g. 123" value={inputCvcValue} onChange={handleCvcChange} />
                        <span style={{ opacity: isCvcValid ? 0 : 1 }}>Invalid format</span>
                    </div>
                    <input type="submit" value="Confirm" />
                </form>
                :
                <div className={formStyle.SuccessMessage}>
                    <Image
                        src={SucessImage}
                        alt='Sucess'
                    />
                    <h1>THANK YOU!</h1>
                    <span>We've added your card details</span>
                    <button onClick={resetForm}>Continue</button>
                </div>
            }
        </section>
    )
}