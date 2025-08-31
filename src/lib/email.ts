import nodemailer from 'nodemailer';

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Create a transporter with your email service configuration
const createTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Boolean(process.env.SMTP_SECURE === 'true'),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  
  return transporter;
};

export const sendEmail = async (payload: EmailPayload) => {
  const transporter = createTransporter();
  
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      ...payload,
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

export const generateVerificationEmail = (userName: string, verificationUrl: string) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #F8FAFC; border-radius: 10px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #4361EE; margin-bottom: 5px;">Verify Your Email</h1>
        <p style="color: #64748B; font-size: 16px;">Thanks for joining LearnOva!</p>
      </div>
      <div style="background-color: #FFFFFF; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
        <p style="color: #0F172A; font-size: 16px; margin-bottom: 25px;">Hi ${userName},</p>
        <p style="color: #0F172A; font-size: 16px; margin-bottom: 25px;">Welcome to Learnova! Please verify your email address to activate your account.</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verificationUrl}" style="background-color: #4361EE; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">Verify Email Address</a>
        </div>
        <p style="color: #64748B; font-size: 14px; margin-bottom: 20px;">If you did not create this account, please ignore this email.</p>
        <p style="color: #64748B; font-size: 14px; margin-bottom: 5px;">If the button above doesn't work, copy and paste this link in your browser:</p>
        <p style="color: #4361EE; font-size: 14px; word-break: break-all;">${verificationUrl}</p>
      </div>
      <div style="text-align: center; margin-top: 20px;">
        <p style="color: #94A3B8; font-size: 14px;">© ${new Date().getFullYear()} Learnova. All rights reserved.</p>
      </div>
    </div>
  `;
};
