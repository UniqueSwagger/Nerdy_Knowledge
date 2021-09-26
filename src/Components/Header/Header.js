import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <a className="navbar-brand fs-3 fw-bold" href="/Nerdy">
              Nerdy Knowledge
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                <li className="nav-item me-3">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/Features"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="/Integrations">
                    Integrations
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="/Pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="/Company">
                    Company
                  </a>
                </li>
                <li className="nav-item me-3">
                  <a className="nav-link" href="/Login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="bg-primary text-white text-center header-text">
          <div className="d-flex flex-column gap-3">
            <h1>
              Making an IT company <br />
              with high experienced programmers
            </h1>
            <p>
              Join nerdy knowledge community for long-lasting relationships with
              programmers <br />
              that help you create high level projects
            </p>
            <h2>
              Total Budget: <strong>200 Million</strong>
            </h2>
          </div>
        </section>
        <img
          id="header-left-image"
          className="img-fluid"
          src="left-image.png"
          width="390"
          height=""
          alt=""
        />
        <img
          id="header-right-image"
          className="img-fluid d-none d-xl-inline-block"
          src="right-image.svg"
          alt=""
        />
      </header>
    </div>
  );
};

export default Header;
