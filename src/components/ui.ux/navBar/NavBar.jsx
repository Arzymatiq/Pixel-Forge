import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="main__navbar__block-center">
                <div className="main__navbar__block">
                    <div className="left__NavBar__block">Pixel Forge</div>
                    <div className="center__NavBar__block">
                        <ul className="center__NavBar__block_list">
                            <li
                                className="center__NavBar__block_item"
                                onClick={() => navigate("/")}>
                                Home
                            </li>
                            <li
                                className="center__NavBar__block_item"
                                onClick={() => navigate("/")}>
                                About us
                            </li>
                            <li
                                className="center__NavBar__block_item"
                                onClick={() => navigate("/")}>
                                Services
                            </li>
                            <li
                                className="center__NavBar__block_item"
                                onClick={() => navigate("/")}>
                                Contact us
                            </li>
                        </ul>
                    </div>
                    <div className="right__NavBar__block">
                        <ul className="right__NavBar__block_list">
                            <li className="right__NavBar__block_item">
                                <svg
                                    class="tds-icon tds-icon-help"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill="currentColor"
                                        d="M12 20.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Zm0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm.053-3.533a7.8 7.8 0 0 1 .92-.767 6.97 6.97 0 0 0 .746-.61 2.31 2.31 0 0 0 .468-.635c.126-.253.188-.548.188-.883 0-.374-.082-.723-.246-1.048-.158-.324-.415-.588-.771-.792-.356-.203-.81-.305-1.362-.305-.575 0-1.045.116-1.411.347a1.991 1.991 0 0 0-.788.89c-.06.134-.11.272-.148.413-.111.414-.445.767-.874.767-.428 0-.784-.35-.71-.772.07-.407.2-.79.386-1.15.301-.583.758-1.048 1.37-1.394C10.435 6.176 11.185 6 12.07 6c.93 0 1.687.181 2.273.544.59.358 1.014.803 1.271 1.337.257.533.386 1.07.386 1.608 0 .545-.085 1.012-.254 1.403-.17.385-.375.698-.616.94-.235.242-.55.514-.943.817-.312.247-.561.46-.747.635-.18.176-.33.385-.451.627-.05.099-.087.2-.113.302-.108.424-.422.787-.86.787-.437 0-.806-.356-.76-.79a2.948 2.948 0 0 1 .797-1.743Z"></path>
                                </svg>
                            </li>
                            <li
                                className="right__NavBar__block_item"
                                onClick={() => navigate("/login")}>
                                <svg
                                    class="tds-icon tds-icon-person"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill="currentColor"
                                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM6.858 18.752c.605-1.868 2.722-3.24 5.142-3.24 2.42 0 4.537 1.372 5.142 3.24C15.712 19.844 13.933 20.5 12 20.5s-3.712-.656-5.142-1.748zm11.469-1.095c-1.02-2.165-3.483-3.645-6.327-3.645s-5.307 1.48-6.327 3.645A8.456 8.456 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5 4.687 0 8.5 3.813 8.5 8.5a8.456 8.456 0 0 1-2.173 5.657zM12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
