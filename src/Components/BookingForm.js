import React, { useState } from "react";

export default function BookingPage({ availableTimes, setAvailableTimes }) {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: 0,
    email: "",
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Remove the selected time from availableTimes
    const updatedTimes = availableTimes.filter((time) => time !== formData.time);

    // Update available times by passing the new array to setAvailableTimes
    setAvailableTimes(updatedTimes);

    console.log("Reservation submitted:", formData);
    alert("Reservation submitted successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "grid", maxWidth: "300px", gap: "20px", margin: "20px auto" }}
    >
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        min="1"
        max="20"
        value={formData.firstName}
        onChange={handleChange}
        required
      />

      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        min="1"
        max="20"
        value={formData.lastName}
        onChange={handleChange}
        required
      />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input
        type="number"
        id="phoneNumber"
        name="phoneNumber"
        min="1"
        max="20"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        min="1"
        max="20"
        value={formData.email}
        onChange={handleChange}
        required
      />

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
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      >
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
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <button type="submit">Make Your Reservation</button>
    </form>
  );
}
