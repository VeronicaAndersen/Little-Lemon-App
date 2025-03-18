import React, { useState, useEffect } from "react";

export default function BookingForm({ availableTimes, dispatch }) {
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

  // Load available times when date changes
  useEffect(() => {
    if (formData.date && !availableTimes[formData.date]) {
      dispatch({
        type: "SET_TIMES",
        payload: {
          date: formData.date,
          times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
        },
      });
    }
  }, [formData.date, availableTimes, dispatch]);

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date) {
      alert("Please select a date!");
      return;
    }

    dispatch({ type: "REMOVE_TIME", payload: { date: formData.date, time: formData.time } });

    console.log("Reservation submitted:", formData);
    alert("Reservation submitted successfully!");
  };

  // Get available times for the selected date (fallback to empty array)
  const timesForSelectedDate = availableTimes[formData.date] || [];

  // Reusable input rendering function
  const renderInput = (label, name, type = "text", options = null, extraProps = {}) => (
    <>
      <label htmlFor={name}>{label}</label>
      {options ? (
        <select id={name} name={name} value={formData[name]} onChange={handleChange} {...extraProps}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input id={name} name={name} type={type} value={formData[name]} onChange={handleChange} {...extraProps} />
      )}
    </>
  );

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "300px", gap: "20px", margin: "20px auto" }}>
      {renderInput("First Name", "firstName", "text", null, { required: true })}
      {renderInput("Last Name", "lastName", "text", null, { required: true })}
      {renderInput("Phone Number", "phoneNumber", "tel", null, { required: true, pattern: "[0-9]{10}" })}
      {renderInput("Email", "email", "email", null, { required: true })}
      {renderInput("Choose Date", "date", "date", null, { required: true })}
      {renderInput("Number of Guests", "guests", "number", null, { min: 1, max: 10, required: true })}
      {renderInput("Occasion", "occasion", "select", ["Birthday", "Anniversary"])}

      <label htmlFor="res-time">Choose Time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleChange} disabled={!formData.date}>
        {timesForSelectedDate.length > 0 ? (
          timesForSelectedDate.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))
        ) : (
          <option disabled>No available times</option>
        )}
      </select>

      {timesForSelectedDate.length === 0 && formData.date && (
        <p aria-live="polite">No available times for this date.</p>
      )}

      <button type="submit" disabled={!formData.date || timesForSelectedDate.length === 0}>
        Make Your Reservation
      </button>
    </form>
  );
}
