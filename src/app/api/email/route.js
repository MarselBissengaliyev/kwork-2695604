import { NextResponse } from 'next/server'
import mailer from 'nodemailer'

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env

const transport = mailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
})

export const send = async (options) => {
  try {
    const { to, from, subject, html } = options

    const response = await transport.sendMail({
      to,
      from,
      subject,
      html,
    })

    console.log({ response })
  } catch (e) {
    console.error(e)
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { to } = body

    console.log('sending email..')

    await send({
      to,
      from: 'test@luksr.com',
      subject: 'web directory subscription',
      html: `hi, you've been successfully subscribed to our newsletter.`,
    })

    return NextResponse.json({ message: 'Email sent' })
  } catch (e) {
    return NextResponse.json({ message: 'Email not sent' }, { status: 403 })
  }
}
