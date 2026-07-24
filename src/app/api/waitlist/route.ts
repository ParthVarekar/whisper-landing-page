import { NextResponse } from "next/server";

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

    console.log(`[SUSURRUS WAITLIST SIGNUP] Email: ${email} | Role: ${role} | Time: ${new Date().toISOString()}`);

    // If Resend API Key is provided in environment variables, send real emails
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        // Send confirmation email to subscriber
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
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #0F172A;">
                <h1 style="color: #2A2859;">Welcome to Susurrus Early Access!</h1>
                <p>Thank you for signing up to test Susurrus — the on-device voice dictation and context command engine.</p>
                
                <h3 style="color: #2A2859;">What happens next?</h3>
                <ul>
                  <li><strong>100% Local & Private:</strong> Susurrus runs whisper.cpp + Gemma 2B directly on your machine (CUDA/Metal).</li>
                  <li><strong>Context Commands (Ctrl+Shift+T):</strong> Highlight text in any app, speak your instructions, and watch it rewrite in place.</li>
                  <li><strong>Sub-200ms Latency:</strong> Real-time voice typing at 160 WPM.</li>
                </ul>

                <p>We are rolling out build invitations in batches. If you have questions or feedback, reach out directly to Parth Varekar at <a href="mailto:parthvarekar27@gmail.com">parthvarekar27@gmail.com</a>.</p>
                
                <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 20px 0;" />
                <p style="font-size: 12px; color: #64748B;">© 2026 Susurrus Platform Engine • Built by Parth Varekar</p>
              </div>
            `,
          }),
        });

        // Send notification email to Parth Varekar
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Susurrus Waitlist <onboarding@resend.dev>",
            to: ["parthvarekar27@gmail.com"],
            subject: `🎉 New Waitlist Subscriber: ${email}`,
            html: `<p>New user signed up for Susurrus Early Access!</p><p><strong>Email:</strong> ${email}</p><p><strong>Role:</strong> ${role}</p>`,
          }),
        });
      } catch (emailErr) {
        console.error("Resend API error:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for joining Susurrus Early Access! Confirmation details have been sent.",
      recipient: email,
      notifyEmail: "parthvarekar27@gmail.com",
    });
  } catch (error) {
    console.error("Waitlist API handler error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again or email parthvarekar27@gmail.com directly." },
      { status: 500 }
    );
  }
}
