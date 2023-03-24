import { NavLink } from "react-router-dom";
export default function Nav() {
    return (
        <nav className="globalnavigation">
            <NavLink to="/">Forside</NavLink>
            <NavLink to="/prisliste">Prisliste</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/booking">Booking</NavLink>
            <NavLink to="/omos">Om os</NavLink>
        </nav>
    )
}