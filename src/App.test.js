import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";

describe("BookingForm", () => {
  test("renders the First Name label and input field", () => {
    render(<BookingForm availableTimes={{}} dispatch={() => {}} />);

    // Check if the label exists
    const firstNameLabel = screen.getByLabelText(/First Name/i);
    expect(firstNameLabel).toBeInTheDocument();

    // Ensure it's an input field
    expect(firstNameLabel.tagName).toBe("INPUT");

    // Verify input has the correct attributes
    expect(firstNameLabel).toHaveAttribute("type", "text");
    expect(firstNameLabel).toHaveAttribute("id", "firstName");
    expect(firstNameLabel).toHaveAttribute("name", "firstName");
  });
});
