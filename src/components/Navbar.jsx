import styled from "styled-components";
import './Navbar.css';
import { HomeFilledIcon } from "./icons/HomeFilledIcon";

const Navbar=({ onNavigate })=>{
    const NavItem=styled.a`
    color: white;
    :hover {
      color: #98ecf3;
    }
    `
    const StyledHomeFilledIcon = styled(HomeFilledIcon)`
    fill: white;
    transition: fill 0.3s ease;
  `;

    const iconStyling={
      marginRight: '1rem',
    }

    const IconTextContainer= styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    gap: 0.5rem;
    flex-direction: row;
    font-weight: bold;
    `
    return(
        <header>
        <nav className="navbar">
              <ul className="navbar-nav">
                        <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#genWelcome" onClick={()=>onNavigate('genWelcome')}>
                <IconTextContainer>
               <StyledHomeFilledIcon style={iconStyling} />
               eHotel Management System
               </IconTextContainer>
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#Client" onClick={()=>onNavigate('clientW')}>
                Customer
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#Employee" onClick={()=>onNavigate('employeeW')}>
                Employee
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#HotelOwner" onClick={()=>onNavigate('hotelOwnerW')}>
                  Hotel Owner
                </NavItem>
            </li>
            {/* TODO: JUST FOR TESTING PURPOSES
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('test')}>
                  test page
                </NavItem>
            </li> */}
          </ul>

        </nav>
        </header>    
    )
}

export default Navbar;