
import { Link } from "react-router-dom"
import "./Header.css"

export default function Header() {
  return (
    <div className="header-area">
      <div className="container">
        <div className="header">
          <Link to ="/">Logo</Link>
          <div className="MENU">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/service">SERVICES</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
