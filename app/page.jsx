"use client"

import { useState } from 'react'
import styles from './page.module.scss'
import Card from './card'
import Form from './form'
import Credits from './credits'

export default function Home() {

  const [nameText, setNameText] = useState('');
  const [numberText, setNumberText] = useState('');
  const [monthText, setMonthText] = useState('');
  const [yearText, setYearText] = useState('');
  const [CVCtext, setCVCText] = useState('');

  const handleNameChange = (newNameValue) => {
    setNameText(newNameValue); // Atualiza o estado com o novo valor do input
  };
  const handleNumberChange = (newNumberValue) => {
    setNumberText(newNumberValue)


  };
  const handleMonthChange = (newMonthValue) => {
    setMonthText(newMonthValue); // Atualiza o estado com o novo valor do input
  };
  const handleYearChange = (newYearValue) => {
    setYearText(newYearValue); // Atualiza o estado com o novo valor do input
  };
  const handleCvcChange = (newCvcValue) => {
    setCVCText(newCvcValue); // Atualiza o estado com o novo valor do input
  };

  return (
    <main className={styles.main}>
      <Card
        onCardName={nameText}
        onCardNumber={numberText}
        onCardMonth={monthText}
        onCardYear={yearText}
        onCardCvc={CVCtext}
      />
      <Form
        cardName={handleNameChange}
        cardNumber={handleNumberChange}
        month={handleMonthChange}
        year={handleYearChange}
        cvc={handleCvcChange}
      />
      <Credits />
    </main>
  )
}
