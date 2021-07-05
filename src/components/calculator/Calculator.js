import React, { useState } from "react";
import styles from "./stylecalculator.module.css";
import styled from 'styled-components'

function Calculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  const vkiHesapla = () => {
    let bmi = (weight / (height / 100) ** 2).toFixed(1);

    bmi > 0 ? setBmiResult(bmi) : setBmiResult("Geçersiz Değer");
    let bmiStatus = getStatus(bmi);

    bmi > 0 ? setStatus(bmiStatus) : setStatus("Geçersiz Değer");

    setHeight("");
    setWeight("");

    const item = {
      itemHeight: height,
      itemWeight: weight,
    };

    const items = JSON.parse(localStorage.getItem("items"));
    if (!items) {
      localStorage.setItem("items", JSON.stringify([]));
      if (item.itemHeight !== "" || item.itemWeight !== "") {
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
      }
      items.push(item);
    } else {
      if (item.itemHeight !== "" || item.itemWeight !== "") {
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
      }
    }
  };

  function getStatus(bmi) {
    if (bmi < 18.5) return "Düşük Kilolu";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Fazla Kilolu";
    else return "Obez";
  }

  const Button = styled.button`
  border: 2px solid blue;
  outline: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5%;
  background-color: blue;
  color: white;
  cursor: pointer;
`;


  return (
    <div className={styles.calculatorDisDiv}>
      <div className={styles.calculatorIcDiv}>
        <h2>VKİ HESAPLA</h2>

        <label htmlFor="Height">Boy (Santimetre)</label>
        <br />
        <input
          type="range"
          id="Height"
          min="1"
          max="300"
          onChange={(e) => setHeight(e.target.value)}
          value={height}
          required
        />
        <p>{height}</p>
        <br />
        <br />
        <label htmlFor="Weight">Kilo (Kilogram)</label>
        <br />
        <input
          type="range"
          id="Weight"
          min="1"
          max="300"
          onChange={(e) => setWeight(e.target.value)}
          value={weight}
          required
        />
        <p>{weight}</p>
        <br />
        <br />
        <Button id={styles.hesaplabtn} onClick={vkiHesapla}>
          Hesapla
        </Button>

        {bmiResult <= 0 ? (
          ""
        ) : (
          <div className={styles.sonucDivi}>
            <p>Vücut Kitle Endeksiniz: {bmiResult} </p>
            <p>Durumunuz: {status}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
