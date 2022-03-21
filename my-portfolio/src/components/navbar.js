import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../img/Portfolio-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const navbar = () => {
  const handleClickGit = () => {
    const url = "https://github.com/Shaharyar07";
    window.open(url, "_blank").focus();
  };

  const handleClickLinkedin = () => {
    window
      .open("https://www.linkedin.com/in/shaharyar-tariq-9633ba211/")
      .focus();
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        className="navbar  py-0"
        expand="lg"
        variant="dark"
        bg='dark'
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img className="logo" src={logo} alt="" srcset="" thumbnail />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/about">
                <Nav.Link className="fw-bold text-light">Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="fw-bold text-light">Contact</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ms-auto ">
              <LinkContainer to="/">
                <Nav.Link>
                  <button onClick={handleClickLinkedin}>
                    <div className="px-3">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="none"
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                        ></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </div>
                  </button>
                  <button onClick={handleClickGit}>
                    <div className="px-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </div>
                  </button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="flex  justify-center">
        <div className="w-75 h-1 rounded-full inline-flex"></div>
      </div>
    </div>
  );
};
export default navbar;
