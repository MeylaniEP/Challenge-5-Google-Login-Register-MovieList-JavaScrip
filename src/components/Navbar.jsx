import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../assets/styles/Navbar.css";
import { AiOutlineSearch } from 'react-icons/ai';

function Navbar() {
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const navbar = document.querySelector("#myHeader");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };

    return (
        <>
            <header
                className="fixed-top position-absolut p-3 text-bg-transparent"
                id="myHeader"
            >
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                        <ul className="nav mb-2 justify-content-center mb-md-0">
                            <li>
                                <Link
                                    to={"/"}
                                    className="nav-link px-2 text-secondary"
                                >
                                    <span>
                                        <h1 className="navbar-brand">
                                            MovieList
                                        </h1>
                                    </span>
                                </Link>
                            </li>
                        </ul>

                        <form
                            className="col-12 col-lg-4 mb-3 mb-lg-0 me-lg-3 position-relative"
                            role="search"
                            method="get"
                        >
                            <input
                                id="pencarian"
                                type="search"
                                className="form-control form-control-dark text-light bg-transparent rounded-pill border-danger"
                                placeholder="What do you want to watch?"
                                aria-label="Search"
                                name="q"
                            />
                            <AiOutlineSearch className="search"/>
                        </form>

                        <div className="text-end">
                            <button
                                type="button"
                                className="btn btn-outline-light rounded-pill me-2 border-danger"
                            >
                                Login
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger rounded-pill"
                            >
                                Register
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
