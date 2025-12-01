import "./styles.css"

export default function Carousel() {
    const assets = ["", "", ""]

    return (
        <div className="carousel">
            <div className="slides">
                {assets.map((img, index) => (
                    <div className="slide" key={index}><img src={img}/></div>
                ))}
            </div>
            <div className="dots"></div>
        </div>
    )
}