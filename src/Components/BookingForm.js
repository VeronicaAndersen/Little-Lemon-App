import React, { useState, useEffect } from "react";
import ConfirmedBooking from "./ConfirmedBooking";
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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log(errors);
  }, [errors]);

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
      {errors[name] && <p className="error">{errors[name]}</p>}
    </>
  );

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = "* Please select a date.";
    if (!formData.time) newErrors.time = "* Please select a time.";
    if (!formData.guests || formData.guests < 1 || formData.guests > 10) newErrors.guests = "* Guests must be between 1 and 10.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "* First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "* Last name is required.";
    if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "* Phone number must be 10 digits.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "* Enter a valid email.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => {
      const newFormData = {
        ...prev,
        [e.target.name]: e.target.value,
      };

      return newFormData;
    });
  };

  const handleNext = (e) => {

    e.preventDefault();
    if (!validateStep1()) return;

    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

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
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const updatedBookings = [...existingBookings, formData];

    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

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
        <ConfirmedBooking info={formData} />
      ) : (
        <>
          {step === 1 ? (
            <form onSubmit={handleNext} style={{ display: "grid", maxWidth: "300px", gap: "20px", margin: "20px auto" }} noValidate>
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
            <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "300px", gap: "20px", margin: "20px auto" }} noValidate>
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
