import { Link, Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import './Home.css'


export default function Home() {
  return (
   
    <div>
       <Header></Header>

       <div className="home">
        <h1>Home</h1>
       </div>
       <div className="container">
        <div className="sideBar">
          <div className="sideBar-menu">
            <Link to='/movie' className="sideBar-menu-link">Movie</Link>
            <Link to='/series' className="sideBar-menu-link">Series</Link>
          </div>
          <div className="sideBar-main">
            <Outlet/>
          </div>
        </div>
       </div>

       <div></div>
    </div>
  )
}
