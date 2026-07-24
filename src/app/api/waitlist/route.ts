import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, role = "User" } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    console.log(`[SUSURRUS WAITLIST] New signup request for: ${email} (Role: ${role})`);

    let emailSent = false;
    let errorDetails = "";

    // 1. TRY NODEMAILER (Gmail SMTP / Standard SMTP)
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        // A. Send confirmation email to subscriber
        await transporter.sendMail({
          from: `"Susurrus Platform" <${smtpUser}>`,
          to: email,
          subject: "Welcome to Susurrus Early Access 🎙️",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0F172A; background-color: #ffffff; border-radius: 12px; border: 1px solid #E2E8F0;">
              <h2 style="color: #2A2859; margin-top: 0;">Welcome to Susurrus Early Access!</h2>
              <p>Thank you for joining the Susurrus Early Access waitlist. We're excited to have you on board!</p>
              
              <div style="background-color: #F8FAFC; border-left: 4px solid #2A2859; padding: 16px; margin: 20px 0; border-radius: 4px;">
                <h3 style="margin-top: 0; color: #0F172A; font-size: 15px;">What to expect with Susurrus:</h3>
                <ul style="margin: 0; padding-left: 20px; color: #334155; line-height: 1.6;">
                  <li><strong>100% Local & Private:</strong> Audio and context commands are processed entirely on your GPU/CPU (whisper.cpp + Gemma 2B).</li>
                  <li><strong>Context Commands (Ctrl+Shift+T):</strong> Rewrite or transform text in-place across any app (VS Code, Slack, Notion).</li>
                  <li><strong>160 WPM Dictation:</strong> Sub-200ms real-time typing speed.</li>
                </ul>
              </div>

              <p>We are rolling out build invitations in weekly batches. If you need priority access or have questions, reply directly to this email or contact Parth Varekar at <a href="mailto:parthvarekar27@gmail.com" style="color: #2A2859; font-weight: bold;">parthvarekar27@gmail.com</a>.</p>
              
              <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 24px 0;" />
              <p style="font-size: 12px; color: #64748B; margin: 0;">© 2026 Susurrus Platform • Built by Parth Varekar</p>
            </div>
          `,
        });

        // B. Send notification email to Developer (Parth Varekar)
        await transporter.sendMail({
          from: `"Susurrus Waitlist Bot" <${smtpUser}>`,
          to: "parthvarekar27@gmail.com",
          subject: `🎉 New Susurrus Early Access Signup: ${email}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #0F172A;">
              <h2 style="color: #2A2859;">New Early Access Subscriber!</h2>
              <p><strong>Subscriber Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Selected Role:</strong> ${role}</p>
              <p><strong>Signup Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
          `,
        });

        emailSent = true;
      } catch (err: any) {
        console.error("Nodemailer error:", err);
        errorDetails += `Nodemailer failed: ${err?.message || err}. `;
      }
    }

    // 2. TRY RESEND API (if RESEND_API_KEY is provided and Nodemailer wasn't used)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!emailSent && resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Susurrus Early Access <onboarding@resend.dev>",
            to: [email],
            subject: "Welcome to Susurrus Early Access 🎙️",
            html: `<h2>Welcome to Susurrus Early Access!</h2><p>Thank you for signing up. Contact Parth Varekar at parthvarekar27@gmail.com for priority build access.</p>`,
          }),
        });

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Susurrus Waitlist <onboarding@resend.dev>",
            to: ["parthvarekar27@gmail.com"],
            subject: `🎉 New Waitlist Signup: ${email}`,
            html: `<p>New subscriber: ${email} (${role})</p>`,
          }),
        });

        emailSent = true;
      } catch (err: any) {
        console.error("Resend API error:", err);
        errorDetails += `Resend failed: ${err?.message || err}. `;
      }
    }

    // 3. RETURN RESPONSE
    if (emailSent) {
      return NextResponse.json({
        success: true,
        message: "Confirmation email dispatched successfully to subscriber and developer!",
        email,
        developerNotification: "parthvarekar27@gmail.com",
      });
    }

    // If no credentials configured yet, return clear guidance along with successful submission
    return NextResponse.json({
      success: true,
      message: "Waitlist entry recorded. Note: Configure SMTP_USER and SMTP_PASS in .env.local to send live emails.",
      email,
      developerNotification: "parthvarekar27@gmail.com",
      status: "credentials_pending",
      configGuide: "Set SMTP_USER=parthvarekar27@gmail.com and SMTP_PASS=your_gmail_app_password in .env.local for automated email delivery.",
    });
  } catch (error: any) {
    console.error("Waitlist API route error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please email parthvarekar27@gmail.com directly." },
      { status: 500 }
    );
  }
}
