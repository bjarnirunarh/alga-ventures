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
    console.log('Received contact form submission:', { ...data, message: '[REDACTED]' });
    
    // Email to the admin
    const adminEmail = {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p>A new message has been submitted through the contact form:</p>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Company:</strong> ${data.company || 'Not provided'}</li>
          <li><strong>Subject:</strong> ${data.subject}</li>
          <li><strong>Message:</strong> ${data.message}</li>
        </ul>
      `,
    };

    // Email to the client
    const clientEmail = {
      to: data.email,
      from: FROM_EMAIL,
      subject: 'Thank you for contacting ALGA Ventures',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <blockquote>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p>${data.message}</p>
        </blockquote>
        <p>Best regards,<br>The ALGA Ventures Team</p>
      `,
    };

    console.log('Sending emails to:', {
      admin: TO_EMAIL,
      client: data.email,
      from: FROM_EMAIL
    });

    // Send both emails
    await Promise.all([
      sgMail.send(adminEmail),
      sgMail.send(clientEmail)
    ]);

    console.log('Emails sent successfully');
    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
} 