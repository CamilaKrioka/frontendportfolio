import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";


const BarraNavegacion = () => {
  return (
    <>
    <Navbar expand="lg" className="navbar sticky-top">
      <Link to="home" smooth={true} duration={1000}>
        <Navbar.Brand>
          <Navbar.Text className="font-weight-bold text-white">
            Camila Krioka
          </Navbar.Text>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto text-center nav-links">
        <Link to="sobre-mi" smooth={true} duration={500}>
            SOBRE MI
          </Link>
          <Link to="proyectos" smooth={true} duration={500} offset={100}>
            PROYECTOS
          </Link>
          <Link to="educacion" smooth={true} duration={500}>
            EDUCACIÓN
          </Link>
          <Link to="experiencia" smooth={true} duration={500}>
            EXPERIENCIA
          </Link>
          <Link to="contacto" smooth={true} duration={500}>
            CONTÁCTAME
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};

export default BarraNavegacion;