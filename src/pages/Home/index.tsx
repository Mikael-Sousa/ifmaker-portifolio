import Header from "../../components/Header";
import TitleGlitch from "../../components/TitleGlitch";
import TypingSubtitle from "../../components/TypingSubtitle";
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
            <TitleGlitch />
            <TypingSubtitle />
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
