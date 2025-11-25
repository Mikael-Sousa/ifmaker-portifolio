import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { bots } from "../../data/bots";
import "./styles.css";

export default function Section() {
  const [showItem, setShowItem] = useState(false);
  const [indexSelected, setIndexSelected] = useState(0);
  const [number, setNumber] = useState(1);

  const intervalRef = useRef<number | null>(null);

  const formatNumber = String(number).padStart(2, "0");

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

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
  };

  const prevItem = () => {
    stopCarousel();
    changeItem("prev");
  };

  const nextItem = () => {
    stopCarousel();
    changeItem("next");
  };

  useLayoutEffect(() => {
    const id = setTimeout(() => setShowItem(true), 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      changeItem("next");
    }, 8000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section>
      <div className="list">
        <div className={showItem ? "item active" : "item"}>
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
      </div>
    </section>
  );
}
