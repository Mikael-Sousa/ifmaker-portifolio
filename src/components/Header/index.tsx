import "./styles.css"

export default function Header() {
  return (
    <header>
        <h1 className="title">IFMAKER</h1>
        <nav>
          <ul>
            <li className="navbar-section">inicio</li>
            <li className="navbar-section active">projetos</li>
            <li className="navbar-section">sobre</li>
          </ul>
        </nav>
      </header>
  )
}