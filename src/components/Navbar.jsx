import styled from "styled-components";
import './Navbar.css';
//TODO: I think I want a generic landing page

const Navbar=({ onNavigate })=>{
    const NavItem=styled.a`
    color: white;
    padding: 0.9rem;
    text-decoration: none;
    font-weight: bold;

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
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('genWelcome')}>
               Gen Welcome
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('clientW')}>
                Client
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('employeeW')}>
                Employee
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('hotelOwnerW')}>
                  Hotel Owner
                </NavItem>
            </li>
          </ul>

        </nav>
        </header>    
    )
}

export default Navbar;