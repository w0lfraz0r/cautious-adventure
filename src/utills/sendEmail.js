const nodemailer = require('nodemailer');

async function sendEmail(options) {
    // Default options
    const defaultOptions = {
        from: process.env.EMAIL,
        to: '',
        subject: '',
        text: '',
        html: '',
    };

    // Merge user options with defaults
    const mergedOptions = Object.assign({}, defaultOptions, options);

    // Create a transporter based on your email service configuration
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false, // Adjust based on your email service requirements
        auth: {
            user: 'your_email@example.com', // Replace with your email credentials
            pass: 'your_password', // Replace with your email password
        },
    });

    // Send the email
    try {
        const info = await transporter.sendMail(mergedOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Example usage
const emailOptions = {
    to: 'recipient@example.com',
    subject: 'Test Email from Nodemailer',
    text: 'This is a plain text email.',
    html: '<h1>This is an HTML email!</h1>',
};

sendEmail(emailOptions);
