import React from 'react';

export default function AvailableTimesTable({ availableTimes }) {
  return (
    <div className="table-container">
      <h2>All Available Times</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Available Times</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(availableTimes).length > 0 ? (
            Object.entries(availableTimes).map(([date, times]) => (
              <tr key={date}>
                <td>{date}</td>
                <td>{times.length > 0 ? times.join(", ") : "No Available Times"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No available times yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

  );
};