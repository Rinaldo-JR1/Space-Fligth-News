import { Component, ReactNode } from "react";
import logo from "../../assets/images/logo.png";


export class Navbar extends Component {
  render(): ReactNode {
    return (
      <header>
        <nav className="navbar">
          <div className="nav-brand">
            <img src={logo} alt="logo" className="logo" />
            <h1>Space Fligth News</h1>
          </div>
          <ul className="navlist">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
