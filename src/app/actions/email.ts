"use server";

export async function submitEmail(formData: FormData) {
  const email = formData.get("email");

  if (!email) {
    throw new Error("Email is required");
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL_WAITLIST;
  if (!webhookUrl) {
    throw new Error("Discord webhook URL not configured");
  }

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `New waitlist signup: ${email}`,
      }),
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send Discord message:", error);
    return { success: false, error: "Failed to join waitlist" };
  }
}
