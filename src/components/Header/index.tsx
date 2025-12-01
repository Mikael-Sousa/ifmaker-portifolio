import "./styles.css"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const navbarSections = [
    { name: "inicio", path: "/" },
    { name: "projetos", path: "/projetos" },
    { name: "sobre", path: "/sobre" }
  ]

   const location = useLocation()

  return (
    <header>
        <h1>IFMAKER</h1>
        <nav>
          <ul>
              {navbarSections.map(({name, path}, index) => (
            <li 
              key={index}
              className={location.pathname === path ? "active" : ""}
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
          </ul>
        </nav>
      </header>
  )
}