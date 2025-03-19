const availableTimesByDate = {
    '2025-03-19': ['10:00', '11:00', '12:00'],
    '2025-03-20': ['14:00', '15:00', '16:00'],
    '2025-03-21': ['10:00', '11:00', '12:00'],
    '2025-03-22': ['10:00', '11:00', '12:00'],
    '2025-03-23': ['14:00', '15:00', '16:00'],
    '2025-03-24': ['10:00', '11:00', '12:00'],
    '2025-03-25': ['14:00', '15:00', '16:00'],
    '2025-03-26': ['10:00', '11:00', '12:00'],
    '2025-03-27': ['14:00', '15:00', '16:00'],
    '2025-03-28': ['10:00', '11:00', '12:00'],
    '2025-03-29': ['14:00', '15:00', '16:00'],
    '2025-03-30': ['10:00', '11:00', '12:00'],
};

const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (availableTimesByDate[date]) {
                resolve(availableTimesByDate[date]);
            } else {
                reject(new Error('No available times for the selected date.'));
            }
        }, 1000);
    });
};

const submitAPI = (formData) => {
    const { date, time } = formData;

    // Remove the selected time from availableTimesByDate for the selected date
    availableTimesByDate[date] = availableTimesByDate[date].filter((availableTime) => availableTime !== time);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (formData) {
                resolve(true); // Simulate successful submission
            } else {
                reject(new Error('Form submission failed.'));
            }
        }, 1000); // Simulate API delay
    });
};

const fetchAllAvailableTimes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(availableTimesByDate);
        }, 1000);
    });
};

export { fetchAPI, submitAPI, fetchAllAvailableTimes };