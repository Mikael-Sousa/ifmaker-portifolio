import { useState, useEffect, useLayoutEffect } from "react"
import { bots } from "../../data/bots"
import "./styles.css"


export default function Section() {
  const [showItem, setShowItem] = useState<boolean>(false);
  const [indexSelected, setIndexSelected] = useState<number>(0);
  const [number, setNumber] = useState<number>(1);

  const formatNumber = String(number).padStart(2, "0")

  const changeItem = (direction: "prev" | "next") => {
    setShowItem(false);

    setTimeout(() => {
      setShowItem(true);

      setIndexSelected(prev => {
        let newIndex;

        if (direction === "prev") {
          newIndex = prev - 1 < 0 ? bots.length - 1 : prev - 1;
        } else {
          newIndex = prev + 1 === bots.length ? 0 : prev + 1;
        }

        setNumber(newIndex + 1);

        return newIndex;
      });

    }, 700);
  }

  const prevItem = () => {
    changeItem("prev");
  };


  const nextItem = () => {
    changeItem("next")
  };

  useLayoutEffect(() => {
  const id = setTimeout(() => setShowItem(true), 0);
  return () => clearTimeout(id);
}, []);

useEffect(() => {
  const intervalId = setInterval(() => {
    nextItem();
  }, 12000);

  return () => clearInterval(intervalId);
}, []);

  return (
    <section>
      <div className="list">
        <div className={showItem === true ? "item active" : "item"}>
          <div className="item-img">
            <img className="bot-img" src={bots[indexSelected].image} alt="" />
          </div>

          <div className="content">
            <h2 className="bot-name">{bots[indexSelected].name}</h2>
            <p className="bot-description">{bots[indexSelected].description}</p>
          </div>
        </div>
      </div>

      <div className="arrows">
        <button className="arrow-left" onClick={prevItem}>&lt;</button>
        <button className="arrow-right" onClick={nextItem}>&gt;</button>
      </div>

      <div className="indicators">
        <div className="numbers">{formatNumber}</div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  )
}