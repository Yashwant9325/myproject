import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home() {


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            {/* <!--Main Navigation--> */}
            <header>
              {/* <!-- Sidebar Start --> */}
              <nav
                id="sidebarMenu"
                class="collapse d-lg-block sidebar collapse bg-white"
              >
                <div class="position-sticky">
                  <div class="list-group list-group-flush mx-3 mt-4">

                    <Link to={"/home/products"}>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action py-2 ripple"
                      >
                        <i class="fas fa-money-bill fa-fw me-3"></i>
                        <span>Products</span>
                      </a><br />
                    </Link>
                    <Link to={"/home/sales"}>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action py-2 ripple"
                      >
                        <i class="fas fa-money-bill fa-fw me-3"></i>
                        <span>Sales</span>
                      </a><br />
                    </Link>
                    <Link to={"/home/salestable"}>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action py-2 ripple"
                      >
                        <i class="fas fa-money-bill fa-fw me-3"></i>
                        <span>SalesTable</span>
                      </a><br />
                    </Link>

                    <Link to={"/"}>
                      <a
                        href="#"
                        class="list-group-item list-group-item-action py-2 ripple"
                      >
                        <i class="fas fa-money-bill fa-fw me-3"></i>
                        <span>Logout</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </nav>
              {/* <!-- Sidebar End--> */}

              {/* <!-- Navbar --> */}
              <nav
                id="main-navbar"
                class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
              >
                {/* <!-- Container wrapper --> */}
                <div class="container-fluid">
                  {/* <!-- Toggle button --> */}
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#sidebarMenu"
                    aria-controls="sidebarMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="fas fa-bars"></i>
                  </button>

                  {/* <!-- Brand --> */}
                  <a class="navbar-brand" href="#">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                      height="25"
                      alt="MDB Logo"
                      loading="lazy"
                    />
                  </a><br /><br />
                  <div class="input-group" style={{marginLeft:"400px"}}>
                    <input type="search"  placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" class="btn btn-primary" data-mdb-ripple-init>search</button>
                  </div>
                  {/* <!-- Right links --> */}
                  <ul class="navbar-nav ms-auto d-flex flex-row">
                    {/* <!-- Notification dropdown --> */}
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fas fa-bell"></i>
                        <span class="badge rounded-pill badge-notification bg-danger">
                          1
                        </span>
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Some news
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another news
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* <!-- Icon --> */}
                    <li class="nav-item">
                      <a class="nav-link me-3 me-lg-0" href="#">
                        <i class="fas fa-fill-drip"></i>
                      </a>
                    </li>
                    {/* <!-- Icon --> */}
                    <li class="nav-item me-3 me-lg-0">
                      <a class="nav-link" href="#">
                        <i class="fab fa-github"></i>
                      </a>
                    </li>

                    {/* <!-- Icon dropdown --> */}
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="flag-united-kingdom flag m-0"></i>
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            <i class="flag-united-kingdom flag"></i>English
                            <i class="fa fa-check text-success ms-2"></i>
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <i class="flag-poland flag"></i>Polski
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <i class="flag-china flag"></i>中文
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <i class="flag-japan flag"></i>日本語
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <i class="flag-germany flag"></i>Deutsch
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <i class="flag-france flag"></i>Français
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <i class="flag-spain flag"></i>Español
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <i class="flag-russia flag"></i>Русский
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            <i class="flag-portugal flag"></i>Português
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* <!-- Avatar --> */}
                    <li class="nav-item dropdown">
                      <a
                        class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                          class="rounded-circle"
                          height="22"
                          alt="Avatar"
                          loading="lazy"
                        />
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            My profile
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Settings
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Logout
                          </a>
                        </li>

                      </ul>
                    </li>
                  </ul>
                </div>
                <Link to={"/"}>
                  <button className="btn btn-danger">Logout</button>
                </Link>
                {/* <!-- Container wrapper --> */}
              </nav>
              {/* <!-- Navbar --> */}
            </header>
            {/* <!--Main Navigation--> */}

            {/* <!--Main layout--> */}
            <main style={{ marginTop: "58px" }}>
              <div class="container pt-4"></div>
            </main>
            {/* <!--Main layout--> */}
          </div>

          <div className="col-lg-9 App mt-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}