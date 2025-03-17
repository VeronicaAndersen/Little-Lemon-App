import React, { useState, useEffect } from "react";

export default function BookingPage({ availableTimes, dispatch }) {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  });

  // Load available times when the date changes
  useEffect(() => {
    if (formData.date && !availableTimes[formData.date]) {
      dispatch({
        type: "SET_TIMES",
        payload: { date: formData.date, times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] },
      });
    }
  }, [formData.date, availableTimes, dispatch]);

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date) {
      alert("Please select a date!");
      return;
    }

    // Dispatch action to remove the selected time for the specific date
    dispatch({ type: "REMOVE_TIME", payload: { date: formData.date, time: formData.time } });

    console.log("Reservation submitted:", formData);
    alert("Reservation submitted successfully!");
  };

  // Get available times for the selected date (fallback to empty array if not set)
  const timesForSelectedDate = availableTimes[formData.date] || [];

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "20px", margin: "20px auto" }}
    >
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formData.date} onChange={handleChange} required />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleChange} disabled={!formData.date}>
        {timesForSelectedDate.length > 0 ? (
          timesForSelectedDate.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))
        ) : (
          <option>No available times</option>
        )}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" name="guests" min="1" max="10" value={formData.guests} onChange={handleChange} required />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit" disabled={!formData.date || timesForSelectedDate.length === 0}>
        Make Your Reservation
      </button>
    </form>
  );
}
