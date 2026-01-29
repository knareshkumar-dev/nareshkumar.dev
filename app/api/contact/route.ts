import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Here you would integrate with your email service
    // For example, using Nodemailer, SendGrid, Resend, etc.
    
    // Placeholder: Log the contact form data
    console.log('Contact form submission:', { name, email, message });

    // Mock email sending
    // In production, use: await sendEmail({ to: email, subject: '...', body: '...' });
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message received! I will get back to you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
