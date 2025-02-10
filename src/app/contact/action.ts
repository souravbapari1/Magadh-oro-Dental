"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "magadhorodentalpatna@gmail.com",
    pass: "lqoo rirz jhnz cowc",
  },
});

export const sendEmail = async (data: {
  name: string;
  email: string;
  mobile: string;
  message: string;
}) => {
  const info = await transporter.sendMail({
    from: data.email, // sender address
    to: "magadhorodentalpatna@gmail.com,magadhorodentalclinic@gmail.com", // list of receivers
    subject: "Contact Us Form Submission - " + data.name, // Subject line
    text: `
Name: ${data.name}
Email: ${data.email}
Mobile: ${data.mobile}

${data.message}

`,
  });
  return info;
};
