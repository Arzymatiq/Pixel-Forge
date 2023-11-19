import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import Login from "../components/account/Login";
import Register from "../components/account/Register";

const MainRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export default MainRouting;
