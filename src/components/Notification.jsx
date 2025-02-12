import React, { useState } from "react";
import axios from "axios";
import "./Notification.css";

const Notification = () => {
    const [roommate, setRoommate] = useState("");
    const [friendPlaying, setFriendPlaying] = useState("");
    const [message, setMessage] = useState("");

    const sendNotification = async () => {
        if (!roommate || !friendPlaying) {
            setMessage("Please enter your name and select who is playing.");
            return;
        }

        try {
            const response = await axios.post("https://xbox-alert.onrender.com/notify", {
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
            <h1>Rishi's XBOX</h1>
            <label>Select Your Name</label>
            <select value={roommate} onChange={(e) => setRoommate(e.target.value)}>
                <option value="">-- Select --</option>
                <option value="Atharva">Atharva</option>
                <option value="Suyash">Suyash</option>
                <option value="Mayank">Mayank</option>
                <option value="Rutuj">Rutuj</option>
                <option value="Aditya">Aditya</option>
                <option value="Gaurav">Gaurav</option>
                <option value="Fardeen">Fardeen</option>
            </select>

            <label>Who is Playing Xbox?</label>
            <select value={friendPlaying} onChange={(e) => setFriendPlaying(e.target.value)}>
                <option value="">-- Select --</option>
                <option value="Atharva">Atharva</option>
                <option value="Suyash">Suyash</option>
                <option value="Mayank">Mayank</option>
                <option value="Rutuj">Rutuj</option>
                <option value="Aditya">Aditya</option>
                <option value="Gaurav">Gaurav</option>
                <option value="Fardeen">Fardeen</option>
            </select>

            <button onClick={sendNotification}>Send Alert</button>
            {message && <p>{message}</p>}
        </div >
    );
};

export default Notification;
