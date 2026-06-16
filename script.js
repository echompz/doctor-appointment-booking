// Initialize appointments array from localStorage or empty array
let appointments = JSON.parse(localStorage.getItem('appointments')) || [];

// DOM Elements
const form = document.getElementById('appointmentForm');
const successMessage = document.getElementById('successMessage');
const appointmentsList = document.getElementById('appointmentsList');

// Form input elements
const patientNameInput = document.getElementById('patientName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const doctorInput = document.getElementById('doctor');
const dateInput = document.getElementById('appointmentDate');
const timeInput = document.getElementById('appointmentTime');
const reasonInput = document.getElementById('reason');

// Error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const doctorError = document.getElementById('doctorError');
const dateError = document.getElementById('dateError');
const timeError = document.getElementById('timeError');
const reasonError = document.getElementById('reasonError');

// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

// Validation functions
function validateName(name) {
    if (!name || name.trim().length < 2) {
        return 'Please enter a valid name (at least 2 characters)';
    }
    return '';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        return 'Email is required';
    }
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address';
    }
    return '';
}

function validatePhone(phone) {
    // Remove all non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, '');
    if (!phone) {
        return 'Phone number is required';
    }
    if (digitsOnly.length < 10) {
        return 'Please enter a valid phone number (at least 10 digits)';
    }
    return '';
}

function validateDoctor(doctor) {
    if (!doctor) {
        return 'Please select a doctor';
    }
    return '';
}

function validateDate(date) {
    if (!date) {
        return 'Please select an appointment date';
    }
    const selectedDate = new Date(date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    
    if (selectedDate < currentDate) {
        return 'Please select a future date';
    }
    return '';
}

function validateTime(time) {
    if (!time) {
        return 'Please select an appointment time';
    }
    return '';
}

function validateReason(reason) {
    if (!reason || reason.trim().length < 10) {
        return 'Please provide a reason (at least 10 characters)';
    }
    return '';
}

// Clear error message
function clearError(errorElement) {
    errorElement.textContent = '';
}

// Display error message
function showError(errorElement, message) {
    errorElement.textContent = message;
}

// Real-time validation
patientNameInput.addEventListener('blur', () => {
    const error = validateName(patientNameInput.value);
    if (error) {
        showError(nameError, error);
    } else {
        clearError(nameError);
    }
});

emailInput.addEventListener('blur', () => {
    const error = validateEmail(emailInput.value);
    if (error) {
        showError(emailError, error);
    } else {
        clearError(emailError);
    }
});

phoneInput.addEventListener('blur', () => {
    const error = validatePhone(phoneInput.value);
    if (error) {
        showError(phoneError, error);
    } else {
        clearError(phoneError);
    }
});

doctorInput.addEventListener('change', () => {
    const error = validateDoctor(doctorInput.value);
    if (error) {
        showError(doctorError, error);
    } else {
        clearError(doctorError);
    }
});

dateInput.addEventListener('change', () => {
    const error = validateDate(dateInput.value);
    if (error) {
        showError(dateError, error);
    } else {
        clearError(dateError);
    }
});

timeInput.addEventListener('change', () => {
    const error = validateTime(timeInput.value);
    if (error) {
        showError(timeError, error);
    } else {
        clearError(timeError);
    }
});

reasonInput.addEventListener('blur', () => {
    const error = validateReason(reasonInput.value);
    if (error) {
        showError(reasonError, error);
    } else {
        clearError(reasonError);
    }
});

// Format phone number as user types
phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 3) {
            value = `(${value}`;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    }
    e.target.value = value;
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear all previous errors
    clearError(nameError);
    clearError(emailError);
    clearError(phoneError);
    clearError(doctorError);
    clearError(dateError);
    clearError(timeError);
    clearError(reasonError);
    
    // Validate all fields
    const nameValidation = validateName(patientNameInput.value);
    const emailValidation = validateEmail(emailInput.value);
    const phoneValidation = validatePhone(phoneInput.value);
    const doctorValidation = validateDoctor(doctorInput.value);
    const dateValidation = validateDate(dateInput.value);
    const timeValidation = validateTime(timeInput.value);
    const reasonValidation = validateReason(reasonInput.value);
    
    // Check if there are any errors
    let hasErrors = false;
    
    if (nameValidation) {
        showError(nameError, nameValidation);
        hasErrors = true;
    }
    if (emailValidation) {
        showError(emailError, emailValidation);
        hasErrors = true;
    }
    if (phoneValidation) {
        showError(phoneError, phoneValidation);
        hasErrors = true;
    }
    if (doctorValidation) {
        showError(doctorError, doctorValidation);
        hasErrors = true;
    }
    if (dateValidation) {
        showError(dateError, dateValidation);
        hasErrors = true;
    }
    if (timeValidation) {
        showError(timeError, timeValidation);
        hasErrors = true;
    }
    if (reasonValidation) {
        showError(reasonError, reasonValidation);
        hasErrors = true;
    }
    
    // If there are errors, stop submission
    if (hasErrors) {
        return;
    }
    
    // Create appointment object
    const appointment = {
        id: Date.now(),
        patientName: patientNameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        doctor: doctorInput.value,
        date: dateInput.value,
        time: timeInput.value,
        reason: reasonInput.value.trim(),
        bookedOn: new Date().toISOString()
    };
    
    // Add to appointments array
    appointments.push(appointment);
    
    // Save to localStorage
    localStorage.setItem('appointments', JSON.stringify(appointments));
    
    // Show success message
    successMessage.classList.remove('hidden');
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 3000);
    
    // Reset form
    form.reset();
    
    // Refresh appointments list
    displayAppointments();
    
    // Scroll to appointments section
    appointmentsList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Display appointments
function displayAppointments() {
    if (appointments.length === 0) {
        appointmentsList.innerHTML = '<p class="no-appointments">No appointments booked yet.</p>';
        return;
    }
    
    // Sort appointments by date and time (most recent first)
    const sortedAppointments = [...appointments].sort((a, b) => {
        const dateA = new Date(a.date + ' ' + a.time);
        const dateB = new Date(b.date + ' ' + b.time);
        return dateB - dateA;
    });
    
    appointmentsList.innerHTML = sortedAppointments.map(appointment => {
        const appointmentDate = new Date(appointment.date);
        const formattedDate = appointmentDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        return `
            <div class="appointment-card">
                <h3>${appointment.patientName}</h3>
                <p><strong>Doctor:</strong> ${appointment.doctor}</p>
                <p><strong>Date:</strong> ${formattedDate}</p>
                <p><strong>Time:</strong> ${appointment.time}</p>
                <p><strong>Phone:</strong> ${appointment.phone}</p>
                <p><strong>Email:</strong> ${appointment.email}</p>
                <p><strong>Reason:</strong> ${appointment.reason}</p>
            </div>
        `;
    }).join('');
}

// Initialize: Display appointments on page load
displayAppointments();

// Made with Bob
