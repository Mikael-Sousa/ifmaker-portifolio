import Header from "../../components/Header";
import WhatWeDo from "../../components/WhatWeDo";
import Carousel from "../../components/Carousel";
import "./styles.css"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">

          <div className="hero-left">
            <div className="hero-title-wrap">
              <h1 className="title">IFMAKER</h1>
            </div>
            <div className="subtitle" id="subtitle">
              Programação • Robótica • Impressão 3D
            </div>
            <WhatWeDo />
          </div>

          <div className="hero-right">
            <Carousel />
          </div>
        </section>
      </main>
    </>
  )
}
