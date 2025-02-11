import React from "react";
import "./Home.css";

const HomePage = () => {
    const requestAccess = () => {
        alert("Access request sent! Waiting for approval.");
    };

    return (
        <div className="home-container">
            <div className="overlay">
                <h1>Rishi's XBOBX</h1>
            </div>
        </div>
    );
};

export default HomePage;
