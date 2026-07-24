import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, os = "Unspecified", topFeature = "Unspecified", dailyUsage = "Unspecified", painPoint = "None provided" } = body;

    console.log(`[SUSURRUS SURVEY SUBMISSION] Email: ${email} | OS: ${os} | Feature: ${topFeature} | Usage: ${dailyUsage}`);

    // Send survey notification email to Parth Varekar
    const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user: smtpUser, pass: smtpPass },
        });

        await transporter.sendMail({
          from: `"Susurrus Survey Bot" <${smtpUser}>`,
          to: "parthvarekar27@gmail.com",
          subject: `📊 New User Survey Response from ${email}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #0F172A; max-width: 600px; border: 1px solid #E2E8F0; border-radius: 8px;">
              <h2 style="color: #2A2859; margin-top: 0;">Optional Waitlist Survey Response</h2>
              <p><strong>Subscriber:</strong> <a href="mailto:${email}">${email}</a></p>
              <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 15px 0;" />
              <ul style="line-height: 1.8; color: #334155;">
                <li><strong>Primary Desktop OS:</strong> ${os}</li>
                <li><strong>Top Desired Feature:</strong> ${topFeature}</li>
                <li><strong>Estimated Daily Usage:</strong> ${dailyUsage}</li>
                <li><strong>Biggest Pain Point / Request:</strong> ${painPoint}</li>
              </ul>
              <p style="font-size: 12px; color: #64748B;">Submitted at ${new Date().toLocaleString()}</p>
            </div>
          `,
        });
      } catch (mailErr) {
        console.error("Survey email send error:", mailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for completing the optional survey!",
    });
  } catch (error) {
    console.error("Survey API handler error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
