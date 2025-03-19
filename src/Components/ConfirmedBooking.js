import React from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmedBooking() {
    const navigate = useNavigate();

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if (bookings.length === 0) {
        navigate('/reservations', { replace: true });
        return null;
    }

    const handleBackToBooking = () => {
        navigate('/reservations');
    };

    const handleCancelBooking = (index) => {
        const updatedBookings = bookings.filter((_, i) => i !== index);
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
        window.location.reload();
    };

    return (
        <div className="confirmation-container">
            <h1>Booking Confirmation</h1>
            {bookings.map((booking, index) => (
                <div className="booking-details" key={index}>
                    <h2>Booking {index + 1}</h2>
                    <ul>
                        {Object.entries(booking).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> {value || 'Not selected'}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => handleCancelBooking(index)} className="cancel-button">
                        Cancel Booking
                    </button>
                </div>
            ))}
            <button className="back-button" onClick={handleBackToBooking}>Back to Booking</button>
        </div>
    );
}
