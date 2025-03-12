import React, { useState } from "react";

const BookingForm = () => {
  // State to track form fields
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  });

  // List of available times (stateful)
  const [availableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation details:", formData);
    alert("Reservation submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "20px", margin: "20px auto" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleChange}>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
};

export default BookingForm;
