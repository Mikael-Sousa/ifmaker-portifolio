import { useState, useEffect, useLayoutEffect } from "react"
import "./styles.css"

export default function TypingSubtitle() {
    const [showAnimation, setShowAnimation] = useState(false)
    const [indexSelected, setIndexSelected] = useState(0);

    const phrases = [
        'Programação • Robótica • Impressão 3D',
        'Do it yourself - Faça você mesmo',
        'Workshops • Projetos estudantis • Open Lab'
    ];


    useLayoutEffect(() => {
        const id = setTimeout(() => setShowAnimation(true), 0);
        return () => clearTimeout(id);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowAnimation(false)
            setTimeout(() => {
                setIndexSelected(prev => (prev + 1) % phrases.length);
                setShowAnimation(true)
            }, 50)
        }, 4000);

        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <>
            <div className={showAnimation === true ? "subtitle animation" : "subtitle"}>
                {phrases[indexSelected]}
            </div>
        </>
    )
}
