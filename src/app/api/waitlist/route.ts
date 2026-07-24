import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getWaitlistCount, incrementWaitlistCount } from "@/lib/waitlistStore";

export async function GET() {
  const count = getWaitlistCount();
  return NextResponse.json({ count });
}

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

    const currentCount = incrementWaitlistCount();
    console.log(`[SUSURRUS WAITLIST] New signup: ${email} (Role: ${role}) | New Total Count: ${currentCount}`);

    let emailSent = false;

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

        // Send confirmation email to subscriber
        await transporter.sendMail({
          from: `"Susurrus Platform" <${smtpUser}>`,
          to: email,
          subject: "Welcome to Susurrus Early Access 🎙️",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #0F172A; background-color: #ffffff; border-radius: 12px; border: 1px solid #E2E8F0;">
              <h2 style="color: #2A2859; margin-top: 0;">Welcome to Susurrus Early Access!</h2>
              <p>Thank you for joining the Susurrus Early Access waitlist. You are subscriber #${currentCount.toLocaleString()}!</p>
              
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

        // Send notification email to Developer (Parth Varekar)
        await transporter.sendMail({
          from: `"Susurrus Waitlist Bot" <${smtpUser}>`,
          to: "parthvarekar27@gmail.com",
          subject: `🎉 New Susurrus Early Access Signup (#${currentCount}): ${email}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #0F172A;">
              <h2 style="color: #2A2859;">New Early Access Subscriber! (#${currentCount})</h2>
              <p><strong>Subscriber Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Selected Role:</strong> ${role}</p>
              <p><strong>Total Waitlist Count:</strong> ${currentCount.toLocaleString()}</p>
              <p><strong>Signup Time:</strong> ${new Date().toLocaleString()}</p>
            </div>
          `,
        });

        emailSent = true;
      } catch (err: any) {
        console.error("Nodemailer error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Confirmation email dispatched successfully to subscriber and developer!",
      email,
      count: currentCount,
      developerNotification: "parthvarekar27@gmail.com",
    });
  } catch (error: any) {
    console.error("Waitlist API route error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please email parthvarekar27@gmail.com directly." },
      { status: 500 }
    );
  }
}
