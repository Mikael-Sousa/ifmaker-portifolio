import { FaCode, FaRobot, FaCubes } from "react-icons/fa"
import "./styles.css"

export default function WhatWeDo() {
    const cards = [
        {
            name: "Programação",
            icon: <FaCode />,
            description: "Workshops, cursos e projetos em JS, Python e microcontroladores."
        },
        {
            name: "Robótica",
            icon: <FaRobot />,
            description: "Montagem, sensores e automações educacionais."
        },
        {
            name: "Impressão 3D",
            icon: <FaCubes />,
            description: "Design 3D e criação de peças para produção."
        }
    ]

    return (
        <div className="grid">
            {cards.map(({ name, icon, description }, index) => (
                <div className="card" key={index}>
                    <div className="icon">{icon}</div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            ))}
        </div>
    )
}
