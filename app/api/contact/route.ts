import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, organization, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nimi, sähköposti ja viesti ovat pakollisia kenttiä." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Janope Yhteydenotto <onboarding@resend.dev>",
      to: "info@janope.fi",
      subject: `Yhteydenotto: ${name}${organization ? ` (${organization})` : ""}`,
      replyTo: email,
      text: `Nimi: ${name}\nSähköposti: ${email}\nOrganisaatio: ${organization || "Ei ilmoitettu"}\n\nViesti:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Viestin lähetys epäonnistui. Yritä uudelleen." },
      { status: 500 }
    );
  }
}
