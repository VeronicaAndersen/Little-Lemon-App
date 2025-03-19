import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Confirmation() {
    const location = useLocation();
    const navigate = useNavigate();

    // Ensure we have info from state
    const info = location.state?.info;

    // Redirect to /reservations if no booking info is found
    if (!info) {
        navigate('/reservations', { replace: true });
        return null; // Prevents rendering before navigation
    }

    const handleBackToBooking = () => {
        navigate('/reservations'); // Navigate back to BookingPage
    };

    return (
        <div className="confirmation-container">
            <h1>Booking Confirmation</h1>
            <div className="booking-details">
                <h2>Details</h2>
                <ul>
                    {Object.entries(info).map(([key, value]) => (
                        <li key={key}>
                            <strong>{key.replace(/([A-Z])/g, ' $1').toUpperCase()}:</strong> {value || 'Not selected'}
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={handleBackToBooking}>Back to Booking</button>
        </div>
    );
}
