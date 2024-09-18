import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;
const port = process.env.PORT;
const service = process.env.SERVICE;
const host = process.env.HOST;

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    const transporter = nodemailer.createTransport({
      service: service,
      host: host,
      port: port,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: user,
      to: user,
      subject: "Nuevo mensaje desde tu web",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse("Failed to send message.", { status: 500 })
  }
}