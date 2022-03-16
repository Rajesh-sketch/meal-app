import React from "react";
import user from "./assets/user.png";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Meal-App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li> */}
              {/* <li className="nav-item dropdown"> */}
                {/* <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Link
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link disabled">Link</a>
              </li> */}
            </ul>
            <div className="user-container  dropdown-toggle"  data-bs-toggle="dropdown">
              <img src={user} className="user-img" />
            </div>
            <ul className="dropdown-menu custom-menu">
                <li className="px-3 py-2">Sign In</li>
                <li  className="px-3 py-2">Sign up</li>
                <li  className="px-3 py-2">About</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
