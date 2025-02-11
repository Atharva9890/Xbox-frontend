import React, { useState } from "react";
import axios from "axios";
import "./Notification.css";

const NotificationForm = () => {
    const [roommate, setRoommate] = useState("");
    const [friendPlaying, setFriendPlaying] = useState("");
    const [message, setMessage] = useState("");

    const sendNotification = async () => {
        if (!roommate || !friendPlaying) {
            setMessage("Please enter both fields.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5001/notify", {
                roommate,
                friendPlaying
            });
            setMessage(response.data.message);
            setRoommate("");
            setFriendPlaying("");
        } catch (error) {
            setMessage("Error sending notification.");
        }
    };

    return (
        <div className="notification-container">
            <h2>Report Xbox Usage</h2>
            <input
                type="text"
                placeholder="Your Name"
                value={roommate}
                onChange={(e) => setRoommate(e.target.value)}
            />
            <input
                type="text"
                placeholder="Friend Playing"
                value={friendPlaying}
                onChange={(e) => setFriendPlaying(e.target.value)}
            />
            <button onClick={sendNotification}>Send Alert</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default NotificationForm;
