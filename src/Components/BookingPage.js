import React from "react";
import BookingForm from "./BookingForm";
import AvailableTimesTable from './AvailableTimesTable';

export default function BookingPage({ availableTimes, dispatch }) {

    return (
        <div className="booking-page">
            <h1 className='section-title'>Reserve a Table</h1>
            <p>Book your table in advance to enjoy a wonderful dining experience!</p>
            <div className="table-form">
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
                <AvailableTimesTable availableTimes={availableTimes} />
            </div>
        </div>
    );
};
