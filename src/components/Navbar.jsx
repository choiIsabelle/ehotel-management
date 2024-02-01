import styled from "styled-components";
import './Navbar.css';
import { HomeFilledIcon } from "./icons/HomeFilledIcon";

const Navbar=({ onNavigate })=>{
    const NavItem=styled.a`
    color: white;
    padding: 0.9rem;
    font-weight: bold;

    :hover {
      color: #cfe2f3;
      fill: #cfe2f3;
      ;
    }
    `
    const StyledHomeFilledIcon = styled(HomeFilledIcon)`
    fill: white;
    transition: fill 0.3s ease;
  `;

    const iconStyling={
      marginRight: '1rem'
    }
    return(
        <header>
        <nav className="navbar">
              <ul className="navbar-nav">
                        <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('genWelcome')}>
               <StyledHomeFilledIcon style={iconStyling} />
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