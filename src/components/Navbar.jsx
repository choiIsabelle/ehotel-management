import styled from "styled-components";
import './Navbar.css';

const Navbar=({ onNavigate })=>{
    const NavItem=styled.a`
    color: white;
    padding: 0.9rem;
    text-decoration: none;

    :hover {
      color: #7393B3;
      ;
    }
    `
    return(
        <header>
        <nav className="navbar">
              <ul className="navbar-nav">
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('client')}>
                Client View
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('employee')}>
                Employee View
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('hotelOwner')}>
                  Hotel Owner View
                </NavItem>
            </li>
          </ul>

        </nav>
        </header>    
    )
}

export default Navbar;