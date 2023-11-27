import { HeaderContainer } from "./styles";

// import logo from '../../assets/logo.png';
import { Timer, Scroll, Atom } from "phosphor-react";
import { NavLink } from 'react-router-dom';
 
export function Header() {
  return (
    <HeaderContainer>
      {/* <img src={logo} alt="" /> */}
      <Atom size={84} />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}