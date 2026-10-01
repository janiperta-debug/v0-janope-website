import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let en = false;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, organization, message, locale } = await request.json();
    en = locale === "en";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: en ? "Name, email and message are required." : "Nimi, sähköposti ja viesti ovat pakollisia kenttiä." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Janope Yhteydenotto <onboarding@resend.dev>",
      to: "info@janope.fi",
      subject: en
        ? `Contact request: ${name}${organization ? ` (${organization})` : ""}`
        : `Yhteydenotto: ${name}${organization ? ` (${organization})` : ""}`,
      replyTo: email,
      text: en
        ? `Name: ${name}\nEmail: ${email}\nSubject: ${organization || "Not provided"}\n\nMessage:\n${message}`
        : `Nimi: ${name}\nSähköposti: ${email}\nOrganisaatio: ${organization || "Ei ilmoitettu"}\n\nViesti:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: en ? "Message could not be sent. Please try again." : "Viestin lähetys epäonnistui. Yritä uudelleen." },
      { status: 500 }
    );
  }
}
