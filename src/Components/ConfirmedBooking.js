import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styling/ConfirmedBooking.css";

export default function ConfirmedBooking() {
    const navigate = useNavigate();
    const [bookings, setBookings] = useState(JSON.parse(localStorage.getItem("bookings")) || []);

    if (bookings.length === 0) {
        navigate('/reservations', { replace: true });
        return null;
    }

    const handleBackToBooking = () => {
        navigate('/reservations');
    };

    const handleCancelBooking = (index) => {
        const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
        if (!confirmCancel) return;

        const updatedBookings = bookings.filter((_, i) => i !== index);
        setBookings(updatedBookings);
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    };

    return (
        <div className="confirmation-container">
            <h1>Booking Confirmation</h1>
            {bookings.map((booking, index) => (
                <div className="booking-details" key={index}>
                    <h2>Booking {index + 1}</h2>
                    <ul className="booking-info">
                        {Object.entries(booking).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong>
                                <br />
                                {value || 'Not selected'}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => handleCancelBooking(index)} className="cancel-button">
                        Cancel Booking
                    </button>
                </div>
            ))}
            <button className="back-button" onClick={handleBackToBooking}>Back to Reservations</button>
        </div>
    );
}
