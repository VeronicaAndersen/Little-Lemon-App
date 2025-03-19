import React, { useState } from "react";
import Confirmation from "./Confirmation";
import { useNavigate } from 'react-router-dom';

export default function BookingForm({ availableTimes, dispatch }) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const timesForSelectedDate = availableTimes[formData.date] || [];

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

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1 && !formData.date) {
      alert("Please select a date!");
      return;
    }
    if (step === 1 && timesForSelectedDate.length === 0) {
      alert("Please choose an available time.");
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.email) {
      alert("Please fill in all customer information!");
      return;
    }

    const updatedAvailableTimes = { ...availableTimes };
    const selectedDate = formData.date;
    const selectedTime = formData.time;

    if (updatedAvailableTimes[selectedDate]) {
      updatedAvailableTimes[selectedDate] = updatedAvailableTimes[selectedDate].filter(
        (time) => time !== selectedTime
      );
    }

    dispatch({
      type: "REMOVE_TIME",
      payload: { date: formData.date, time: formData.time }
    });

    setSubmitted(true);
    navigate('/confirmation', { state: { info: formData } });
  };

  const progress = (step / 2) * 100;

  return (
    <div className="form">
      <div className="progressbar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      {submitted ? (
        <Confirmation info={formData} />
      ) : (
        <>
          {step === 1 ? (
            <form onSubmit={handleNext} style={{ display: "grid", maxWidth: "300px", gap: "20px", margin: "20px auto" }}>
              <h2>Select Date and Time</h2>
              {renderInput("Choose Date", "date", "date", null, { required: true })}
              <label htmlFor="res-time">Choose Time</label>
              <select id="res-time" name="time" value={formData.time} onChange={handleChange} disabled={!formData.date}>
              <option value="" disabled>Select Time</option>
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
              {renderInput("Number of Guests", "guests", "number", null, { min: 1, max: 10, required: true })}
              {renderInput("Occasion", "occasion", "select", ["Birthday", "Anniversary"])}

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button type="submit" disabled={!formData.date || timesForSelectedDate.length === 0}>
                  Next
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "300px", gap: "20px", margin: "20px auto" }}>
              <h2>Customer Information</h2>
              {renderInput("First Name", "firstName", "text", null, { required: true })}
              {renderInput("Last Name", "lastName", "text", null, { required: true })}
              {renderInput("Phone Number", "phoneNumber", "tel", null, { required: true, pattern: "[0-9]{10}" })}
              {renderInput("Email", "email", "email", null, { required: true })}

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <button className="back-button" type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="submit">Make Your Reservation</button>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
}
