import React, { useState } from "react";
import axios from "axios";
import "./Notification.css";

<<<<<<< HEAD
const NotificationForm = () => {
=======
const Notification = () => {
>>>>>>> 6232376 (commited)
    const [roommate, setRoommate] = useState("");
    const [friendPlaying, setFriendPlaying] = useState("");
    const [message, setMessage] = useState("");

    const sendNotification = async () => {
        if (!roommate || !friendPlaying) {
<<<<<<< HEAD
            setMessage("Please enter both fields.");
=======
            setMessage("Please enter your name and select who is playing.");
>>>>>>> 6232376 (commited)
            return;
        }

        try {
<<<<<<< HEAD
            const response = await axios.post("http://localhost:5001/notify", {
=======
            const response = await axios.post("https://xbox-alert.onrender.com/notify", {
>>>>>>> 6232376 (commited)
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
<<<<<<< HEAD
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
=======
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

>>>>>>> 6232376 (commited)
            <button onClick={sendNotification}>Send Alert</button>
            {message && <p>{message}</p>}
        </div>
    );
};

<<<<<<< HEAD
export default NotificationForm;
=======
export default Notification;
>>>>>>> 6232376 (commited)
