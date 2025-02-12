import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AlertList.css";

const AlertList = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const fetchAlerts = async () => {
            try {
                const response = await axios.get("https://xbox-alert.onrender.com/alerts");
                setAlerts(response.data.alerts);
            } catch (error) {
                console.error("Error fetching alerts:", error);
            }
        };

        fetchAlerts();
        const interval = setInterval(fetchAlerts, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="alert-container">
            <h2>Xbox Usage Alerts</h2>
            {alerts.length === 0 ? (
                <p>No alerts yet.</p>
            ) : (
                <ul>
                    {alerts.map((alert, index) => (
                        <li key={index}>
                            <strong>{alert.roommate}</strong> saw <strong>{alert.friendPlaying}</strong> playing Xbox at {new Date(alert.timestamp).toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' })}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AlertList;
