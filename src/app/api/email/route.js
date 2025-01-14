import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
  throw new Error('SMTP variables are not defined in the environment.');
}

const transport = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SMTP_PORT === '465',
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
});

const send = async (options) => {
  try {
    const { to, from, subject, html } = options;
    const response = await transport.sendMail({
      to,
      from,
      subject,
      html,
    });
    console.log('Email sent successfully:', response);
  } catch (e) {
    console.error('Error sending email:', e);
    throw new Error('Failed to send email.');
  }
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { to } = body;

    if (!to) {
      return NextResponse.json({ message: 'Recipient email is required.' }, { status: 400 });
    }

    console.log('Sending email...');

    await send({
      to,
      from: 'test@luksr.com',
      subject: 'Web directory subscription',
      html: `Hi, you've been successfully subscribed to our newsletter.`,
    });

    return NextResponse.json({ message: 'Email sent' });
  } catch (e) {
    console.error('Error processing the request:', e);
    return NextResponse.json({ message: 'Email not sent', error: e.message }, { status: 500 });
  }
}
