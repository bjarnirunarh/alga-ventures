import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  console.error('SENDGRID_API_KEY is not set in environment variables');
}
sgMail.setApiKey(apiKey || '');

const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'hello@alga.is';
const TO_EMAIL = process.env.SENDGRID_TO_EMAIL || 'hello@alga.is';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received schedule request:', { ...data, message: '[REDACTED]' });
    
    // Format the date and time for better readability
    const formattedDate = new Date(data.preferredDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    const formattedTime = new Date(`2000-01-01T${data.preferredTime}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    // Email to the client
    const clientEmail = {
      to: data.email,
      from: FROM_EMAIL,
      subject: 'Meeting Request Received - ALGA Ventures',
      html: `
        <h2>Thank you for scheduling a meeting with ALGA Ventures!</h2>
        <p>We've received your request for a meeting with the following details:</p>
        <ul>
          <li><strong>Date:</strong> ${formattedDate}</li>
          <li><strong>Time:</strong> ${formattedTime}</li>
          <li><strong>Topic:</strong> ${data.message}</li>
        </ul>
        <p>We'll review your request and get back to you within 24 hours to confirm the meeting time.</p>
        <p>Best regards,<br>The ALGA Ventures Team</p>
      `,
    };

    // Email to the admin
    const adminEmail = {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject: 'New Meeting Request - ALGA Ventures',
      html: `
        <h2>New Meeting Request</h2>
        <p>A new meeting request has been submitted:</p>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Company:</strong> ${data.company || 'Not provided'}</li>
          <li><strong>Preferred Date:</strong> ${formattedDate}</li>
          <li><strong>Preferred Time:</strong> ${formattedTime}</li>
          <li><strong>Message:</strong> ${data.message}</li>
        </ul>
      `,
    };

    console.log('Sending emails to:', {
      admin: TO_EMAIL,
      client: data.email,
      from: FROM_EMAIL
    });

    // Send both emails
    await Promise.all([
      sgMail.send(clientEmail),
      sgMail.send(adminEmail)
    ]);

    console.log('Emails sent successfully');
    return NextResponse.json({ 
      success: true, 
      message: 'Schedule request received successfully' 
    });
  } catch (error) {
    console.error('Error processing schedule request:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process schedule request' },
      { status: 500 }
    );
  }
} 